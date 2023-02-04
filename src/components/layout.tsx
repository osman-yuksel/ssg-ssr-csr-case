import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="absolute top-10 pl-4">
        <Link href={"/"} className={`${styles.card} ${inter.className}`}>
          Home
        </Link>
      </header>
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  );
}
