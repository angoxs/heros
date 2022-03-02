import styles from "./header.module.css";
import cn from "classnames";
import Link from "next/link";
import { useState } from "react";
import Modal from "../Modal";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(!modal);
  };

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

        <button className={cn("button")} onClick={openModal}>
          👋
        </button>
      </div>

      {modal ? (
        <section className={styles.background}>
          <div className={styles.align}>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ linear: [0.17, 0.67, 0.83, 0.67] }}
              >
                <Modal closeModal={closeModal} setModal={setModal} />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      ) : null}
    </section>
  );
}
