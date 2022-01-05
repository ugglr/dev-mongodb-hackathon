import { useMutation, gql } from '@apollo/client';
import { M_NEW_EVENT } from '../graphql/new-event.mutation';

import styles from './Home.module.css';

function Landing() {
  const [sendEvent] = useMutation(M_NEW_EVENT);

  return (
    <div>
      <h1>Test Application</h1>
      <h3>Click around on the buttons and see the charts grow!</h3>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.baseButton}
          onClick={async () =>
            await sendEvent({ variables: { event: 'CTA1 clicked!' } })
          }
        >
          CTA1
        </button>
        <button
          className={styles.baseButton}
          onClick={async () =>
            await sendEvent({ variables: { event: 'CTA2 clicked!' } })
          }
        >
          CTA2
        </button>
        <button
          className={styles.baseButton}
          onClick={async () =>
            await sendEvent({ variables: { event: 'CTA3 clicked!' } })
          }
        >
          CTA3
        </button>
      </div>
    </div>
  );
}

export default Landing;
