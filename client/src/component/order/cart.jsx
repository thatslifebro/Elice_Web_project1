import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Cart = () => {
  const ProductList = ({ product }) => {
    return (
      <tr>
        <th scope="row" className="border-0">
          <img
            src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg"
            alt=""
            width="70"
            className="img-fluid rounded shadow-sm"
          />
          <td className="border-0 align-middle">
            <strong>{product.title}</strong>
          </td>
        </th>
        <td className="border-0 align-middle">
          <strong>{product.price} 원</strong>
        </td>
        <td className="border-0 align-middle">
          <strong>{product.quantity} 개</strong>
        </td>
        <td className="border-0 align-middle">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setProducts((current) => {
                const newProducts = products.filter(
                  (prod) => prod.productId !== product.productId,
                );
                const total = newProducts.reduce((price, product) => {
                  return price + product.price * product.quantity;
                }, 0);
                setTotalPrice(total);
                localStorage.setItem('items', JSON.stringify(newProducts));
                return newProducts;
              });
            }}
            className="bi bi-trash"
          >
            삭제
          </Button>
        </td>
      </tr>
    );
  };

  const [products, setProducts] = useState([{}]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(0);
    const array = JSON.parse(localStorage.getItem('items'));
    if (array !== null) {
      setProducts(array);
      const total = array.reduce((price, product) => {
        return price + product.price * product.quantity;
      }, 0);
      setTotalPrice(total);
    }
  }, []);
  return (
    <div className="cart">
      <h1 className="container px-4 px-lg-5 my-5">장바구니 목록</h1>
      <section className="py-1">
        <div className="container px-4 px-lg-5 my-1">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 px-3 text-uppercase">상품목록</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">가격</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">수량</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">삭제하기</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products[0]?.productId !== undefined
                      ? products.map((product) => {
                          return (
                            <ProductList
                              key={product.productId}
                              product={product}
                            />
                          );
                        })
                      : '물품이 없습니다'}
                    <tr className="d-flex justify-content-between py-3 border-bottom">
                      <th className="text-muted">총 가격</th>
                      <th className="fw-bold">{totalPrice}원</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <a href="/order" className="d-grid gap-2 col-9 mx-auto">
          <button
            className="btn btn-dark rounded-pill py-2 d-md-block"
            type="button"
          >
            구매 하러가기
          </button>
        </a>
      </section>
    </div>
  );
};
export default Cart;
