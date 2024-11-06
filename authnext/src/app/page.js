"use client";
import { fetchUser } from "@/actions";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      fetchUser(token).then((user) => setCurrentUser(user));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-blue-500 to-purple-700 text-white">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Next JS Authentication
        </h1>
        <p className="text-lg mb-8">Securely manage your account with ease</p>
      </header>

      <main className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg text-gray-800">
        {currentUser ? (
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Hello, {currentUser.data.userName}!
            </h2>
            <p className="text-lg mb-6">Email: {currentUser.data.email}</p>
            <p className="text-gray-600">
              Enjoy your experience with our secure authentication system.
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading user data...</p>
        )}
      </main>

      <footer className="mt-12 text-center text-gray-300 text-sm">
        <p>&copy; 2024 DevTech. All rights reserved.</p>
        <p>Follow us on social media for the latest updates!</p>
      </footer>
    </div>
  );
}
