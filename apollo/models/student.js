
import mongoose from 'mongoose';
const studentSchema = new mongoose.Schema({
    
})
userSchema.plugin(localmongoose);
const User = mongoose.model("User", userSchema);
module.exports = User;