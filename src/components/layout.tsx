import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <main>{children}</main>
    </>
  );
}
