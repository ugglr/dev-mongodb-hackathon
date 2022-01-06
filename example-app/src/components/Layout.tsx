import { ReactElement } from 'react';
import Footer from './Footer';
import Header from './Header';

import styles from './Layout.module.css';

type Props = { children: any };

function Layout({ children }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
