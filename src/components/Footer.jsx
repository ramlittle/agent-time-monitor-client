import '../styles/Footer.css'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section className="footer-container">
                <span>
                    <a href="https://www.ntu-nobletrends.com/">Noble Trends Unbound, Inc. </a>
                    Copyright &copy; {currentYear}
                </span>
                <span>
                    <a href="mailto:itsupport@ntu-nobletrends.com">
                        itsupport@ntu-nobletrends.com
                    </a>
                </span>
            </section>

        </>
    )
}

export default Footer;