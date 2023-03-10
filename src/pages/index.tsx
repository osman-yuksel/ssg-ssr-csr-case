import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rendering Patterns</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${styles.main} ${inter.className} md:!flex-row !justify-center !relative`}
      >
        <h1 className="text-5xl text-center">Rendering Patterns</h1>
        <Link
          className={`${styles.card} w-full md:w-56 md:h-96 md:leading-[22rem] text-center text-3xl`}
          href={"/pattern/ssg"}
        >
          SSG
        </Link>
        <Link
          className={`${styles.card} w-full md:w-56 md:h-96 md:leading-[22rem] text-center text-3xl`}
          href={"/pattern/ssr"}
        >
          SSR
        </Link>
        <Link
          className={`${styles.card} w-full md:w-56 md:h-96 md:leading-[22rem] text-center text-3xl`}
          href={"/pattern/csr"}
        >
          CSR
        </Link>
      </main>
    </>
  );
}
