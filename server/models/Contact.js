const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+@.+\..+/,
    },
    message: {
        type: String,
    }
});

const Contact = model('Contact', contactSchema);

module.exports = Contact;