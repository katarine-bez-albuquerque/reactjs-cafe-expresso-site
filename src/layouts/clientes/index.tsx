import Image from "../../components/image";
import Title from "../../components/title";
import Styles from "../../styles/Styles.module.css";

const Clientes = () => (
    <section className={Styles.clientes}>
        <section className={Styles.containerRowFull}>
            <article>
                <Image classname={Styles.imgClientCafe} src="./images/cafe-009.png" alt="Imagem" />
            </article>
            <article className={Styles.testmonial}>
                <section className={Styles.descriptionPerson}>
                    <p>"feugiat non nisl faucibus, sagittis sollicitudin tellus. Vivamus mi nisi, dictum vitae dui ut, aliquet sollicitudin felis. Suspendisse et consectetur arcu, id varius metus. Etiam nulla nisi, imperdiet sit amet iaculis nec, ultrices non mauris. Fusce tristique enim sed nisl congue."</p>
                </section>
                <section className={Styles.person}>
                    <Image classname={Styles.imgClient} src="./images/pessoa.png" alt="Pessoa" />
                    <article id="info">
                        <h6>Mauris Sapien<br /><span>@mauris.sapien</span></h6>
                    </article>
                </section>
            </article>
            <article>
                <section>
                    <Title name="Nosso cliente feliz" />
                    <p>Cras at vestibulum sem, eu vulputate felis. Nullam id pulvinar arcu. In mattis cursus leo, ac molestie odio maximus lacinia. Praesent at tortor faucibus, consectetur est at, maximus arcu.</p>
                    <div id="row" className={Styles.personRowShow}></div>
                </section>
            </article>
        </section>
    </section>
)

export default Clientes;