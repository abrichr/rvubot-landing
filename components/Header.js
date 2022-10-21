import styles from './Header.module.css'

export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
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
