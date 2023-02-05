import { useState } from "react";
import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Notes({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      className={`${inter.className} ${
        styles.card
      } md:w-3/5 w-full !mb-4 md:mb-0 cursor-pointer !py-[.6rem] !px-4 overflow-hidden ${
        enabled ? "!max-h-96" : "!max-h-12"
      }`}
      onClick={() => {
        setEnabled((p) => !p);
      }}
    >
      <h1
        className={`pb-2 text-xl transition-all ${
          enabled ? "border-b mb-2" : ""
        }`}
      >
        Notes
      </h1>
      {children}
    </div>
  );
}

export default Notes;
