import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./contactform.module.css";
import cn from "classnames";

export default function ContactForm() {
  const [snack, setSnack] = useState(false);

  const openSnack = () => {
    setTimeout(() => {
      setSnack(true);
    });
    clearTimeout(6000);
  };

  const [state, handleSubmit] = useForm("meqnedgz");
  if (state.succeeded) {
    return (
      <p style={{ textAlign: "center", marginTop: 16, color: "#23262f" }}>
        Thanks for reaching out!
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.input_wrapper}>
        <input
          className={styles.input}
          placeholder='Name'
          id='name'
          type='name'
          name='name'
          required
        />
        <ValidationError prefix='Name' field='name' errors={state.errors} />

        <input
          className={styles.input}
          placeholder='Email'
          id='email'
          type='email'
          name='email'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </div>
      <textarea
        className={styles.textarea}
        placeholder='Message'
        id='message'
        name='message'
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button
        style={{ marginTop: 8 }}
        className={cn("form-button", styles.button)}
        onClick={openSnack}
        type='submit'
        disabled={state.submitting}
      >
        Submit
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.5 12H17.5M17.5 12L12.9118 8M17.5 12L12.9118 16'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </form>
  );
}
