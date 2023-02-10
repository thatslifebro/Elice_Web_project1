import './App.css';
import RegisterForm from './component/users/RegisterForm';

import RegisterForm1 from './component/users/RegisterForm1';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm1 from './component/users/LoginForm1';
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
import AdminOrder from './component/admin/AdminOrder';
import OrdersList from './component/order/OrdersList';
import AdminMain from './component/admin/AdminMain';
import OrderComplete from './component/order/OrderComplete';
import OrderInfo from './component/order/OrderInfo';
import Order from './component/order/Order';
import Cart from './component/order/cart';
import Main from './component/main/Main';
import Footer from './component/main/Footer';
import HeaderJJ from './component/main/HeaderJJ';
import AdminUserDB from './component/admin/AdminUserDB';

function App() {
  return (
    <Router>
      <HeaderJJ></HeaderJJ>

      <Routes>
        <Route path="/" />
        <Route path="/login" element={<LoginForm1 />}></Route>
        <Route path="/login1" element={<LoginForm />}>
          로그인 화면
        </Route>
        <Route path="/register" element={<RegisterForm1 />}>
          회원가입 화면
        </Route>
        <Route path="/register1" element={<RegisterForm />}>
          회원가입 화면
        </Route>
        <Route path="/admin/category" element={<AdminCategoryForm />}>
          관리자 카테고리 화면
        </Route>
        <Route path="/admin/product" element={<AdminProductUD />}>
          관리자 product update delete 화면
        </Route>
        <Route path="/admin/users" element={<AdminUserDB />} />
        <Route path="/userdata" element={<UserData />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/user-withdrawal" element={<UserWithdrawal />} />
        <Route path="/AddProduct" element={<AddProduct />}></Route>
        <Route path="/product" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/orders/list" element={<OrdersList />} />
        <Route path="/orders" element={<AdminOrder />} />
        <Route path="/order" element={<Order />}>
          주문페이지
        </Route>
        <Route path="/ordercomplete/:id" element={<OrderComplete />}>
          주문 완료 페이지
        </Route>
        <Route path="/order/:id" element={<OrderInfo />}>
          주문 완료 페이지
        </Route>
        <Route path="/admin" element={<AdminMain />} />
        <Route path="/main" element={<Main />}>
          메인
        </Route>
        <Route path="/cart" element={<Cart />}>
          장바구니
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
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
