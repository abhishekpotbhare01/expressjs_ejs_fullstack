const express = require('express')

const router = express.Router();
const path = require('path')

module.exports = router;


router.get("/index", function (req, resp) {
    const indexPath = path.join(__dirname, '../public/index.html');
    resp.sendFile(indexPath);


});

router.exports = router;