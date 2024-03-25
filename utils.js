import Client from 'shopify-buy';
import {SHOPIFY_STOREFRONT_TOKEN, SHOPIFY_STORE_URL} from '@env';

// Initializing a client to return content in the store's primary language
export const shopifyClient = Client.buildClient({
  domain: SHOPIFY_STORE_URL,
  storefrontAccessToken: SHOPIFY_STOREFRONT_TOKEN,
});
