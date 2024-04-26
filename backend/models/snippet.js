const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snippetSchema = new Schema({
    code: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    theme: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('Snippet2', snippetSchema);