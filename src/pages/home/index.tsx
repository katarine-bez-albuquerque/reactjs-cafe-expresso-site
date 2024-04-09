import { useEffect, useRef, useState } from "react";
import { ICafe } from "../../model/cafe";
import { Api } from "../../data/api";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import Sobre from "../../layouts/sobre";
import NossoMenu from "../../layouts/nosso-menu";
import Clientes from "../../layouts/clientes";
import Contato from "../../layouts/contato";
import ListMenu from "../../layouts/list-menu";

const Home = () => {

    const [data, setData] = useState<ICafe[]>([]);
    let carousel: any = useRef(null);

    useEffect(() => {
        fetch(`${Api.base}api/cafe.json`)
            .then(response => response.json())
            .then(json => setData(json.data))
            .catch(error => console.log(error));
    }, []);

    const leftButton = () => {
        if (carousel.current !== null) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
        }
    }

    const rightButton = () => {
        if (carousel.current !== null) {
            carousel.current.scrollLeft += carousel.current.offsetWidth;
        }
    }

    return (
        <div id="page">
            <Header />
            <Sobre />
            <NossoMenu
                data={data}
                leftButton={() => leftButton()}
                rightButton={() => rightButton()}
                carousel={carousel}
            />
            <Clientes />
            <Contato />
            <ListMenu />
            <Footer />
        </div>
    )
}

export default Home;