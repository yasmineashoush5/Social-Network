// const { Schema, type } = require('mongoose');
// const mongoose = require('mongoose');
// const dateFormat = require('../utils/dateFormat');
// // const reactionSchema = require('./Reaction');

// const reactionSchema = new Schema(
//     {
//         reactionId: {
//             type: Schema.Types.ObjectId,
//             default: () => new Types.ObjectId()
//         },
//         reactionBody: {
//             type: String,
//             required: true,
//             maxlength: 280
//         },
//         username: {
//             type: String,
//             required: true
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//             get: timestamp => dateFormat(timestamp)
//         }
//     },
//     {
//         toJSON: {
//             getters: true
//         },
//         id: false
//     }
// );


// const Reaction = model('reaction', reactionSchema);
// module.exports = Reaction;
