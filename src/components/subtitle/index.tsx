import { IText } from "../../model/text";

const Subtitle = ({ name }: IText) => (
    <>{name ? <h6>{name}</h6> : ''}</>
)

export default Subtitle;