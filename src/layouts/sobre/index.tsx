import Button from "../../components/button";
import Image from "../../components/image";
import Subtitle from "../../components/subtitle";
import Title from "../../components/title";
import Styles from "../../styles/Styles.module.css";

const Sobre = () => (
    <section id="sobre" className={Styles.sobre}>
        <section className={Styles.containerRow}>
            <article>
                <Image classname={Styles.imgs} src="./images/cafe-02.png" alt="Café" />
            </article>
            <article>
                <Subtitle name="Sobre"/>
                <Title name="Loren Ipsum"/>
                <p>Duis magna quis finibus tempus, nibh felis laoreet justo, nec porta ex leo eget leo. Nullam luctus, nisl sit amet rutrum ultricies, neque lorem elementum sem, at convallis nunc orci et libero. Donec blandit faucibus elit, at pulvinar sapien ornare vel. Sed pulvinar ornare sem vitae faucibus. Donec laoreet.</p>
                <Button classname={Styles.button} name="magna commodo"/>
            </article>
        </section>
    </section>
)

export default Sobre;