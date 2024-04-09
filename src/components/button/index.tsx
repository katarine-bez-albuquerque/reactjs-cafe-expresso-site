import { IButton } from "./button";

const Button = ({name, classname, children, onclick}:IButton) => (
    <button type="button" className={classname} onClick={onclick}>
        {name ? name : ''}
        {children ? children : null}
    </button>
)

export default Button;