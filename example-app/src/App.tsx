import {
  ApolloClient,
  InMemoryCache,
  gql,
  useMutation,
  ApolloProvider,
} from '@apollo/client';
import Layout from './components/Layout';

const M_SEND_EVENT = gql`
  mutation CreateEvent($input: input) {
    createAppEvent(input: $input) {
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
      const res = await client.mutate({
        mutation: M_SEND_EVENT,
        variables: {
          input: {
            event: eventName,
          },
        },
      });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Layout>
      <div>
        <h1>Test Application</h1>
        <h3>Click around on the buttons and see the charts grow!</h3>
        <div>
          <button onClick={async () => await sendEvent('CTA1 clicked!')}>
            CTA1
          </button>
          <button>CTA2</button>
          <button>CTA3</button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
