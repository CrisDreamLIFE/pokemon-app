"use client"
//import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// const httpLink = new HttpLink({
//   uri: 'http://localhost:3000/graphql',
//   credentials: 'same-origin',
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

// export default client;

// import { HttpLink } from "@apollo/client";
// import {
//   ApolloNextAppProvider,
//   ApolloClient,
//   InMemoryCache,
// } from "@apollo/experimental-nextjs-app-support";

// // have a function to create a client for you
// function makeClient() {
//   const httpLink = new HttpLink({
//     uri: "http://localhost:3000/graphql",
//     fetchOptions: { cache: "no-store" },
//   });

//   // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
//   return new ApolloClient({
//     // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
//     cache: new InMemoryCache(),
//     link: httpLink,
//   });
// }

// // you need to create a component to wrap your app in
// export function ApolloWrapper({ children }) {
//   return (
//     <ApolloNextAppProvider makeClient={makeClient}>
//       {children}
//     </ApolloNextAppProvider>
//   );
// }

import React from "react";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

// have a function to create a client for you
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Cambia esto por la URL de tu API GraphQL
  cache: new InMemoryCache(),
});

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider >
  );
}