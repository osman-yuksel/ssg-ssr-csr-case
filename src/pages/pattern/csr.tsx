import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import useSWR, { Key, Fetcher } from "swr";
import Link from "next/link";
import { request } from "graphql-request";
import Layout from "@/components/layout";
import Post from "@/components/post";

const inter = Inter({ subsets: ["latin"] });

export default function CSR() {
  const fetcher: Fetcher<{ posts: Post[] }> = (query: string) =>
    request(
      "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldofblbi0ye201um7g1fdzk3/master",
      query
    );

  const { data, error, isLoading } = useSWR(
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
    `,
    fetcher
  );

  if (error)
    return (
      <Layout>
        <div className={styles.main}>
          <div>failed to load</div>
        </div>
      </Layout>
    );

  if (isLoading)
    return (
      <Layout>
        <div className={styles.main}>
          <div>loading...</div>
        </div>
      </Layout>
    );

  return (
    <Layout>
      {data?.posts[0] ? (
        <Post {...data!.posts[0]} />
      ) : (
        <div className={styles.main}>No posts found!</div>
      )}
    </Layout>
  );
}
