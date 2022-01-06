import { useMutation } from '@apollo/client';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { M_NEW_EVENT } from '../graphql/new-event.mutation';
import styles from './Header.module.css';

function Header(): ReactElement {
  const [sendEvent] = useMutation(M_NEW_EVENT);
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <Link
          style={{ textDecoration: 'none' }}
          to="/"
          onClick={() =>
            sendEvent({ variables: { event: 'Navigation: logo' } })
          }
        >
          <p className={styles.logo}>dev.to hackathon</p>
        </Link>
        <div className={styles.linksContainer}>
          <Link
            className={styles.link}
            to="/"
            onClick={() =>
              sendEvent({ variables: { event: 'Navigation: home' } })
            }
          >
            Home
          </Link>
          <Link
            className={styles.analyticsCTA}
            to="/analytics"
            onClick={() =>
              sendEvent({ variables: { event: 'Navigation: analytics' } })
            }
          >
            See the analytics!
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
