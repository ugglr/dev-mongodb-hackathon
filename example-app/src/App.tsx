import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Layout from './components/Layout';

import styles from './App.module.css';

const M_SEND_EVENT = gql`
  mutation CreateEvent($event: String!) {
    createAppEvent(input: { event: $event }) {
      id
    }
  }
`;
const client = new ApolloClient({
  uri: 'https://devmongo.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const sendEvent = async (eventName: string) => {
    try {
      await client.mutate({
        mutation: M_SEND_EVENT,
        variables: {
          event: eventName,
        },
      });
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
    }
  };
  return (
    <Layout>
      <div>
        <h1>Test Application</h1>
        <h3>Click around on the buttons and see the charts grow!</h3>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.baseButton}
            onClick={async () => await sendEvent('CTA1 clicked!')}
          >
            CTA1
          </button>
          <button
            className={styles.baseButton}
            onClick={async () => await sendEvent('CTA2 clicked!')}
          >
            CTA2
          </button>
          <button
            className={styles.baseButton}
            onClick={async () => await sendEvent('CTA3 clicked!')}
          >
            CTA3
          </button>
        </div>
        <h2 style={{ marginTop: '60px' }}>
          The below part makes up the internal analytics charting
        </h2>
        <p>
          By using mongoDB charts one can easily setup new dashboards for your
          apps analytics.
        </p>
        <div className={styles.chartsContainer}>
          <p>Refreshes every 10s</p>
          <iframe
            style={{
              background: '#FFFFFF',
              border: 'none',
              borderRadius: '2px',
              boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
            }}
            width="640"
            height="480"
            src="https://charts.mongodb.com/charts-dev-to-hackathon-flbpa/embed/charts?id=92c1fae7-fff1-422d-bc65-756e3dff040a&maxDataAge=60&theme=light&autoRefresh=true"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

export default App;
