import cn from "classnames";
import styles from "./post.module.css";

export default function Post({ id, text, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img src={image} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h4 className={cn("body-bold")}>{text}</h4>
      </div>
    </div>
  );
}
