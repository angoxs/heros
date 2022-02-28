import styles from "./header.module.css";
import cn from "classnames";
import Link from "next/link";

export default function Header() {
  return (
    <section className={cn("section-header")}>
      <div className={cn("container", styles.container)}>
        <Link href='/'>
          <a>
            <p className={cn("body-bold logo", styles.logo)}>
              Mis <span>heros</span>
            </p>
          </a>
        </Link>

        <button className={cn("button")}>👋</button>
      </div>
    </section>
  );
}
