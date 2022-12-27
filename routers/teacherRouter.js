const express = require('express');

const router = express.Router();
const { getTeachers } = require('../controllers/teacherControllers');

router.get('/teachers', getTeachers);

module.exports = router;