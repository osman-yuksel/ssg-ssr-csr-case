import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { InferGetStaticPropsType } from "next";
import { GraphQLClient } from "graphql-request";
import Layout from "@/components/layout";
import Post from "@/components/post";

const inter = Inter({ subsets: ["latin"] });

export default function SSG({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Server Side Generation</title>
      </Head>
      <Layout>
        <h1 className={`${inter.className} text-5xl mb-4`}>
          Server Side Generation
        </h1>
        {posts[0] ? (
          <Post {...posts[Math.floor(Math.random() * posts.length)]} />
        ) : (
          <div className={styles.main}>No posts found!</div>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
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
        createdBy {
          name
        }
        createdAt
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
