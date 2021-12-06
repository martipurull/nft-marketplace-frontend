import { Facebook, Instagram, Whatsapp, Twitter, Youtube } from 'react-bootstrap-icons'


const MPFooter = () => {

    return (
        <div id="mp-footer" className="d-flex bg-dark text-light fixed-bottom pt-4 pb-3">
            <div>
                <Facebook size={20} className="mr-3" />
                <Instagram size={20} className="mr-3" />
                <Whatsapp size={20} className="mr-3" />
                <Twitter size={20} className="mr-3" />
                <Youtube size={20} className="mr-3" />
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