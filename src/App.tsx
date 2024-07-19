import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import MailMain from "./pages/mailMain";
import MailResultList from "./pages/mailResultList";
import MailResultListInfo from "./pages/mailResultListInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Link to="/">Home</Link> | <Link to="/about">About</Link> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mail/main" element={<MailMain />} />
          <Route path="/mail/resultList" element={<MailResultList />} />
          <Route path="/mail/resultList/:id" element={<MailResultListInfo />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;