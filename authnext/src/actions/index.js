"use server";
import bcrypt from "bcryptjs";
import connectToDB from "@/database";
import AuthUser from "@/models";

// Register user to database
export const registerUser = async (formData) => {
  //1)Connection to database
  await connectToDB();
  try {
    // 2)taking the user details and avoiding users to login with the same email
    const { userName, email, password } = formData;
    const checkUser = await AuthUser.findOne({ email });
    if (checkUser) {
      return {
        success: false,
        message: "User already exists!Please try with a different email",
      };
    }
    // 3)Hashing our password for security purposes
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4)Storing the users in our database
    const newUserDB = await new AuthUser({
      userName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUserDB.save();
    if (savedUser) {
      return {
        success: true,
        message: "User registered successfull",
        data: JSON.parse(JSON.stringify(savedUser)),
      };
    } else {
      return {
        success: false,
        message: "Error while registering the user",
      };
    }
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Some error occured while connecting to database",
    };
  }
};
