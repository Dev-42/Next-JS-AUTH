"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { initialSignUpFormData, userRegistrationFormControls } from "../utils";
import { Button } from "@/components/ui/button";
import { registerUser } from "@/actions";

const AuthSignUp = () => {
  const router = useRouter();
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);

  const handleSubmitValid = () => {
    return Object.keys(signUpFormData).every(
      (key) => signUpFormData[key].trim() !== ""
    );
  };

  const handleRegisterUser = async () => {
    const result = await registerUser(signUpFormData);
    console.log(result);
    if (result?.data) {
      alert("User Registered successfully");
      router.push("/sign-in");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Create an Account
        </h1>
        <form action={handleRegisterUser} className="space-y-4">
          {userRegistrationFormControls.map((controlItem, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <Label className="text-gray-600">{controlItem.label}</Label>
              <Input
                name={controlItem.name}
                id={controlItem.name}
                placeholder={controlItem.placeholder}
                type={controlItem.type}
                value={signUpFormData[controlItem.name]}
                onChange={(e) =>
                  setSignUpFormData({
                    ...signUpFormData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          ))}
          <Button
            disabled={!handleSubmitValid()}
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-65"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthSignUp;
