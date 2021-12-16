import classNames from "classnames";
import {ComponentChild} from 'preact';

function NavItem(props: { to: string; children: ComponentChild; active?: boolean; external?: boolean }) {
    const { to, children, active, external } = props;
    return (
        <li className={classNames("nav-item", { active })}>
            <a target={external ? "_blank" : undefined} href={to}>
                {children}
            </a>
        </li>
    );
}

export default function NavBar() {
    return (
        <nav>
            <ul>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/projects">Projects</NavItem>
                <NavItem to="https://github.com" external>
                    GitHub
                </NavItem>
            </ul>
        </nav>
    );
}
