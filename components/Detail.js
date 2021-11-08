import styles from "../styles/Detail.module.css"

const Detail = ({children}) => {
    return (
        <div className={styles.detailDiv}>
            {children}
        </div>
    )
}

const Heading = ({children, color = false}) => <h1 style={color ? {color: color} : {}} className={styles.heading}>{children}</h1>
const Para = ({children, color = false}) => <p style={color ? {color: color} : {}} className={styles.para}>{children}</p>

Detail.Heading = Heading
Detail.Para = Para

export default Detail