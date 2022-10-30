import "./App.css";
import { Route, Routes } from "react-router-dom";
import IssueListPage from "./Pages/IssueListPage";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<IssueListPage />} />
      </Routes>
    </>
  );
}

export default App;
