import {
    NavLink
} from "react-router-dom";
  
function CustomLink(props) {
    return (
        <li className={props.className}>
            <NavLink to={props.to} end={props.end} style={
                ( {isActive} ) => ({
                    color: isActive ? "blue" : ""
                })
            }>
                {props.children}
            </NavLink>
        </li>
    );
}

export default CustomLink