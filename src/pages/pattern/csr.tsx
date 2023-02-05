import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import useSWR, { Fetcher } from "swr";
import { request } from "graphql-request";
import Layout from "@/components/layout";
import Post from "@/components/post";
import Notes from "@/components/notes";

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
          markdown
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

  const randomPost = Math.floor(Math.random() * data!.posts.length);

  return (
    <>
      <Head>
        <title>Client Side Rendering</title>
      </Head>
      <Layout>
        <h1 className={`${inter.className} text-5xl mb-4`}>
          Client Side Rendering
        </h1>
        <Notes>
          <ul>
            <li>
              - Rendering is done entirely in the browser using JavaScript.
            </li>
            <li>- Initial load may be slowler than others. </li>
            <li>
              - You often can see a &quot;loading...&quot; state while the
              browser fetches post data.
            </li>
            <li>
              - Post content in this page should change after reloading the
              page.
            </li>
          </ul>
        </Notes>
        {data?.posts[0] ? (
          <Post {...data!.posts[randomPost]} />
        ) : (
          <div className={styles.main}>No posts found!</div>
        )}
      </Layout>
    </>
  );
}
