import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Facebook, Instagram, Whatsapp, Twitter, Youtube } from 'react-bootstrap-icons'


const MPFooter = () => {

    return (
        <div id="mp-footer" className="d-flex bg-dark text-light fixed-bottom pt-4 pb-3">
            <div>
                <Facebook size={20} className="mx-2" />
                <Instagram size={20} className="mx-2" />
                <Whatsapp size={20} />
                <Twitter size={20} className="mx-2" />
                <Youtube size={20} className="mx-2" />
            </div>
            <div>
                NFT Markt &copy; {new Date().getFullYear()}
            </div>
            <div>
                <p>Privacy Policy</p>
                <p>Contact</p>
                <p>Partners</p>
                <p>Work with us</p>
            </div>
        </div>
    )
}

export default MPFooter