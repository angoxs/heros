import cn from "classnames";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <p className={cn("caption", styles.title)}>
          Copyright © 2022 Misheros | Built by{" "}
          <a
            href='https://vazurio.co'
            target='_blank'
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            Vazurio
          </a>
        </p>
      </div>
    </div>
  );
}
