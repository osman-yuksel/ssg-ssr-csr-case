import Image from "next/image";
import styles from "@/styles/Home.module.css";

function Post({ ...props }: Post) {
  return (
    <main className={`${styles.card} hover:!bg-[#0a0a0a]`}>
      <h1 className="text-3xl">{props.title}</h1>
      <div className="flex">
        <h2 className="after:content-['-'] after:mx-2">
          {props.createdBy?.name || "unknown"}
        </h2>
        <h2>{new Date(props.createdAt).toLocaleDateString("tr-TR")}</h2>
      </div>
      <div className="rounded-lg overflow-hidden">
        <Image
          src={props.coverImage.url}
          alt={props.title}
          width={1280}
          height={720}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <p className="mt-2">{props.content.text}</p>
    </main>
  );
}

export default Post;
