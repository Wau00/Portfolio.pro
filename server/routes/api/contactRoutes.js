const router = require('express').Router();
const {
    getMessage,
    createMessage,
} = require('../../controllers/contactMeControllers')


router.route('/').get(getMessage).post(createMessage);

module.exports = router;