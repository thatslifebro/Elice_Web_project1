import React from 'react';
import { Link } from 'react-router-dom';
class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <h1 class="container px-4 px-lg-5 my-5">장바구니 목록</h1>
        <section class="py-1">
          <div class="container px-4 px-lg-5 my-1">
            <div class="row">
              <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" class="border-0 bg-light">
                          <div class="p-2 px-3 text-uppercase">상품목록</div>
                        </th>
                        <th scope="col" class="border-0 bg-light">
                          <div class="py-2 text-uppercase">가격</div>
                        </th>
                        <th scope="col" class="border-0 bg-light">
                          <div class="py-2 text-uppercase">수량</div>
                        </th>
                        <th scope="col" class="border-0 bg-light">
                          <div class="py-2 text-uppercase">삭제하기</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" class="border-0">
                          <div class="p-2">
                            <img
                              src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg"
                              alt=""
                              width="70"
                              class="img-fluid rounded shadow-sm"
                            />
                            <div class="ms-3 d-inline-block align-middle">
                              <h5 class="mb-0">
                                <a
                                  href="#"
                                  class="text-dark d-inline-block align-middle"
                                >
                                  딸기
                                </a>
                              </h5>
                            </div>
                          </div>
                        </th>
                        <td class="border-0 align-middle">
                          <strong>30,000 원</strong>
                        </td>
                        <td class="border-0 align-middle">
                          <strong>2 개</strong>
                        </td>
                        <td class="border-0 align-middle">
                          <a href="#" class="text-dark">
                            <i class="bi bi-trash">삭제</i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="p-2">
                            <img
                              src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg"
                              alt=""
                              width="70"
                              class="img-fluid rounded shadow-sm"
                            />
                            <div class="ms-3 d-inline-block align-middle">
                              <h5 class="mb-0">
                                <a href="#" class="text-dark d-inline-block">
                                  수박
                                </a>
                              </h5>
                            </div>
                          </div>
                        </th>
                        <td class="align-middle">
                          <strong>15,000 원</strong>
                        </td>
                        <td class="align-middle">
                          <strong>3 개</strong>
                        </td>
                        <td class="align-middle">
                          <a href="#" class="text-dark">
                            <i class="bi bi-trash">삭제</i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="p-2">
                            <img
                              src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg"
                              alt=""
                              width="70"
                              class="img-fluid rounded shadow-sm"
                            />
                            <div class="ms-3 d-inline-block align-middle">
                              <h5 class="mb-0">
                                <a href="#" class="text-dark d-inline-block">
                                  토마토
                                </a>
                              </h5>
                            </div>
                          </div>
                        </th>
                        <td class="align-middle">
                          <strong>100,00 원</strong>
                        </td>
                        <td class="align-middle">
                          <strong>3 개</strong>
                        </td>
                        <td class="align-middle">
                          <a href="#" class="text-dark">
                            <i class="bi bi-trash">삭제</i>
                          </a>
                        </td>
                      </tr>
                      <li class="d-flex justify-content-between py-3 border-bottom">
                        <strong class="text-muted">총 가격</strong>
                        <h5 class="fw-bold">55,000원</h5>
                      </li>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <a href="/order" class="d-grid gap-2 col-9 mx-auto">
            <button
              class="btn btn-dark rounded-pill py-2 d-md-block"
              type="button"
            >
              구매 하러가기
            </button>
          </a>
        </section>
      </div>
    );
  }
}
export default Cart;
