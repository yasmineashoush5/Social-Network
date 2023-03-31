const User = require('./User');
const Thought = require('./Thought');
const Reaction = require('./Reaction');
// Thought.belongsTo(User, {
//     foreignKey: 'userId'
// })
// User.hasMany(Thought, { foreignKey: 'userId' })
// User.hasMany(Reaction, { foreignKey: 'postId' })
// Reaction.belongsTo(User, {
//     foreignKey: 'userId'
// })






module.exports = { User, Thought, Reaction };
