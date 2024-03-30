//npm install @shopify/storefront-api-client --s

import {createStorefrontApiClient, CustomFetchApi} from '@shopify/storefront-api-client';
import {fetch as nodeFetch} from 'node-fetch';

const clientPublic = createStorefrontApiClient({
  storeDomain: 'http://your-shop-name.myshopify.com',
  apiVersion: '2023-10',
  publicAccessToken: 'your-storefront-public-access-token',
});

const clientPrivate = createStorefrontApiClient({
  storeDomain: 'http://your-shop-name.myshopify.com',
  apiVersion: '2023-10',
  privateAccessToken: 'your-storefront-private-access-token',
  customFetchApi: nodeFetch,
});

const shopQuery = `
  shop {
    name
    id
  }
  productTags(first: 5) {
    edges {
      node
    }
  }
  productTypes(first: 5) {
    edges {
      node
    }
  }
  products(first: 5) {
    edges {
      node {
        id
        createdAt
        media(first: 5) {
          edges {
            node {
              id
              mediaContentType
              ... on Video {
                id
                sources {
                  format
                  height
                  width
                  url
                }
              }
              ... on Model3d {
                id
                sources {
                  url
                  format
                  filesize
                }
              }
              ... on MediaImage {
                id
                image {
                  height
                  altText
                  width
                }
              }
              ... on ExternalVideo {
                id
                embedUrl
              }
            }
          }
        }
        isGiftCard
        availableForSale
        featuredImage {
          url
          width
          height
          altText
        }
        productType
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

const response = await client.fetch(shopQuery);

if (response.ok) {
  const {errors, data, extensions} = await response.json();
}