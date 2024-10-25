import { View, Heading, Text, Alert, Button } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { Link } from "react-router-dom";
import { format } from 'date-fns-tz';
import ReactPaginate from 'react-paginate';
import { listMailResultLists } from "../graphql/queries";
import { MailResultList } from "../API";

const MailResultLists = () => {
    const client = generateClient();
    const [mailResults, setMailResults] = useState<MailResultList[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10; // 1ページあたりの表示数

    const geter = async () => {
        const sendResults = await client.graphql({ query: listMailResultLists });
        const sortResult = sendResults.data.listMailResultLists.items.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));
        setMailResults(sortResult);
    };

    useEffect(() => {
        geter();
    }, []);

    const handlePageChange = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentPageData = mailResults.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(mailResults.length / itemsPerPage);

    return (
        <View padding={"10px 30px"}>
            <View display={"flex"}>
                <Heading level={4} marginRight={"30px"}>送信済みメール一覧画面</Heading>
                <Link to="/mail/main">メール作成画面へ</Link>
            </View>
            <View width={"auto"} margin={"20px"}>
                {currentPageData.map((mr, key) => (
                    <View padding={"10px"} style={{ justifyContent: "center" }} key={key}>
                        <Link to={`/mail/resultList/${mr.id}`} style={{ textDecorationLine: "none" }}>
                            <View color={"black"} padding={"10px"} style={{ justifyContent: "space-between" }} display={"flex"} textAlign={"center"} fontSize={"20px"} border={"solid 1px"}>
                                <View style={{ textAlign: "left" }}>
                                    <Text color={"#0f83fd"} fontSize={"30px"} fontWeight={"bold"}>{mr.companyNames[0]}</Text>
                                    <Text color={"#0f83fd"} fontSize={"28px"} paddingTop={"5px"}>件名：{mr.subject}</Text>
                                </View>
                                <View>
                                    <Text color={"#0f83fd"}>送信日時：{format(new Date(mr.createdAt), 'yyyy/MM/dd HH:mm:ss', { timeZone: 'Asia/Tokyo' })}</Text>
                                    <Text color={"#0f83fd"}>送信元：{mr.from}</Text>
                                    <Alert marginLeft={"auto"} variation={mr.result === "送信成功" ? "success" : "error"} width={"fit-content"}>{mr.result}</Alert>
                                </View>
                            </View>
                        </Link>
                    </View>
                ))}
                <View style={{ justifyContent: "center" }}>
                    <ReactPaginate
                        pageCount={pageCount} // 総ページ数
                        marginPagesDisplayed={2} // 先頭と末尾に表示するページの数
                        pageRangeDisplayed={5} // 現在のページの前後に表示するページの数
                        onPageChange={handlePageChange} // ページが変更されたときのイベント
                        containerClassName='pagination' // ページネーションリンクの親要素のクラス名
                        pageClassName='page-item' // 各子要素(li要素)のクラス名
                        pageLinkClassName='page-link' // ページネーションのリンクのクラス名
                        activeClassName='active' // 現在のページのクラス名
                        previousLabel='<' // 前のページへのリンクのテキスト
                        nextLabel='>' // 次のページへのリンクのテキスト
                        previousClassName='page-item' // '<'の親要素(li)のクラス名
                        nextClassName='page-item' // '>'の親要素(li)のクラス名
                        previousLinkClassName='page-link' // '<'のリンクのクラス名
                        nextLinkClassName='page-link' // '>'のリンクのクラス名
                        disabledClassName='disabled' // 先頭または末尾に行ったときに無効化するクラス
                        breakLabel='...' // ページがたくさんあるときに表示しない番号の部分をどう表示するか
                        breakClassName='page-item' // '...'のクラス名
                        breakLinkClassName='page-link' // '...'のリンクのクラス名
                    />
                </View>
                <Button marginTop={"10px"} onClick={() => window.location.href = '/mail/main'}>戻る</Button>
            </View>
        </View>
    );
}

export default MailResultLists;
