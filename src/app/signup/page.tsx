"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { auth, db } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

const provider = new GoogleAuthProvider();

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        fullName: user.displayName || "",
        username: user.email.split("@")[0],
        email: user.email,
        createdAt: new Date(),
      });

      router.push("/dashboard");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        fullName: form.fullName,
        username: form.username,
        email: form.email,
        createdAt: new Date(),
      });

      alert("Signup successful!");
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-red-600 text-center">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {[
            { label: "Full Name", id: "fullName", type: "text", placeholder: "John Doe" },
            { label: "Username", id: "username", type: "text", placeholder: "john_doe" },
            { label: "Email", id: "email", type: "email", placeholder: "you@example.com" },
            { label: "Password", id: "password", type: "password", placeholder: "••••••••" },
            { label: "Confirm Password", id: "confirmPassword", type: "password", placeholder: "••••••••" },
          ].map(({ label, id, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                required
                onChange={handleChange}
                value={(form as any)[id]}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
                autoComplete="off"
              />
            </div>
          ))}

          <div>
            <Button onClick={handleGoogleLogin} type="button" className="w-full flex gap-2 cursor-pointer mt-[10px]">
              <Lock className='h-5 w-5'/>Sign in with Google
            </Button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
