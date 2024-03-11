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
 //------------------------

//MySQLからのデータ取得-----
// import AWSAppSyncClient from 'aws-appsync';
// import gql from 'graphql-tag';
// import * as type from "./types";
// import { graphql } from "react-apollo";
// import MyReportRowCollection from './ui-components/MyReportRowCollection';
// import studioTheme from './ui-components/studioTheme.js';
//-------------------------


// MyReports.data.listReports.items.sort(function(a, b){
// 	return (b.updatedAt > a.updatedAt ? 1 : -1);
// })
// console.log(MyReports);
// let MyReports = await client.graphql({ query: listReports
//   ,variables:{
//     limit: 1,
//   //   filter: {
//   //   status: {
//   //     eq: "3"
//   //   }
//   // }
// }});
// let time1 = MyReports;
// console.log(time1);
// // console.log(MyReports.data.listReports.nextToken);
// let count = 0;
// while(MyReports.data.listReports.nextToken && count < 3){
//     let addData = await client.graphql({ query: listReports
//       ,variables:{
//         limit: 1,
//         nextToken: MyReports.data.listReports.nextToken,
//     }});
//     MyReports.data.listReports.items = MyReports.data.listReports.items.concat(addData.data.listReports.items);
//     MyReports.data.listReports.nextToken = addData.data.listReports.nextToken;
//     count += 1
//   }
//   console.log(count)
// console.log(MyReports);




// console.log(sqlDatas1);
// query = gql`
//   query ListKengens {
//     listKengens {
//       items {
//         id
//         kengenName
//       }
//       nextToken
//     }
//   }
// `;
// const sqlDatas2 =  await appsync_client.query({ query })
// console.log(sqlDatas2);
// console.log(sqlDatas2.data.listKengens.items.find(({kengenName}) => kengenName === "Syacho"));

function myalert(st: string) {
  alert("ステータスは"+st+"です")
  if(st == "3"){
    alert("閲覧画面に遷移します")
  } else {
    alert("編集画面に遷移します")
  }
}

// usersとkengensを結合
// const combinedData = sqlDatas1.data.listUsers.items.map(user => {
//   const kengen = sqlDatas2.data.listKengens.items.find(({id}) => id === user.kengenId);
//   console.log(kengen);
//   return {
//     ...user,
//     kengen_name: kengen ? kengen.kengen_name : 'N/A'
//   };
// });
// console.log(combinedData);


// const mysqlData = await appsync_client.query<type.ListIngredientsQuery>({ query })
//   .then(response => {
//     console.log(response.data.listIngredients?.items[0]);
//     return response.data.listIngredients?.items[0]
//   })
//   .catch(error => {
//     console.log(error);
//   });

Amplify.configure(awsconfig);
const client = generateClient();
const MyReports = await client.graphql({
  query: listReports
});


// async function getDataFromDynamoDB(): Promise<GraphQLResult>{
//   const result = await client.graphql({
//     query: listReports
//   });
//   return result
// }

function App() {
//   let MyReports
//   const fetchData = async () => {
//     try {
//       // MyReports に直接非同期関数の結果を代入することはできません
//       const result = await getDataFromDynamoDB();
//       MyReports = result; // ここで代入しても外部での使用に注意が必要です
//       console.log(MyReports);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

// useEffect(() => {
//   fetchData(); // fetchData を非同期に呼び出す
// }, []); // 空の依存配列で初回レンダリング時のみ実行
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
                {MyReports.data.listReports.items.map((result, index) => (
                  <View key={result.id ? result.id : index}>
                    <SampleRowCP marginBottom={"15px"} event={() => myalert(result.status)} title={result.report_title ? result.report_title:"No Title"} presenter={result.presenter_id} date={result.date ? result.date:"No Date"} />
                  </View>
                 ))}
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
