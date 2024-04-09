import Image from "../../components/image";
import Link from "../../components/link";
import Styles from "../../styles/Styles.module.css";

const Navbar = () => (
    <nav className={Styles.navbar}>
        <section>
            <h1>Café Expresso</h1>
            <Link href="/">
                <Image classname={Styles.imgLogo} src="./images/logo.png" alt="Logo" />
            </Link>            
        </section>
        <ul>
            <li><Link href="/" name="Início"/></li>
            <li><Link href="/#sobre" name="Sobre"/></li>
            <li><Link href="/#nosso-menu" name="Nosso Menu"/></li>
            <li><Link href="/#contato" name="Contato"/></li>
        </ul>
    </nav>
)

export default Navbar;