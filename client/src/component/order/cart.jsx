import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import instance from '../../util/axios-setting';
const Cart = ({ order }) => {
  const ProductList = ({ product }) => {
    const [imgSrc, setImgSrc] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
      setCount(Number(product.quantity));
      instance.get(`/api/products/${product.productId}`).then((res) => {
        instance
          .get(`/api/products/img/${res.data.imageKey}`, {
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            responseType: 'blob',
          })
          .then((res) => {
            const getfile = new File([res.data], product.imageKey);
            const reader = new FileReader();
            reader.onload = (event) => {
              const previewImage = String(event.target?.result);
              setImgSrc(previewImage);
            };
            reader.readAsDataURL(getfile);
          });
      });
    }, []);

    return (
      <tr>
        <td scope="row" className="border-0">
          <img
            style={{ width: '100px', height: '100px' }}
            src={imgSrc}
            alt="current"
          />
        </td>
        <td className="border-0 align-middle">
          <strong>{product.title}</strong>
        </td>
        <td className="border-0 align-middle">
          <strong>{product.price} 원</strong>
        </td>
        <td className="border-0 align-middle">
          <strong>{count} 개</strong>
          <button
            onClick={() => {
              setCount((now) => {
                const tmp = now;
                return Number(tmp) + 1;
              });

              const array = products.map((i) => {
                if (i.productId === product.productId) {
                  i.quantity = Number(product.quantity) + 1;
                }
                return i;
              });
              setProducts(array);
              localStorage.setItem('items', JSON.stringify(array));

              setTotalPrice((cur) => {
                const tmp = cur;
                return tmp + product.price;
              });
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              if (count === 1) {
                return;
              }
              setCount((now) => {
                const tmp = now;
                return Number(tmp) - 1;
              });
              const array = products.map((i) => {
                if (i.productId === product.productId) {
                  i.quantity = Number(product.quantity) - 1;
                }
                return i;
              });
              setProducts(array);
              localStorage.setItem('items', JSON.stringify(array));
              setTotalPrice((cur) => {
                const tmp = cur;
                return tmp - product.price;
              });
            }}
          >
            -
          </button>
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
                if (newProducts.length === 0) {
                  setEmpty(true);
                }
                return newProducts;
              });
            }}
            variant="outline-light"
          >
            <text>🗑️</text>
          </Button>
        </td>
      </tr>
    );
  };

  const deleteAll = (e) => {
    return;
  };

  const [products, setProducts] = useState([{}]);
  const [empty, setEmpty] = useState(true);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(0);
    const array = JSON.parse(localStorage.getItem('items'));
    if (array.length !== 0) {
      setEmpty(false);
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
                        <div className="p-2 px-3 text-uppercase">상품이름</div>
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
                    {products[0]?.productId !== undefined ? (
                      products.map((product) => {
                        return (
                          <ProductList
                            key={product.productId}
                            product={product}
                          />
                        );
                      })
                    ) : (
                      <tr>
                        <th scope="col" className="border-1 bg-light">
                          <div className="py-4 text-uppercase">
                            장바구니가 비었습니다
                          </div>
                        </th>
                      </tr>
                    )}
                    <tr className="d-flex justify-content-between py-3 border-bottom">
                      <th className="text-muted border-0 bg-light">총 가격</th>
                      <th
                        style={{ color: 'red' }}
                        className="fw-bold border-0 bg-light"
                      >
                        {totalPrice}원
                      </th>
                    </tr>
                    <Button variant="danger" onClick={deleteAll}>
                      전체 삭제
                    </Button>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {order || empty ? (
          ''
        ) : (
          <a href="/order" className="d-grid gap-2 col-9 mx-auto">
            <button
              className="btn btn-dark rounded-pill py-2 d-md-block"
              type="button"
            >
              구매 하러가기
            </button>
          </a>
        )}
      </section>
    </div>
  );
};
export default Cart;
