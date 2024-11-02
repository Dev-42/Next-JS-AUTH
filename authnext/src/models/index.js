import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
  userName: { type: String },
  email: { type: String },
  password: { type: String },
});

const AuthUser =
  mongoose.models.AuthUser || mongoose.model("AuthUser", AuthSchema);

export default AuthUser;
