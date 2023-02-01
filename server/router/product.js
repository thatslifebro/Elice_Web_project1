const { Router } = require('express');
const router = Router();

//모든 물품 정보 주기
router.get('/', (req, res) => {});

//물품 등록
router.post('/', (req, res) => {});

//물품 수정
router.put('/:id', (req, res) => {});

//물품 삭제
router.delete('/:id', (req, res) => {});

exports.module = router;
