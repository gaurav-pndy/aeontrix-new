import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ConfirmToken() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Verifying...");
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setStatus("Invalid token.");
      return;
    }

    fetch("https://api.aeontrix.com/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus(
            "Your email has been verified!\nCheck your inbox for list of automation opportunities for your business"
          );
        } else {
          setStatus(`${data.error || "Something failed"}`);
        }
      })
      .catch(() =>
        setStatus(
          'Something went wrong. Please contact: <a href="mailto:contact@aeontrix.com" className="underline text-[#00FF93]">contact@aeontrix.com</a>.'
        )
      );
  }, [token]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Confirm Token | Aeontrix</title>
      </Helmet>
      <div className="content-box border-glow-wrapper highlighted-box bg-[#1A2A44] backdrop-blur-lg border border-[#2E4057] rounded-3xl p-4 md:p-8 shadow-2xl transition-transform duration-500 text-center max-w-xl">
        <div className="border-glow"></div>
        <h2 className="text-3xl font-bold text-white mb-2">
          {status.split("\n")[0]}
        </h2>
        <p className="text-lg text-gray-300">{status.split("\n")[1]}</p>
      </div>
    </div>
  );
}