import styles from "./hero.module.css";
import cn from "classnames";
import { motion } from "framer-motion";

export default function Hero({ userList }) {
  return (
    <div className={cn("section section-pb")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className={cn("h1", styles.title)}>
              Where fans meet their <span>heros.</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p className={cn("body", styles.subtitle)}>
              A place where you can meet and interact with your idols and
              mentors in a deeper way.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
