import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import IssueListPage from './Pages/IssueListPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<IssueListPage />} />
      </Routes>
    </>
  );
}

export default App;
