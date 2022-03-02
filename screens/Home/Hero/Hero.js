import styles from "./hero.module.css";
import cn from "classnames";
import { motion } from "framer-motion";
import { container, item } from "../../../helpers/Variants";

export default function Hero() {
  return (
    <motion.div variants={container} initial='hidden' animate='show'>
      <div className={cn("section section-pb")}>
        <div className={cn("container")}>
          <div className={styles.content}>
            <motion.div variants={item}>
              <h1 className={cn("h1", styles.title)}>
                Where fans meet their <span>heros.</span>
              </h1>
            </motion.div>
            <motion.div variants={item}>
              <p className={cn("body", styles.subtitle)}>
                A place where you can meet and interact with your idols and
                mentors in a deeper way.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
