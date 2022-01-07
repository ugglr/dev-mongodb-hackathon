import { useMutation } from '@apollo/client';
import Lottie from 'react-lottie';
import { M_NEW_EVENT } from '../graphql/new-event.mutation';
import * as animationData from '../assets/63210-mongo.json';

import styles from './Home.module.css';

function Landing() {
  const [sendEvent] = useMutation(M_NEW_EVENT);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroText}>dev.to MongoDB Hackathon</h1>
            <h3>
              Click around on the buttons to send analytics events to our
              service!
            </h3>
            <button
              className={styles.baseButton}
              onClick={async () =>
                await sendEvent({ variables: { event: 'CTA1 clicked!' } })
              }
            >
              CTA1
            </button>
          </div>
          <div className={styles.heroRight}>
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        </div>
        <div
          className={styles.section}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div>
            <h2 style={{ textAlign: 'right' }}>What a great offer!</h2>
            <h3>
              Maybe you want to keep track of users pressing this button too?
            </h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <button
                className={styles.baseButton}
                onClick={async () =>
                  await sendEvent({ variables: { event: 'CTA2 clicked!' } })
                }
              >
                CTA2
              </button>
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <h2>Even more CTAs!</h2>
          <h3>
            This is yet another CTA for us to build data on in our analytics
            tool.
          </h3>
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
    </div>
  );
}

export default Landing;
