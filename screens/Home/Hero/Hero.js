import styles from "./hero.module.css";
import cn from "classnames";
import User from "../../../components/User";

export default function Hero() {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <h1 className={cn("h1", styles.title)}>
            Where fans meet their <span>heros.</span>
          </h1>
          <p className={cn("body", styles.subtitle)}>
            A place where you can meet and interact with your idols and mentors
            in a deeper way.
          </p>
          <div className={styles.wrapper}>
            <User />
          </div>
        </div>
      </div>
    </div>
  );
}
