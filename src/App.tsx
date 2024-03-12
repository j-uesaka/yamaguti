import './App.css'
import '@aws-amplify/ui-react/styles.css';
import { Flex, ScrollView, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from 'aws-amplify/api';
import { listReports, } from './graphql/queries';

//UI関係------------------
// import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import DashBoard from './ui-components/DashBoard';
import MyReportFrame from './ui-components/MyReportFrame';
import ReportRequestFrame from './ui-components/ReportRequestFrame';
import NewReportFrame from './ui-components/NewReportFrame';
import NewReportRowCPCollection from './ui-components/NewReportRowCPCollection';
import ReportRequestRowCPCollection from './ui-components/ReportRequestRowCPCollection';
import MyReportRowCPCollection from './ui-components/MyReportRowCPCollection';
import SampleRowCP from './ui-components/SampleRowCP';
import SampleFrame from './ui-components/SampleFrame';
import { useEffect, useState } from 'react';
import { ListReportsQuery } from './API';
 //------------------------

//MySQLからのデータ取得-----
import AWSAppSyncClient from 'aws-appsync';
import gql from 'graphql-tag';
//-------------------------
const appsync_client = new AWSAppSyncClient({
  url: import.meta.env.VITE_ENDPOINT,
  region: import.meta.env.VITE_REGION,
  auth: {
    type: import.meta.env.VITE_AUTTYPE, 
    apiKey: import.meta.env.VITE_APIKEY, 
  },
  disableOffline: true,
});

let MySQLQuery = gql`
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  )   {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;


function myalert(st: string) {
  alert("ステータスは"+st+"です")
  if(st == "3"){
    alert("閲覧画面に遷移します")
  } else {
    alert("編集画面に遷移します")
  }
}


Amplify.configure(awsconfig);
const client = generateClient();

function App() {
  const [MyReports,setMyReports] = useState<ListReportsQuery>();
  const [Users,setUsers] =  useState<DataType>();
  useEffect(() => {
    const fetchData = async () =>{
      try {
        const result = await client.graphql({query: listReports});
        setMyReports(result.data);
        const data = await appsync_client.query({ query: MySQLQuery });
        setUsers(data.data as DataType);
      } 
      catch(error) {
        console.error("error messege",error)
      }
    };
    fetchData();
  }, []);
  console.log(Users?.listUsers.items[0])
  
  return (
    <>
        <View width="100%">
          <Flex justifyContent="flex-start" marginBottom="20px"><DashBoard /></Flex>
          <Flex wrap="wrap" gap="2rem">

            <View position="relative">
              <View><NewReportFrame /></View>{/*ここのViewタグは必ずしも必要なし*/}
              <View position="absolute" top="117px" left="27px">{/*ここのViewタグは必ずしも必要なし、ScrollViewタグにポジション等を入れてもよい*/}
                <ScrollView width="100%" height="170px" maxWidth="400px"><NewReportRowCPCollection /></ScrollView>
              </View>
            </View>

            <View position="relative">
              <View><MyReportFrame /></View>{/*ここのViewタグは必ずしも必要なし*/}
              <View position="absolute" top="117px" left="27px">{/*ここのViewタグは必ずしも必要なし、ScrollViewタグにポジション等を入れてもよい*/}
                <ScrollView width="100%" height="170px" maxWidth="400px"><MyReportRowCPCollection /></ScrollView>
              </View>
            </View>

            <View position="relative">
              <View><ReportRequestFrame /></View>{/*ここのViewタグは必ずしも必要なし*/}
              <View position="absolute" top="117px" left="27px">{/*ここのViewタグは必ずしも必要なし、ScrollViewタグにポジション等を入れてもよい*/}
                <ScrollView width="100%" height="170px" maxWidth="400px"><ReportRequestRowCPCollection overrides={{items:{MyReports}}} /></ScrollView>
              </View>
            </View>

            <View position="relative">
              <View><ReportRequestFrame /></View>{/*ここのViewタグは必ずしも必要なし*/}
              <View position="absolute" top="117px" left="27px">{/*ここのViewタグは必ずしも必要なし、ScrollViewタグにポジション等を入れてもよい*/}
              <ScrollView width="100%" height="170px" maxWidth="400px">
                {MyReports?.listReports?.items.map((result, index) => (
                  <View key={result?.id ? result.id : index}>
                    <SampleRowCP marginBottom={"15px"} event={() => myalert(result ? result.status:"No Date")} title={result ? result.report_title ? result.report_title:"No Title" :"No Title"} presenter={result ? result.presenter_id :"No " } date={result ? result.date ? result.date:"No Date" :"No Date"} />
                  </View>
                 ))}
                 {/* {MyReports?.listReports?.items.map((result, index) => (
  <View key={result?.id || index}>
    <SampleRowCP
      marginBottom="15px"
      event={() => myalert(result?.status || "No Date")}
      title={result?.report_title || "No Title"}
      presenter={result?.presenter_id || "No"}
      date={result?.date || "No Date"}
    />
  </View>
))} */}
              </ScrollView>
              </View>
              <View>※これはコレクションを使わない表示</View>
            </View>

            <View position="relative">
              <View><SampleFrame sampleRowCP={<ReportRequestRowCPCollection />} /></View>{/*ここのViewタグは必ずしも必要なし*/}
              <View>※これは「Set an onClick action」を使ってコンポーネント内に別のコレクションを追加した表示（なぜか一つしか出ない）</View>
              <View>あとこれだとスクロールバーの表示が上のやり方では無理</View>
            </View>
            
          </Flex>
        </View>
    </>
  )
}

export default App
