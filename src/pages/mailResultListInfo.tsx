import { View, Table, TableHead, TableRow, TableCell, TableBody } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { listMailResults } from "../graphql/queries";
import { generateClient } from "aws-amplify/api";
import { MailResult } from "../API";
import { Link, useParams } from "react-router-dom";

const MailResultListInfo = () => {

    const {id} = useParams()
    console.log(id)
    // const client = generateClient()
    // const [MailResults, setMailResults] = useState<MailResult[]>([])
    // const geter = async () => {
    //     const sendResults = await client.graphql({ query: listMailResults })
    //     setMailResults(sendResults.data.listMailResults.items)
    // }
    // useEffect(() => {
    //     geter()
    // }, [])
    return (
        <View>
            {id}
        </View>
    )
}

export default MailResultListInfo;