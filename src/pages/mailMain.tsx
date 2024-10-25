import { View, Text, Button, TextField, TextAreaField, Fieldset, CheckboxField } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import '@aws-amplify/ui-react/styles.css';
import { MailTo } from "../API";
import { handler, listMailTos } from "../graphql/queries";
import { Link } from "react-router-dom";
import { createMailResultList } from "../graphql/mutations";

//Main-menuでは定義できなかったためMainMenuに変更
const MailMain = () => {
  const [Mail, setMail] = useState<MailTo[]>([])
  // const [results, setResults] = useState<Array<string>>([])
  const [inputHead, setInputHead] = useState("")
  const [inputBody, setInputBody] = useState("")
  const [inputFrom, setInputFrom] = useState("")
  // const [inputTo] = useState<Array<string>>([])
  const [inputTo, setInputTo] = useState<Array<string>>([])
  const [loading, setLoading] = useState(false)
  const client = generateClient()

  const geter = async () => {
    const mailList = await client.graphql({ query: listMailTos })
    setMail(mailList.data.listMailTos.items)
  }

  const sendMail = async () => {
    setLoading(true);
    //メール送信結果一覧テーブルへ保存する用
    let sendResult = "送信成功"
    let companyNames: Array<string> = []
    let subject = inputHead;
    let from = inputFrom

    const groupId = crypto.randomUUID();
    for (const to of inputTo) {
      const targetMail = Mail.find((mail) => mail.address === to)
      const cName = targetMail?.company
      const name = targetMail?.name
      const newBody = cName + "\r\n" + name + "　様\r\n" + inputBody
      const result = (await client.graphql({ query: handler, variables: { to: to, from: inputFrom, head: inputHead, body: newBody, company: cName, groupId: groupId } })).data.handler
      companyNames.push(cName as string)
      if (result && result.includes("httpStatusCode")) {
        const num = result.indexOf("httpStatusCode")
        const httpResult = result.substring(num + 15, num + 18)
        if (httpResult !== "200") {
          sendResult = "送信失敗"
        }
      } else {
        sendResult = "送信失敗"
      }
      console.log(result)
    }
    try {
      await client.graphql({
        query: createMailResultList, variables: {
          input: {
            id: groupId,
            companyNames: companyNames,
            subject: subject,
            from: from,
            result: sendResult,
          }
        }
      })
    } catch (error) {
      console.log(error)
    }
    alert("メールを送信しました。")
    setLoading(false)
    // }
    // setResults(results)
  }


  const setValue = (event: { target: { value: string; }; }) => {
    let targetValue = event.target.value
    let sessionValueJSON = sessionStorage.getItem("id")
    if (!sessionValueJSON) {
      const newArray = [targetValue]
      sessionStorage.setItem("id", JSON.stringify(newArray))
    } else {
      const sessionValueArray = JSON.parse(sessionValueJSON)
      if (sessionValueArray.includes(targetValue)) {
        const targetValueIndex = sessionValueArray.indexOf(targetValue)
        sessionValueArray.splice(targetValueIndex, 1)
        if (sessionValueArray.length === 0) {
          sessionStorage.removeItem("id")
        } else {
          sessionStorage.setItem("id", JSON.stringify(sessionValueArray))
        }
      } else {
        sessionValueArray.push(targetValue)
        sessionStorage.setItem("id", JSON.stringify(sessionValueArray))
      }
    }
  }

  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    sessionStorage.removeItem('id');
  });

  // const changeURL = (event: { target: { value: string; }; }) => {
  //   // if(location.href.includes(event.target.value)){
  //   const url = new URL(location.href);
  //   url.searchParams.append('mail', event.target.value);
  //   console.log(url)
  //   history.replaceState(null, "", url);
  //   // history.replaceState(null,"",location.href.replace((event.target.value + "/"),""));
  //   // } else {
  //   // history.replaceState(null,"",location.href + event.target.value + "/");
  //   // }
  // }

  const handleTo = (event: { target: { value: string; }; }) => {
    if (inputTo.includes(event.target.value)) {
      const Tos = inputTo.filter((item) => item !== event.target.value)
      setInputTo(Tos)
    } else {
      const Tos = inputTo.concat([event.target.value])
      setInputTo(Tos)
    }
  }

  const handleFrom = (event: { target: { value: string; }; }) => {
    setInputFrom(event.target.value)
  }

  const handleHead = (event: { target: { value: string; }; }) => {
    setInputHead(event.target.value)
  }

  const handleBody = (event: { target: { value: string; }; }) => {
    setInputBody(event.target.value)
  }

  useEffect(() => {
    geter()
  }, [])

  return (
    <View border={"solid 1px"} padding={"10px"} margin={"auto"} width={"50%"} height={"100%"} style={{ justifyContent: "center" }}>
      <View style={{ justifyContent: "center" }} backgroundColor={"limegreen"}>
        <Text>ソフトヒューベリオン株式会社　メール送信システム</Text>
      </View >
      <View style={{ justifyContent: "center" }}>
        <Fieldset legend>
          <TextField label="送信元" name="from" onChange={handleFrom} />
          {Mail.map((mail, key) =>
            <CheckboxField label={"会社名：" + mail.company + "/" + "メールアドレス：" + mail.address}
              key={key}
              name="mail"
              value={mail.address}
              onChange={handleTo}
              // onChange={setValue}
              size="small" />
          )}
          <TextField label="件名" name="head" onChange={handleHead} />
          <TextAreaField label="本文" name="text" onChange={handleBody} />
          <Button type="submit" onClick={sendMail} isLoading={loading}>送信</Button>
        </Fieldset>
      </View>

      <View>
        <Link to="/mail/resultList">送信結果一覧へ</Link>
      </View>

      <View>
        <Link to="/mail/xlsx">Excel取り込みへ</Link>
      </View>

      {/* <View>現在の送信元：</View>
      {inputFrom}
      <View>現在の選択：</View>
      {inputTo.map((tov, key) => (
        <View key={key}>{tov}</View>
      ))}
      <View>現在の件名：</View>
      {inputHead}
      <View>現在の本文：</View>
      {inputBody}
      <View>送信結果：</View>
      {results.map((rs, key) =>
        <Text key={key}>{rs}</Text>)} */}
    </View>
  )
}



export default MailMain;