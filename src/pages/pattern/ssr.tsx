import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { InferGetStaticPropsType } from "next";
import Layout from "@/components/layout";
import { GraphQLClient } from "graphql-request";
import Post from "@/components/post";
import Notes from "@/components/notes";

const inter = Inter({ subsets: ["latin"] });

export default function SSR({
  posts,
  randomPost,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Server Side Rendering</title>
      </Head>
      <Layout>
        <h1 className={`${inter.className} text-5xl mb-4`}>
          Server Side Rendering
        </h1>
        <Notes>
          <ul>
            <li>- HTML is generated on the server and sent to the browser.</li>
            <li>
              - Initial load should be faster than CSR and provides improved
              SEO.
            </li>
            <li>
              - All data related to the post is fetched in the server, so there
              is no &quot;loading...&quot; state.
            </li>
            <li>
              - Post content in this page should change after reloading the
              page.
            </li>
          </ul>
        </Notes>
        {posts[0] ? (
          <Post {...posts[randomPost]} />
        ) : (
          <div className={styles.main}>No posts found!</div>
        )}
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
        createdBy {
          name
        }
        createdAt
      }
    }
    `
  );

  const randomPost = Math.floor(Math.random() * posts.length);

  return {
    props: {
      posts,
      randomPost,
    },
  };
}
