const express = require('express');
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests Users route
// @access  Public
router.get('/test', (req, res) => res.json({
    msg: "I worked"
}));

module.exports = router;