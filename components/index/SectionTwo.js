import Detail from '../Detail'
import Icons from '../Icons'
import styles from '../../styles/SectionTwo.module.css'

const SectionTwo = () => {
    return (
        <div className={styles.section}>
        <div className={`backgroundCircle ${styles.backgroundCircle}`}></div>
            <div className={styles.detailDiv}>
                <Detail>
                    <Detail.Heading color="#fff">Who we work with.</Detail.Heading>
                    <Detail.Para color="#fff">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`}</Detail.Para>
                </Detail>
                <button className={styles.abtUsButton}>About us</button>
            </div>
            <div className={styles.companiesLogo}>
                <div>
                    <Icons icon="tesla" color="#fff" width={150} heigth={50}/>
                    <Icons icon="microsoft" color="#fff" width={150} heigth={50}/>
                    <Icons icon="microsoft" color="#fff" width={150} heigth={50}/>
                    <Icons icon="microsoft" color="#fff" width={150} heigth={50}/>
                    <Icons icon="microsoft" color="#fff" width={150} heigth={50}/>
                    <Icons icon="microsoft" color="#fff" width={150} heigth={50}/>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo