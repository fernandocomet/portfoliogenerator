const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  googleID: String,
  avatarUrl: {
    type: String,
    default: "images/default-avatar.png"
  },
  portfolios: [{ type: Schema.Types.ObjectId, ref: "Portfolio" }],
  sociallinks: [{ type: String }]
}, 
{
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;


