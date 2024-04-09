import Button from "../../components/button";
import Image from "../../components/image";
import Styles from "../../styles/Styles.module.css";
import Navbar from "../navbar";

const Header = () => (
    <header className={Styles.header}>
        <Navbar />
        <section className={Styles.container}>
            <section className={Styles.headerInfo}>
                <article>
                    <section className={Styles.headerInfoImg}>
                        <Image classname={Styles.imgs} src="./images/cafe.png" alt="Café Expresso" />
                    </section>
                    <p>Consectetur adipiscing elit. Aenean velit urna, vulputate sit amet interdum et, lacinia sit amet augue. Ut ex ante, ultricies et blandit vitae, semper a purus. Duis gravida, magna quis finibus tempus, nibh felis laoreet justo, nec porta ex leo eget leo.</p>
                    <Button classname={Styles.button} name="Loren Ipsum"/>
                </article>
                <article>
                    <Image classname={Styles.imgs} src="./images/cafe-01.png" alt="Café" />
                </article>
            </section>
            <section className={Styles.headerQuestion}>
                <h4>Neque lorem elementum?</h4>
            </section>
        </section>
    </header>
)

export default Header;