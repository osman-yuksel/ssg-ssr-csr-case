import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { InferGetStaticPropsType } from "next";
import Layout from "@/components/layout";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";

const inter = Inter({ subsets: ["latin"] });

export default function SSR({
  posts,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.main}>
          <p>{posts[0].title}</p>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const hygraph = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldofblbi0ye201um7g1fdzk3/master"
  );

  const { posts }: { posts: Post[] } = await hygraph.request(
    `
    {
      posts {
        id
        content {
          text
        }
        title
        slug
        coverImage {
          id
          createdAt
          url
        }
      }
    }
    `
  );
  return {
    props: {
      posts,
    },
  };
}
