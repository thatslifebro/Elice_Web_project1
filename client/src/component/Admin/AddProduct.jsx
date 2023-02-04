import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import {
  Button,
  Form,
  Stack,
  Row,
  Col,
  Container,
  Nav,
  FloatingLabel,
  Modal,
} from 'react-bootstrap';

function AddProduct() {
  //등록하기 버튼
  const [show, setShow] = useState(false);
  //취소하기 버튼
  const [show2, setShow2] = useState(false);

  //등록하기 버튼 핸들러
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //작성취소 버튼 핸들러
  const handleShow2 = () => setShow2(true);

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState();
  const [price, setPrice] = useState('');
  const [shortDiscription, setShortDiscription] = useState('');
  const [discription, setDiscription] = useState('');
  const [file, setFile] = useState('');

  const handleCategory = (event) => {
    event.preventDefault();
    setCategory(event.target.value);
  };
  const handleTitle = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  const handlePrice = (event) => {
    event.preventDefault();
    setPrice(event.target.value);
  };
  const handleShortdisc = (event) => {
    event.preventDefault();
    setShortDiscription(event.target.value);
  };
  const handleDisc = (event) => {
    event.preventDefault();
    setDiscription(event.target.value);
  };

  const onChangeImg = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      formData.append('file', uploadFile);
      setFile(uploadFile);
      console.log(uploadFile);
      console.log('===useState===');
      console.log(file);
    }
  };
  const onPrint = () => {
    console.log(file);
  };

  //버튼 클릭 후 post 전송 핸들러
  const onClickPost = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('category', category);
    formData.append('title', title);
    formData.append('price', price);
    formData.append('shortDiscription', shortDiscription);
    formData.append('discription', discription);
    formData.append('file', 'image');
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/Products',
      data: formData,
    })
      .then((result) => {
        console.log('요청성공');
        console.log(result);
      })
      .catch((error) => {
        console.log('요청실패');
        console.log(error);
      });
  };

  return (
    <Container fluid="md">
      <div>
        <h1 className="mb-4">상품 추가 페이지</h1>
      </div>
      <div>
        <Form.Label htmlFor="SelectCategory">카테고리</Form.Label>
        <Form.Select
          className="mb-4"
          id="SelectCategory"
          aria-label="Default select example"
          onChange={handleCategory}
        >
          <option>카테고리를 선택해주세요</option>
          <option value="과일류">과일류</option>
          <option value="육류">육류</option>
          <option value="채소류">채소류</option>
        </Form.Select>
      </div>
      <Stack gap={2}>
        <div>
          <Form.Label htmlFor="ProductTitle">제품이름</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            label="제품의 이름을 적어주세요"
            className="mb-4"
            onChange={handleTitle}
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
        </div>
      </Stack>
      <Stack gap={2}>
        <div>
          <Form.Label htmlFor="ProductTitle">제품가격</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            label="제품의 가격을 적어주세요"
            className="mb-4"
            type="Number"
            onChange={handlePrice}
          >
            <Form.Control
              type="text"
              onChange={handleShortdisc}
              as="textarea"
              placeholder="Leave a comment here"
            />
          </FloatingLabel>
        </div>
      </Stack>
      <Stack gap={2}>
        <div>
          <Form.Label htmlFor="ProductTitle">요약 설명</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            label="제품을 1~2 문장으로 설명해주세요"
            className="mb-4"
            type="text"
            onChange={handleShortdisc}
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
          <Form.Label htmlFor="ProductTitle">상세 설명</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="제품에 대한 상세 설명을 적어 주세요."
            type="text"
            onChange={handleDisc}
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '110px' }}
              className="mb-4"
              type="text"
              onChange={handleDisc}
            />
          </FloatingLabel>
        </div>
        <Form.Group
          controlId="formFile"
          className="mb-4"
          id="profile-upload"
          accept="image/*"
          onChange={onChangeImg}
        >
          <Form.Label>이미지를 업로드 해주세요</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </Stack>

      <Col>
        <Button variant="primary" onClick={handleShow}>
          등록하기
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>제품 등록 확인</Modal.Title>
          </Modal.Header>
          <Modal.Body>바로 제품을 등록하시겠습니까?</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={onClickPost}>
              등록하기
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              취소하기
            </Button>
          </Modal.Footer>
        </Modal>

        <Button variant="secondary" onClick={handleShow2}>
          취소하기
        </Button>

        <Modal show={show2} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>제품 취소 확인</Modal.Title>
          </Modal.Header>
          <Modal.Body>작성중인 작업을 취소하시겠습니까?</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              계속해서 작성하기
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              작성 취소
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Container>
  );
}

export default AddProduct;
