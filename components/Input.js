import Button from "./Button"
import styles from '../styles/Input.module.css'

const Input = ({type, inputRef, placeholder, btnText}) => {
    return (
        <div className={styles.inputDiv}>
            <input type={type} ref={inputRef} placeholder={placeholder}/>
            <Button>{btnText}</Button>
        </div>
    )
}

export default Input