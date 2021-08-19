const express = require('express');
const router = express.Router();
const { getRiderTList, addRiderTrick, updateRiderTrick, deleteRiderTrick, getUserList } = require('../controller/tListCTRL');
const { getTList } = require('../controller/trickdbCTRL')

router
    .route('/')
    .get(getRiderTList)
    .post(addRiderTrick)

router
    .route('/user')
    .get(getUserList)
    .delete(deleteRiderTrick)
    .put(updateRiderTrick)    

router
    .route('/trickDB')
    .get(getTList)

module.exports = router;