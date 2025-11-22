import { useState } from "react";
import Image from "next/image";

export default function LoginCard({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call your auth logic here
    if (onLogin) {
      onLogin({ username, password });
    }

    console.log("Logging in with:", username, password);
  };

  return (
    <div className="w-[500px] flex flex-col justify-between h-[350px] bg-gradient-to-b from-biru-muda to-biru-sedang shadow-2xl shadow-black rounded-[20px] mb-[100px] p-6">
      
      <div className="flex flex-row p-2 items-center gap-1 mb-[10px]">
        <Image
          src="/Logo_IoT.png"
          alt="logo"
          width={40}
          height={40}
          className="w-auto h-10"
        />
        <div>
          <p className="font-titillium font-semibold text-base">
            KSM Internet Of Things
          </p>
          <p className="font-titillium font-normal text-sm">
            UPN &quot;Veteran&quot; Jakarta
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 rounded-[10px] bg-white text-black"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-[10px] bg-white text-black"
          required
        />

        <button
          type="submit"
          className="p-3 font-optima rounded-[10px] bg-black text-white font-semibold hover:bg-gray-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}
