import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} &nbsp;
        <a href="//mldsai.com" target="_blank">MLDSAI Inc.</a>
      </footer>
    </>
  )
}
