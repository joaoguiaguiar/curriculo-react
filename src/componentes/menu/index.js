import { Link, useLocation } from 'react-router-dom';
import styles from './menu.module.css'; // Importação correta de CSS Modules
import MenuLink from './menuLink';

const Menu = () => {


        return (
            <header>
                <nav className={styles.navegacao}>
                    <MenuLink to="/">
                        start
                    </MenuLink>
                    \
                    <MenuLink to="/about me">
                        about me
                    </MenuLink>
                </nav>
            </header>
        )
}

export default Menu;
