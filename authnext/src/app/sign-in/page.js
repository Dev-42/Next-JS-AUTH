// SignIn Component
"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { initialLoginFormData, userLoginFormControls } from "../utils";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const [loginformData, setloginFormData] = useState(initialLoginFormData);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700">Login</h1>
        <form className="space-y-4">
          {userLoginFormControls.map((controlItem, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <Label className="text-gray-600">{controlItem.label}</Label>
              <Input
                name={controlItem.name}
                id={controlItem.name}
                placeholder={controlItem.placeholder}
                type={controlItem.type}
                value={loginformData[controlItem.name]}
                onChange={(e) =>
                  setloginFormData({
                    ...loginformData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          ))}
          <Button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
