import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

function Footer(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>dev.to Hackathon</h2>
        <div className={styles.linksContainer}>
          <Link className={styles.link} to="home">
            Home
          </Link>
          <Link className={styles.bottomCTA} to="/analytics">
            See the analytics!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
