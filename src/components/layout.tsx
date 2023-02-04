import Link from "next/link";
import React from "react";
import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href={"/"} className={`${styles.card} ${inter.className}`}>
        Home
      </Link>
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  );
}
