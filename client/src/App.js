import './App.css';
import RegisterForm from './component/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './component/LoginForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminCategoryForm from './component/AdminCategory';
import AdminProductUD from './component/AdminProductUD';

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
        <Route path="/login" element={<LoginForm />}>
          로그인 화면
        </Route>
        <Route path="/register" element={<RegisterForm />}>
          회원가입 화면
        </Route>
        <Route path="/admin/category" element={<AdminCategoryForm />}>
          관리자 카테고리 화면
        </Route>
        <Route path="/admin/product" element={<AdminProductUD />}>
          관리자 product update delete 화면
        </Route>
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
