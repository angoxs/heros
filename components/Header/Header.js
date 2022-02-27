import styles from "./header.module.css";
import cn from "classnames";

export default function Header() {
  return (
    <section className={cn("section-header")}>
      <div className={cn("container", styles.container)}>
        <p className={cn("body-bold logo", styles.logo)}>
          Mis <span>fans</span>
        </p>
        <button className={cn("hi", styles.button)}>👋</button>
      </div>
    </section>
  );
}
