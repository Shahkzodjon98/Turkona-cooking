import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SixthLayer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const telegramBotToken = "6013665699:AAE19noZDlWZKcAs41-pCErw61SyL9H1Lwo";
      const chatId = "1001597032";

      const text = `Saytdan xabar keldi :
      ✉️ Email: ${email}
      📬 Message: ${message}`;

      await axios.post(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          chat_id: chatId,
          text,
        }
      );

      // Handle successful submission
      alert("Xabar yuborildi");

      // Reset the form
      setEmail("");
      setMessage("");
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="font-verdana flex flex-col form max-h-[900px] justify-center items-center py-20 lg:px-0 xs:px-6">
      <form onSubmit={handleSubmit} className="">
        <h1 className="bg-white w-[100%] flex justify-center xs:py-[10px] lg:py-[20px] lg:text-lg">
          {t("sixth-layer-7")}
        </h1>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="lg:mt-28 xs:mt-10 font-extrabold w-[100%] lg:p-10 xs:p-5 "
        />
        <textarea
          required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          placeholder={t("sixth-layer-8")}
          className="mt-6 font-extrabold w-[100%] lg:p-10 xs:p-4 py-4 h-44 "
        ></textarea>
        <button className="w-[100%] bg-secondary lg:py-5 xs:py-2 mt-10 lg:text-xl font-extrabold text-white tracking-widest ">
          {t("sixth-layer-8")}
        </button>
      </form>
    </div>
  );
};

export default SixthLayer;
