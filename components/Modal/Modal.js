import styles from "./modal.module.css";
import OutsideClickHandler from "react-outside-click-handler";
import ContactForm from "../ContactForm";
import cn from "classnames";

export default function Modal({ closeModal, setModal, modal }) {
  return (
    <OutsideClickHandler onOutsideClick={() => setModal(false)}>
      <div modal={modal} className={styles.content}>
        <button
          className={cn("button", styles.close_button)}
          onClick={closeModal}
        >
          <svg
            width='44'
            height='44'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.7678 10.2322L10.2322 13.7677M13.7678 13.7677L10.2322 10.2322'
              strokeLinecap='round'
            />
          </svg>
        </button>

        <div>
          <h1 className={cn("h1", styles.h1)}>{"Let's build."}</h1>
          <ContactForm />
        </div>
      </div>
    </OutsideClickHandler>
  );
}
