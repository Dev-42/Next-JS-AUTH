"use server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectToDB from "@/database";
import AuthUser from "@/models";
import { cookies } from "next/headers";

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

// Login User using user credentials
export const loginUser = async (loginData) => {
  await connectToDB();
  try {
    const { email, password } = loginData;
    // check if user exists in the Database
    const checkUser = await AuthUser.findOne({ email });
    if (!checkUser) {
      return {
        success: false,
        message: "User does not exists.Please register",
      };
    }
    // check if password is valid or not
    const checkPassword = await bcrypt.compareSync(
      password,
      checkUser.password
    );
    if (!checkPassword) {
      return {
        success: false,
        message: "Password is incorrect!",
      };
    }
    // Create a jwt token and pass it to the registered user
    const createdTokenData = {
      id: checkUser._id,
      userName: checkUser.userName,
      email: checkUser.email,
    };

    const token = jwt.sign(createdTokenData, "SECRET_KEY", { expiresIn: "1d" });

    return {
      success: true,
      message: "User is logged in successfully",
      token,
    };
  } catch (e) {
    return {
      success: "false",
      message: "Some error occured while connecting to database",
    };
  }
};

// display user details on the home screen
export const fetchUser = async (token) => {
  await connectToDB();
  try {
    if (!token) {
      return {
        success: false,
        message: "Token is not provided or invalid",
      };
    }
    // Decode the token
    const decodedToken = jwt.verify(token, "SECRET_KEY");
    const getUserInfo = await AuthUser.findOne({ _id: decodedToken?.id });
    if (getUserInfo) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(getUserInfo)),
      };
    } else {
      return {
        success: false,
        message: "User is not present in the DB",
      };
    }
  } catch (e) {
    console.log(e);
    console.log("Error connecting to the database");
  }
};
