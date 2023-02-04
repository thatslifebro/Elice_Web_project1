import './App.css';
import RegisterForm from './component/users/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './component/users/LoginForm';
import AddProduct from './component/admin/AddProduct';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminCategoryForm from './component/admin/AdminCategory';
import AdminProductUD from './component/admin/AdminProductUD';
import UserData from './component/users/UserData';
import UserWithdrawal from './component/users/UserWithdrawal';
import ChangePassword from './component/users/ChangePassword';
import CategoryProducts from './component/product/CategoryProducts';
import Product from './component/product/Product';

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
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/userdata" element={<UserData />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/user-withdrawal" element={<UserWithdrawal />} />
        <Route path="/AddProduct" element={<AddProduct />}></Route>
        <Route path="/product" element={<CategoryProducts />}>
          카테고리별 상품목록
        </Route>
        <Route path="/product/:id" element={<Product />}>
          상품상세
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
