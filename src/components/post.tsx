import styles from "@/styles/Home.module.css";

function Post({ ...props }: Post) {
  return <div className={styles.card}>{props.title}</div>;
}

export default Post;
