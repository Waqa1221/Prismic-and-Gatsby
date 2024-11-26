import React from "react";
import { graphql } from "gatsby";

interface AuthorData {
  imran_khan: {
    text: string;
  };
  description: {
    text: string;
  };
}

interface Props {
  data: {
    allPrismicAuthors: {
      edges: [
        {
          node: {
            data: AuthorData;
          };
        }
      ];
    };
  };
}

const AuthorsPage: React.FC<Props> = ({ data }) => {
  const author = data.allPrismicAuthors.edges[0].node.data;

  return (
    <div className="flex flex-col items-center mt-8  bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <div className="">
          <h1 className="text-3xl font-semibold mb-4">
            {author.imran_khan.text}
          </h1>
          <p className="text-lg text-gray-600">{author.description.text}</p>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allPrismicAuthors {
      edges {
        node {
          data {
            imran_khan {
              text
            }
            description {
              text
            }
          }
        }
      }
    }
  }
`;

export default AuthorsPage;
