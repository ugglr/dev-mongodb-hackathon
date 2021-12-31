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
            onClick={async () => await sendEvent('CTA1 clicked!')}
          >
            CTA3
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
