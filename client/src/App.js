import './App.css';
import RegisterForm from './component/users/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './component/users/LoginForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserData from './component/users/UserData';
import { Nav } from 'react-bootstrap';
import UserWithdrawal from './component/users/UserWithdrawal';
import ChangePassword from './component/users/ChangePassword';

function App() {
  return (
    <Router>
      <header>
        test head
        <br />
        <br />
        <br />
        test head
      </header>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/userdata" element={<UserData />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/userwithdrawal" element={<UserWithdrawal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <div>올바르지 않은 경로입니다.</div>
      <Link to="/">메인 화면으로</Link>
    </div>
  );
}

export default App;
