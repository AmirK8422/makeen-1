"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e:any) => {
    e.preventDefault();
    if(!username||!password) return setError("!لطفا یوزر و پسوورد رو وارد کنید " )  
    if (username === "admin" && password === "1234") {
      // ✅ correct → redirect to dashboard
      router.push("/admin/Dashboard");
    } else {
      setError("نام کاربری یا رمز عبور اشتباه است ❌");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-00">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">ورود به پنل ادمین</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded-md text-right"
          />
          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded-md text-right"
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="colorMakeen text-white py-2 rounded-md hover:bg-orange-500"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}
