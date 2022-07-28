const router = require('express').Router();
const contactRoutes = require('./contactRoutes');

router.use('/me', contactRoutes);

module.exports = router;