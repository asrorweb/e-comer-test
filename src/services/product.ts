import { ProductType } from "@/interfaces/product.type";
import { gql, GraphQLClient } from "graphql-request";

const API_URL = process.env.NEXT_HYGRAPH_ENDPOINT as string;

const graphQLClient = new GraphQLClient(API_URL);

export const ProductService = {
  async getProducts() {
    const query = gql`
      query MyQuery {
        products(stage: PUBLISHED) {
          id
          title
          image {
            url
          }
        }
      }
    `;

    // const { products } = await request<{ products: ProductType[] }>(API_URL, query);
    // return products;
    const { products } = await graphQLClient.request<{ products: ProductType[] }>(query);
    return products;
  },
};

export const AllPosts = `
      query MyQuery {
        products {
          id
          title
          image {
            url
          }
        }
      }
   
`;
