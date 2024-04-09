import Button from "../../components/button";
import Image from "../../components/image";
import Title from "../../components/title";
import Styles from "../../styles/Styles.module.css";

const Contato = () => (
    <section id="contato" className={Styles.contato}>
        <section className={Styles.containerRowFull}>
            <article id="description" className={Styles.contatoInfo}>
                <Title name="Pronto para começar?" />
                <p>Obtenha uma demonstração guiada Loren Ipsum dolor sit amet.</p>
            </article>
            <article className={Styles.contatoInfo}>
                <section className={Styles.contatoInput}>
                    <input type="email" placeholder="Endereço de E-mail" />
                    <Button>
                        <img src="./images/send.svg" alt="Enviar" />
                    </Button>
                </section>
            </article>
            <article className={Styles.contatoImage}>
                <Image classname={Styles.imgs} src="./images/cafe-008.png" alt="Image" />
            </article>
        </section>
    </section>
)

export default Contato;