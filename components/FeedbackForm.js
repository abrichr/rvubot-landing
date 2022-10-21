import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="register"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="register" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
        <input id="email" className={styles['form-field']} type="email" name="email" placeholder="your@email.com" required />
        <button className={styles.button} type="submit">Join the Waitlist</button>
      </form>
  )
}
