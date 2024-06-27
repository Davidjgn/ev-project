import './styling/Contact.css'

function Contact() {
    return (
        <section id="contact">
            <div>
                <h1 className='contact-title'>
                    Contact
                </h1>
                <div className='contact-info'>
                    <p>+1 999 999 999</p>
                    <p>davidjgn11@gmail.com</p>
                    <a href='https://github.com/Davidjgn'>Github</a>
                    <a href='https://www.linkedin.com/in/david-jose-garza-navarro-782263230/'>LinkedIn</a>
                </div>
                <footer>
                    &copy; 2024 All rights reserved
                </footer>
            </div>
        </section>
    );
}

export default Contact;