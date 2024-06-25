import './styling/Contact.css'

function Contact() {
    return (
        <section id="contact">
            <div>
                <h1 className='contact-title'>
                    Contact
                </h1>
                <div className='contact-info'>
                    <p>Phone +1 999 999 999</p>
                    <p>Email davidjgn@hotmail.com</p>
                    <p>Github</p>
                    <p>LinkedIn</p>
                </div>
                <footer>
                    &copy; 2024 All rights reserved
                </footer>
            </div>
        </section>
    );
}

export default Contact;