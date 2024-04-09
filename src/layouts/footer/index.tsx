import Link from "../../components/link";
import Styles from "../../styles/Styles.module.css";

const Footer = () => (
    <footer className={Styles.footer}>
        <section className={Styles.containerRowFull}>
            <article id="copyright">
                <h6>&copy; 2024 - Todos os direitos reservados.</h6>
            </article>
            <article id="footer-menu">
                <ul>
                    <li><Link href="" name="Privacidade"/></li>
                    <li><Link href="" name="Acessibilidade"/></li>
                    <li><Link href="" name="Termos"/></li>
                </ul>
            </article>
        </section>
    </footer>
)

export default Footer;