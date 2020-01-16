import React from 'react';
import App from 'next/app';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import fetch from 'isomorphic-unfetch';

const apollo = new ApolloClient({
	link: ApolloLink.from([
		onError(({ graphQLErrors, networkError }) => {
			if (graphQLErrors)
				graphQLErrors.map(({ message, locations, path }) =>
					console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
				);
			if (networkError) console.log(`[Network error]: ${networkError}`, networkError);
		}),
		createHttpLink({
			uri: 'https://api.tropicalt.ca/graphql',
			fetch: fetch,
		}),
	]),
	cache: new InMemoryCache(),
});

class TropicalT extends App {
	render() {
		const { Component, pageProps, router } = this.props;

		return (
			<ApolloHooksProvider client={apollo}>
				<Component {...pageProps} router={router} />
			</ApolloHooksProvider>
		);
	}
}

export default TropicalT;
