import { IImage } from "./image";

const Image = ({src, alt, classname}:IImage) => (
    <img className={classname} src={src} alt={alt} />
)

export default Image;