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

 Amplify.configure(awsconfig);
 const client = generateClient();

 let MyReports = await client.graphql({ query: listReports
//   ,variables:{
//     limit: 50,
//     nextToken:"eyJ2ZXJzaW9uIjozLCJ0b2tlbiI6IkFnVjRuS1ZRVTJ5cWNCRytYRkN5WlpWZjF6cnR4U1o0S21BUGxKbDFHTWdlUzJJQWV3QUNBQWRCY0hCVGVXNWpBQkZGYm1OeWVYQjBhVzl1UTI5dWRHVjRkQUFWWVhkekxXTnllWEIwYnkxd2RXSnNhV010YTJWNUFFUkJiamRMVkRaQ1NuQk1jemt2VkdsbmEzRTFjVVI1TDFwRmFHeElZVFl4YzFSR09WaFlVMGcxWkVwVVFtWnZXblJsVTBwSlFqQmpRVFYyY0UweFprNWhPWGM5UFFBQkFBZGhkM010YTIxekFGQmhjbTQ2WVhkek9tdHRjenBoY0MxdWIzSjBhR1ZoYzNRdE1Ub3pNREU1TWpBNU5EWTVNRFk2YTJWNUx6UTRNbVU1WlRNNExXVXlPR010TkdJeFlTMDVZMlprTFRaaE9XRXhZVFUxWm1ZMVpBQzRBUUlCQUhpclhZeUl6VzVma3owWXRrUlhETWFGQ2lYTlZNSURhZmRLQ04rSlFEbnlkZ0d4djlXaFlmTTVWVGcwTURXeUFQZnpBQUFBZmpCOEJna3Foa2lHOXcwQkJ3YWdiekJ0QWdFQU1HZ0dDU3FHU0liM0RRRUhBVEFlQmdsZ2hrZ0JaUU1FQVM0d0VRUU0xeEZqSkVkNURQUTZtM0dUQWdFUWdEczh1bncwQ2E0N0NyTHlHZGJIOHpNQ2ViVlUxMjV0L0xWK05uNWtkNEIvNW85eFBZZkQ4SjhZTWNGbUt0Wi82N1ZzaFRpWG5BVGZZcGxBQndJQUFCQUFEUlJWc2Q5Q3Ezd1J0M0dPUXVlKzdjRnlZTU1PUS9uejRvWTY3dm9WSkFMMElJRzhhMElHMXhEcVREczdtTTVjLy8vLy93QUFBQUVBQUFBQUFBQUFBQUFBQUFFQUFBRzQ1anRsU29DZ2w4a0xkK3NPaUhsSnNaWDJpRDBXQzg0Z3JwUzJoZVNMdHU3VjJaaUFEZVZtR1BGVEtWODVqZk1JeHlUYUkwb3ZXS0VNalhoRzdlV2VrRktkMis5SWxCZklQOHl6L1QwWWRDT2VqOEpUYjVHYWNRWHZuWXlwOUo2WXFVSHEwY28zNjMvVTRGNGhSRGdJaWpJVjlXNUwwWkViMFdiNUo5SzJkNFEvMmZtTnFBYnM2L3BHQ1FWOGdEVWdZb2IzOE1MYmlyTnU4blV6RTQ1eTEwWG85Z0hGZXhhSmJaa1RUb2Q2bHRyMWNKcTRBTjBrM0R0L0Vpb3FVeDFzeGNWTTFkYnVxL3VUeUo5ZUxlM0ZPbWNoeWV0d1ZXNmhGZENMQktGL0hJNHFQVWU5QWtwQkZqYmVuaDgvRGt4MDhvbVhNUFBROVhjRldUTmVvU2d2VXFEZFFzd0s2VHpPYzA5dERjRzdtM0NYNUQyTDBXT0xJcjk3SmQwS3cxSCtCNTBMVElOUG9jV0kydW9DZ21ubTFsMUdHWGVMMkIxQXRkZ0tyS1IzSFNZV1B5WGIwckhndXVMd2Z6bDlhY3h2YTFCMnMwdExTSm1ueDVxVk5abXhiRk84S2NnMnNiK3I2WlVuNE5xV3lwYmN6djFrM1lTamE5czdZeUJQOEgwQVBkZHYrUmJ3SmJDeUdOdVp1Y3JqTjBJanFUejYweUpjSE1vNnBVbTNMOTdDRThjSmdURTVtbDIwMzc4YUhiN2JiSVloWHc4cTF4NTFnakhYYTZwdlRqMVQyM0gvOUFyZUFHY3daUUl3YWE1ZmN5ZVlNNlN0ZWlrWTYyUGpMb05XN0t1YklWQVAvMFVPUm51WlRMQTVQeFY0WnNXM1U1RWV0Uk9DSkVOakFqRUEzZDIrWEtkZ3lCZ01Oa2hFaTRVbmlmTmJMM250bWVnOE9xOXpsQkFVcU1tNFRNeGdXSWo5Rk9yQlFWdWdOUm84In0="
//     ,filter: {
//     status: {
//       eq: "3"
//     }
//   }
// }
});
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


function App() {

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
                <ScrollView width="100%" height="170px" maxWidth="400px"><ReportRequestRowCPCollection override={{items:{MyReports}}} /></ScrollView>
              </View>
            </View>

            <View position="relative">
              <View><ReportRequestFrame /></View>{/*ここのViewタグは必ずしも必要なし*/}
              <View position="absolute" top="117px" left="27px">{/*ここのViewタグは必ずしも必要なし、ScrollViewタグにポジション等を入れてもよい*/}
              <ScrollView width="100%" height="170px" maxWidth="400px">
                {MyReports.data.listReports.items.map((result, index) => (
                  <View key={result.id ? result.id : index}>
                    <SampleRowCP marginBottom={"15px"} event={() => myalert(result.status)} title={result.report_title} presenter={result.presenter_id} date={result.date} />
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
