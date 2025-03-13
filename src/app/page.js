import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <h3>
      <p className="w-8 h-8 text-gray-200 animate-spin">.</p>
      <p className="w-10 h-8 text-yellow-400 animate-spin">.</p>
      <p className="w-12 h-8 text-blue-700 animate-spin">.</p>
      <p className="w-14 h-8 text-red-700 animate-spin">.</p>
    </h3>
  );
}
