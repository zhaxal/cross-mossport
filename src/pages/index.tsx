/* eslint-disable @next/next/no-img-element */
import { Geist } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch("/api/sub", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };

  return (
    <div
      className={`${geistSans.className} min-h-screen flex items-center justify-center`}
      style={{ backgroundColor: "#26336A" }}
    >
      <div className="text-center p-8 max-w-md">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
            <img src="/crosslogo.png" alt="Logo" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            17 сентября 2025 г.
          </h1>
          <p className="text-gray-300 mb-6">
            Регистрация скоро откроется. Оставьте свой электронный адрес и мы
            сообщим вам об открытии.
          </p>
        </div>

        {isSubmitted ? (
          <div className="space-y-4">
            <div className="text-green-300 text-lg font-medium">
              Спасибо! Мы уведомим вас об открытии регистрации.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Сообщите мне
            </button>
          </form>
        )}

        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>

          <p className="text-sm text-gray-300">Следите за обновлениями...</p>
        </div>
      </div>
    </div>
  );
}
