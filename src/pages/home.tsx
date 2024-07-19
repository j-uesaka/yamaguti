import { View,Text } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

const Home = () => {
    
  
    return (
      <View border={"solid 1px"} padding={"10px"} marginLeft={"50px"} width={"auto"} style={{ justifyContent: "center" }}>
        <Text>ホーム画面です</Text>
        <Link to="/mail/main">メール画面へ</Link>
      </View>
    )
  }
  
  
  
  export default Home;