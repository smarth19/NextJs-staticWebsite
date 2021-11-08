import Input from "../Input"
import styles from '../../styles/SectionOne.module.css'
import { useRef } from "react"


const SectionOne = () => {
    const inputRef = useRef()
    return (
        <section className={styles.section}>
            <div className={`backgroundCircle ${styles.backgroundCircle}`}></div>
            <div className={styles.details}>
                <h1>Start building with our APIs for absolutely free.</h1>
                <div className={styles.actionsDiv}>
                    <Input type="email" inputRef={inputRef} placeholder="Enter email address" btnText="Schedule a Demo"/>
                    <div className={styles.contactUsDiv}>
                        <span>Have any questions?</span>
                        <strong>Contact Us</strong>
                    </div>
                </div>
            </div>
            <div className={styles.imageDiv}> <img src='/phone.png' alt="phone"/> </div>
        </section>
    )
}

export default SectionOne