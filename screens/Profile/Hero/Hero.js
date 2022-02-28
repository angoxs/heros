import styles from "./hero.module.css";

export default function Hero({ id, name, position }) {
  return (
    <div>
      <div>
        <img src='/' />
        <h3>{name}</h3>
      </div>
    </div>
  );
}
