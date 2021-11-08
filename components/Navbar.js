import Image from 'next/image'
import Button from './Button'
import Logo from '../public/paypal.png'


const Navbar = () => {
    return (
        <nav className="header">
            <div className='logoDiv'>
                <Image src={Logo} alt="A Demo NextJs Frontend Website" width={81} height={81}/>
                <div className='navigationDiv'>
                    <ul className='ul'>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='btnActionsDiv'>
                <Button>Schedule a Demo</Button>
            </div>
        </nav>
    )
}

export default Navbar