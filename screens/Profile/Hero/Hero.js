import styles from "./hero.module.css";
import cn from "classnames";
import Link from "next/link";

export default function Hero({
  id,
  picture,
  title,
  firstName,
  lastName,
  email,
  phone,
  registerDate,
  dateOfBirth,
  location,
  gender,
  text,
}) {
  return (
    <div className={cn("")}>
      <div>
        <Link href='/'>
          <a className={cn("button", styles.button)}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.5 12L6.5 12M6.5 12L11.0882 16M6.5 12L11.0882 8'
                stroke='#363853'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </a>
        </Link>
        <div className={styles.image_container}>
          <img className={styles.image} src='/example.jpg' />
        </div>

        <div className={styles.profile} key={id}>
          <img className={styles.avatar} src={picture} />
          <div className={styles.name}>
            <h4 className={cn("body-bold")}>
              {firstName} {lastName}
            </h4>
            <p className={cn("caption")}>{title}</p>
          </div>

          <div className={styles.info_wrapper}>
            <div className={styles.info_grid}>
              <p className={cn("caption-bold", styles.info)}>{email}</p>
              <p className={cn("caption-bold", styles.info)}>{phone}</p>
              <p className={cn("caption-bold", styles.info)}>{gender}</p>
              <p className={cn("caption-bold", styles.info)}>{dateOfBirth}</p>
            </div>

            <p className={cn("caption-2", styles.text)}>
              Member since {registerDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
