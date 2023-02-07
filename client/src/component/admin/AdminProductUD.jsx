import React, { useState, useRef } from 'react';
import axios from 'axios';
import {
  Button,
  Form,
  Row,
  Col,
  Container,
  Table,
  FloatingLabel,
} from 'react-bootstrap';
import { useEffect } from 'react';

function AdminProductUD() {
  const ProductTable = ({ product }) => {
    const category = categories.find((data) => data._id === product.categoryId);
    const [title, setTitle] = useState(product.title);
    const [shortDescription, setShortDescription] = useState(
      product.shortDescription,
    );
    const [detailDescription, setDetailDescription] = useState(
      product.detailDescription,
    );
    const [price, setPrice] = useState(product.price);
    const [inventory, setInventory] = useState(product.inventory);
    const [categoryId, setCategoryId] = useState(product.categorId);
    const [imgSrc, setImgSrc] = useState('');
    const [currentImgSrc, setCurrentImgSrc] = useState('');
    const [file, setFile] = useState('');
    useEffect(() => {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_ADDRESS}/api/products/img/${product.imageKey}`,
          {
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            responseType: 'blob',
          },
        )
        .then((res) => {
          const file = new File([res.data], product.imageKey);
          const reader = new FileReader();
          reader.onload = (event) => {
            const previewImage = String(event.target?.result);
            setCurrentImgSrc(previewImage);
          };
          reader.readAsDataURL(file);
        });
    }, []);

    const updateHandler = (e) => {
      e.preventDefault();
      if (!file) {
        return;
      }
      const formdata = new FormData();
      formdata.append('imageKey', file);
      formdata.append('categoryId', categoryId);
      formdata.append('title', title);
      formdata.append('price', price);
      formdata.append('shortDescription', shortDescription);
      formdata.append('detailDescription', detailDescription);
      formdata.append('inventory', inventory);
      console.log(formdata);
      axios
        .put(
          `${process.env.REACT_APP_SERVER_ADDRESS}/api/products/${product._id}`,
          formdata,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then(() => {
          axios
            .get(`${process.env.REACT_APP_SERVER_ADDRESS}/api/products`)
            .then((res) => {
              setProducts(res.data);
            });
        });
    };
    const deleteHandler = (e) => {
      e.preventDefault();
      axios
        .delete(
          `${process.env.REACT_APP_SERVER_ADDRESS}/api/products/${product._id}`,
        )
        .then((res) => {
          axios
            .get(`${process.env.REACT_APP_SERVER_ADDRESS}/api/products`)
            .then((res) => {
              setProducts(res.data);
            });
        });
    };

    return (
      <tr>
        <td style={{ width: '400px' }}>
          <img style={{ width: '100%' }} src={currentImgSrc} alt="current" />
          <img style={{ width: '100%' }} src={imgSrc} alt="change" />
          <Form.Control
            type="file"
            onChange={(e) => {
              e.preventDefault();
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                setImgSrc(reader.result);
                console.log('changed');
              };
              setFile(file);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setImgSrc('');
            }}
            type="submit"
          >
            Reset
          </button>
        </td>
        <td style={{ width: '600px' }}>
          <FloatingLabel label="Title" className="">
            <Form.Control
              //defaultValue={product.title}
              value={title}
              onChange={(e) => {
                e.preventDefault();
                setTitle(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel label="Short Description" className="">
            <Form.Control
              // defaultValue={product.shortDescription}
              value={shortDescription}
              onChange={(e) => {
                e.preventDefault();
                setShortDescription(e.target.value);
              }}
            />
          </FloatingLabel>

          <FloatingLabel label="Detail" className="">
            <Form.Control
              // defaultValue={product.detailDescription}
              value={detailDescription}
              onChange={(e) => {
                e.preventDefault();
                setDetailDescription(e.target.value);
              }}
            />
          </FloatingLabel>

          <FloatingLabel label="Price" className="">
            <Form.Control
              // defaultValue={product.price}
              value={price}
              onChange={(e) => {
                e.preventDefault();
                setPrice(e.target.value);
              }}
            />
          </FloatingLabel>

          <FloatingLabel label="Inventory">
            <Form.Control
              // defaultValue={product.inventory}
              value={inventory}
              onChange={(e) => {
                e.preventDefault();
                setInventory(e.target.value);
              }}
            />
          </FloatingLabel>

          <FloatingLabel label="Category" className="">
            <Form.Control
              defaultValue={category ? category.title : '없음'}
              readOnly
            />
          </FloatingLabel>
          <Form.Select
            defaultValue={product.categoryId}
            value={categoryId}
            onChange={(e) => {
              e.preventDefault();
              setCategoryId(e.target.value);
            }}
          >
            <option>변경할 카테고리 고르세요.</option>
            {categories.map((data) => {
              return (
                <option key={data._id} value={data._id}>
                  {data.title}
                </option>
              );
            })}
          </Form.Select>
        </td>
        <td>
          <Button variant="warning" onClick={updateHandler}>
            수정
          </Button>{' '}
          <Button variant="danger" onClick={deleteHandler}>
            삭제
          </Button>
        </td>
      </tr>
    );
  };

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ADDRESS}/api/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .then(() => {
        axios
          .get(`${process.env.REACT_APP_SERVER_ADDRESS}/api/categories`)
          .then((res) => {
            setCategories(res.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Image</th>
            <th>정보</th>
            <th>수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <ProductTable key={product._id} product={product} />;
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminProductUD;
