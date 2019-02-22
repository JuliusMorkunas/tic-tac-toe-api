const express = require('express');
const catchErrors = require('express-catch-errors');

const router = express.Router();
const { list, add, clear } = require('./action.controller');

router
  .route('/')
  .get(catchErrors(list))
  .post(catchErrors(add))
  .delete(catchErrors(clear));

module.exports = router;
