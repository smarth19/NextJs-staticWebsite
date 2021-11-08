import { useRef } from "react"
import styles from '../../styles/SectionThree.module.css'
import Detail from "../Detail"
import Icons from "../Icons"
import Input from "../Input"

const SectionThree = () => {
    const inputRef = useRef()
    return (
        <section className={styles.section}>
        <div className={`backgroundCircle ${styles.backgroundCircle}`}></div>
            <div>
                <Feature heading="Easy to implement" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley" image='/code snapshot.svg' className={styles.featureOne}/>
                <Feature heading="Simple UI & UX" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" image='/ui&ux.png' className={styles.featureTwo} rowReverse={true}/>
            </div>
            <div className={styles.featureCardSection}>
                <FeatureCard icon="moneyBag" heading="Personal Finances" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
                <FeatureCard icon="graph" heading="Banking & Coverage" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
                <FeatureCard icon="creditCard" heading="Consumer Payments" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
            </div>
            <div className={styles.inputSection}>
                <div><h1>Ready to start?</h1></div>
                <div><Input type="email" inputRef={inputRef} placeholder="Enter email address" btnText="Schedule a Demo"/></div>
            </div>
        </section>
    )
}

const Feature = ({heading, para, image, className, rowReverse=false}) => {
    return (
        <div className={`${styles.featureDiv} ${className} ${rowReverse ? styles.rowReverse : ''}`}>
            <div className={styles.featureDiv_img}><img src={image} alt={heading}/></div>
            <div className={styles.detailDiv}>
                <Detail>
                    <Detail.Heading>{heading}</Detail.Heading>
                    <Detail.Para>{para}</Detail.Para>
                </Detail>
            </div>
        </div>
    )
}

const FeatureCard = ({icon, heading, para}) => {
    return (
        <div className={styles.featureCard}>
            <div className={styles.iconDiv}>
                <Icons icon={icon}/>
            </div>
            <div className={styles.featureCardDetail}>
                <Detail>
                    <Detail.Heading>{heading}</Detail.Heading>
                    <Detail.Para>{para}</Detail.Para>
                </Detail>
            </div>
        </div>
    )
}

export default SectionThree