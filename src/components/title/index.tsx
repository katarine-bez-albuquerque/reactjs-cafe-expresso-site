import { IText } from "../../model/text";

const Title = ({ name }: IText) => (
    <>{name ? <h2>{name}</h2> : ''}</>
)

export default Title;