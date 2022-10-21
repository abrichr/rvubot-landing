import styles from './Header.module.css'

export default function Header({ title }) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <h4 className={styles.phone}>1-833-335-6116</h4>
      <p>
        Download. Run. Get paid.
      </p>
      <img
        className={styles.screenshot}
        src="/rvubot-screenshot.png"
        width="706"
        height="940"
        alt="RVUbot Screenshot"
      />
    </>
  );
}
