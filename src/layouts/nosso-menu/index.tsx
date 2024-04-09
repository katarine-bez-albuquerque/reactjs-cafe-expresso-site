import Button from "../../components/button";
import Image from "../../components/image";
import Title from "../../components/title";
import { INossoMenu } from "../../model/nosso-menu";
import Styles from "../../styles/Styles.module.css";

const NossoMenu = ({ data, leftButton, rightButton, carousel }: INossoMenu) => (
    <section id="nosso-menu" className={Styles.nossoMenu}>
        <section className={Styles.container}>
            <article className={Styles.nossoMenuTitle}>
                <Title name="Nosso Menu" />
                <p>Sed dapibus accumsan risus pretium pharetra. In et ullamcorper tortor. Praesent at ligula imperdiet, faucibus dui in, viverra quam. Quisque feugiat velit eget finibus mattis. Nulla lorem ex, blandit non mauris id, egestas blandit elit. Quisque vitae nisl mi. Curabitur pharetra erat quis neque varius dapibus. Duis luctus orci et eros auctor porttitor. Etiam a erat risus.</p>
            </article>
            <article className={Styles.nossoMenuCarousel}>
                <Button onclick={leftButton} name="&larr;"/>
                <section className={Styles.carousel} ref={carousel}>
                    {
                        data.map(item => {
                            const { image, title, only, value, text } = item;
                            return (
                                <article key={image} className={Styles.carouselItem}>
                                    <Image classname={Styles.imgs} src={`./images/${image}`} alt={image.replace(".png", "")} />
                                    <h6><strong>{title}</strong></h6>
                                    <h5>{only} <span>{value}</span></h5>
                                    <h6><span>{text}</span></h6>
                                </article>
                            )
                        })
                    }
                </section>
                <Button onclick={rightButton} name="&rarr;"/>
            </article>
        </section>
    </section>
)

export default NossoMenu;