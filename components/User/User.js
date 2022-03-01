import styles from "./user.module.css";
import cn from "classnames";
import Link from "next/link";
import capitalize from "../../helpers/Capitalize";

export default function User({
  id,
  title,
  firstName,
  lastName,
  picture,
  email,
}) {
  return (
    <Link key={id} href={`/users/[id]`} as={`/users/${id}`} passHref>
      <a>
        <div className={styles.container}>
          <div className={styles.content}>
            <img
              className={styles.avatar}
              src={picture}
              width='60px'
              height='60px'
            />

            <div className={styles.text_wrapper}>
              <h2 className={cn("body-bold")}>{`${firstName} ${lastName}`}</h2>

              <p className={cn("caption")}>{capitalize(title)}.</p>
            </div>
          </div>
          <div className={styles.svg_container}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.5 12H17.5M17.5 12L12.9118 8M17.5 12L12.9118 16'
                stroke='#3B71FE'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </a>
    </Link>
  );
}
