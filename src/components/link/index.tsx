import { ILink } from "./link";

const Link = ({href, name, children}:ILink) => (
    <a href={href}>
        {name ? name : ''}
        {children ? children : null}
    </a>
)

export default Link;