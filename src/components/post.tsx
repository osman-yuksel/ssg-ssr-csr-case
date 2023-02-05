import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ReactMarkdown from "react-markdown";

function Post({ title, content, coverImage, createdAt, createdBy }: Post) {
  return (
    <main className={`${styles.card} hover:!bg-[#0a0a0a]`}>
      <h1 className="text-3xl">{title}</h1>
      <div className="flex">
        <h2 className="after:content-['-'] after:mx-2">
          {createdBy?.name || "unknown"}
        </h2>
        <h2>{new Date(createdAt).toLocaleDateString("tr-TR")}</h2>
      </div>
      <div className="rounded-lg overflow-hidden">
        <Image
          src={coverImage.url}
          alt={title}
          width={1280}
          height={720}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className={`mt-2 ${styles.blogpost}`}>
        {// eslint-disable-next-line 
        }<ReactMarkdown children={content.markdown} />
      </div>
    </main>
  );
}

export default Post;
