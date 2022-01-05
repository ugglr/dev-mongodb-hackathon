import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header(): ReactElement {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <p className={styles.logo}>So cooewl website</p>
        <div className={styles.linksContainer}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link
            className={styles.analyticsCTA}
            to="/analytics"
            onClick={() => console.log('hello')}
          >
            See the analytics!
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
