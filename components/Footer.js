import Icons from "./Icons"

const Footer = () => {
    return (
        <footer className='header footer'>
        <div className='backgroundCircle footerBackgroundCircle'></div>
            <div className='logoDiv'>
                <Icons icon="paypal"/>
                <div className='navigationDiv'>
                    <ul className="ul">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="socialAccounts">
                <div>
                    <Icons icon="facebook"/>
                    <Icons icon="twitter"/>
                    <Icons icon="linkedin"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer