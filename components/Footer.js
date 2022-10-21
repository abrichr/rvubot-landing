import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        &copy;
        &nbsp;
        <a className="underline text-blue-600" href="//mldsai.com" target="_blank">MLDSAI</a>
        &nbsp;
        {new Date().getFullYear()}
      </footer>
    </>
  )
}
