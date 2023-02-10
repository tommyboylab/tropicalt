'use client';
import { Provider } from 'urql';
import { client } from '../gql/urqlClient';

type Props = {
  children: React.ReactNode;
};
const GraphQlProvider = ({ children }: Props) => {
  return <Provider value={client}>{children}</Provider>;
};

export default GraphQlProvider;
