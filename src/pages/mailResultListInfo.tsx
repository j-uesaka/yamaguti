import { Table, Text, TableBody, TableCell, TableHead, TableRow, View } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { listMailResultDetails } from "../graphql/queries";
import { generateClient } from "aws-amplify/api";
import { MailResultDetail } from "../API";
import { useParams } from "react-router-dom";
import { format } from "date-fns-tz";

const MailResultListInfo = () => {
    const { id } = useParams();
    const client = generateClient();
    const [mailResults, setMailResults] = useState<MailResultDetail[]>([]);
    const [loading, setLoading] = useState(true);

    const geter = async () => {
        const initialResult = await client.graphql({ query: listMailResultDetails, variables: { filter: { groupId: { eq: id } } } });
        let allResult = initialResult.data.listMailResultDetails.items;
        let nextToken = initialResult.data.listMailResultDetails.nextToken;
        while (nextToken) {
            const addResult = await client.graphql({
                query: listMailResultDetails,
                variables: {
                    nextToken
                }, // 1ページあたりのアイテム数と次のページのトークンを指定
            });
            allResult.push(...addResult.data.listMailResultDetails.items);
            nextToken = addResult.data.listMailResultDetails.nextToken;
        }
        setMailResults(allResult);
        setLoading(false);
    }

    useEffect(() => {
        geter();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    console.log(mailResults)

    return (
        <View margin={"20px auto"} width={"90%"}>
            {mailResults.length > 0 && (
                <View marginBottom={"30px"}>
                    <View display={"flex"}>
                        <Text fontWeight={"bold"}>送信日時：</Text>
                        <Text>{format(new Date(mailResults[0].createdAt), 'yyyy/MM/dd HH:mm:ss', { timeZone: 'Asia/Tokyo' })}</Text>
                    </View>
                    <View display={"flex"}>
                        <Text fontWeight={"bold"}>送信元：</Text>
                        <Text>{mailResults[0].from}</Text>
                    </View>
                    <View display={"flex"}>
                        <Text fontWeight={"bold"}>件名：</Text>
                        <Text>{mailResults[0].head}</Text>
                    </View>
                    <View display={"flex"}>
                        <Text fontWeight={"bold"}>本文(一件目の会社名/宛先名で表示)：</Text>
                        <Text style={{ whiteSpace: "pre-wrap" }}>{mailResults[0].body}</Text>
                    </View>
                </View>
            )}
            <Table
                caption=""
                highlightOnHover={false}
            >
                <TableHead>
                    <TableRow>
                        <TableCell as="th" width={"20%"}>会社名</TableCell>
                        <TableCell as="th" width={"10%"}>宛先名</TableCell>
                        <TableCell as="th" width={"20%"}>アドレス</TableCell>
                        <TableCell as="th" width={"50%"}>送信結果</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mailResults.map((item, key) =>
                        <TableRow key={key}>
                            <TableCell>{item.company}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.to}</TableCell>
                            <TableCell color={item.result !== "送信成功" ? "red" : "black"}>{item.result}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </View>
    );
};

export default MailResultListInfo;
