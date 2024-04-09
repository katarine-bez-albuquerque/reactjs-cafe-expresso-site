import Link from "../../components/link";
import Styles from "../../styles/Styles.module.css";

const ListMenu = () => (
    <section className={Styles.listMenu}>
        <section className={Styles.containerRowFull}>
            <article id="site">
                <Link href="" name="info.exemplo.com"/>
            </article>
            <article className={Styles.listMenuItems}>
                <ul>
                    <li><Link href="/" name="Início"/></li>
                    <li><Link href="/#sobre" name="Sobre"/></li>
                    <li><Link href="/#nosso-menu" name="Nosso Menu"/></li>
                    <li><Link href="/#contato" name="Contato"/></li>
                </ul>
                <ul>
                    <li><Link href="" name="Loren"/></li>
                    <li><Link href="" name="Ipsum"/></li>
                    <li><Link href="" name="Sit Ame"/></li>
                    <li><Link href="" name="Ipsum Dolor"/></li>
                </ul>
                <ul>
                    <li><Link href="" name="Loren"/></li>
                    <li><Link href="" name="Ipsum"/></li>
                    <li><Link href="" name="Sit Ame"/></li>
                    <li><Link href="" name="Ipsum Dolor"/></li>
                </ul>
            </article>
        </section>
    </section>
)

export default ListMenu;