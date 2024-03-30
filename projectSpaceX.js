import { ApolloExplorer } from '@apollo/explorer/react';
  
export function EmbeddedExplorer() {
  return (
    <ApolloExplorer 
      graphRef='SpaceX-pxxbxen@current'
      persistExplorerState={false}
      initialState={{
        document: `query ExampleQuery($limit: Int) {
  company {
    ceo
    links {
      website
    }
    founded
    employees
  }
  rockets(limit: $limit) {
    active
    cost_per_launch
    country
    id
    type
    name
    success_rate_pct
    wikipedia
  }
}`,
        variables: {
  "limit": 5
},
        headers: {},
        displayOptions: {
          showHeadersAndEnvVars: true, 
          docsPanelState: 'open', 
          theme: 'light',
        },
      }}
    />
  );
}