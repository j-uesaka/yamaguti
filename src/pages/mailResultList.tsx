import { View, Heading, Text } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { listMailResults } from "../graphql/queries";
import { generateClient } from "aws-amplify/api";
import { MailResult } from "../API";
import { Link } from "react-router-dom";
import { format } from 'date-fns';

const MailResultList = () => {
    // UTC日時をJSTに変換
  const timeZone = 'Asia/Tokyo';

    const client = generateClient()
    const [MailResults, setMailResults] = useState<MailResult[]>([])
    const geter = async () => {
        const sendResults = await client.graphql({ query: listMailResults })
        setMailResults(sendResults.data.listMailResults.items)
    }
    useEffect(() => {
        geter()
    }, [])
    return (
        <View width={"auto"} margin={"20px"}>
            <Heading level={4}>送信済みメール一覧画面</Heading>
            {MailResults.map((mr, key) =>
                <View key={key} textAlign={"center"} margin={"20px auto"} padding={"20px"} width={"80%"} fontSize={"20px"} border={"solid 1px"}>
                    <Link to={`/mail/resltList/${mr.id}`} style={{ textDecorationLine: "none" }}>
                        <View display={"flex"} style={{ justifyContent: "space-between" }} >
                            <Text fontSize={"30px"} fontWeight={"bold"}>{mr.head}</Text>
                            <Text>{(mr.createdAt).toLocaleString("ja-JP")}</Text>
                        </View>
                        <View display={"flex"} style={{ justifyContent: "space-between" }} >
                            <Text>送信元：{mr.from}</Text>
                            <Text>送信先：{mr.company}</Text>
                            <Text>{if(mr.result === "送信成功")}</Text>
                        </View>
                    </Link>
                </View>
            )}
            <Link to={"/mail/main"}></Link>
        </View>
    )
}

export default MailResultList;