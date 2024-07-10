import { View, Text, Button, TextField, TextAreaField, Fieldset, CheckboxField } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { handler, listMailTos } from "./graphql/queries";
import { generateClient } from "aws-amplify/api";
import { MailTo } from "./API";
import '@aws-amplify/ui-react/styles.css';

//Main-menuでは定義できなかったためMainMenuに変更
const MainMenu = () => {
  const [Mail, setMail] = useState<MailTo[]>([])
  const [inputHead, setInputHead] = useState("")
  const [inputBody, setInputBody] = useState("")
  const [inputFrom, setInputFrom] = useState("")
  const [inputTo] = useState<Array<string>>([])
  // const [inputTo, setInputTo] = useState<Array<string>>([])
  const client = generateClient()

  const geter = async () => {
    const mailList = await client.graphql({ query: listMailTos })
    setMail(mailList.data.listMailTos.items)
  }

  const sendMail = async () => {
    for (const to of inputTo) {
      const targetMail = Mail.find((mail) => mail.address === to)
      const cName = targetMail?.company
      const name = targetMail?.name
      const newBody = cName + "\r\n" + name + "　様\r\n" + inputBody
      console.log(to, inputFrom, inputHead, newBody)
      await client.graphql({ query: handler, variables: { to: to, from: inputFrom, head: inputHead, body: newBody } })
    }
    alert("メールを送信しました")
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
        sessionStorage.setItem("id", JSON.stringify(sessionValueArray))
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

  // const handleTo = (event: { target: { value: string; }; }) => {
  //   if (inputTo.includes(event.target.value)) {
  //     const Tos = inputTo.filter((item) => item !== event.target.value)
  //     setInputTo(Tos)
  //   } else {
  //     const Tos = inputTo.concat([event.target.value])
  //     setInputTo(Tos)
  //   }
  // }

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
    <View border={"solid 1px"} padding={"10px"} marginLeft={"50px"} width={"auto"} style={{ justifyContent: "center" }}>
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
              // onChange={handleTo}
              onChange={setValue}
              size="small" />
          )}
          <TextField label="件名" name="head" onChange={handleHead} />
          <TextAreaField label="本文" name="text" onChange={handleBody} />
          <Button type="submit" onClick={sendMail}>送信</Button>
        </Fieldset>
      </View>

      <View>現在の送信元：</View>
      {inputFrom}
      <View>現在の選択：</View>
      {inputTo.map((tov, key) => (
        <View key={key}>{tov}</View>
      ))}
      <View>現在の件名：</View>
      {inputHead}
      <View>現在の本文：</View>
      {inputBody}
    </View>
  )


}



export default MainMenu;