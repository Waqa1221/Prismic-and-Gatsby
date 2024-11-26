import React from "react";
import { graphql } from "gatsby";

interface PrimeMinisterData {
  prime_minister_of_pakistan: {
    text: string;
  };
  prime_minister: {
    text: string;
  };
  paragraph: {
    text: string;
  };
  numbering: string;
}

interface PrimeMinisterProps {
  data: {
    allPrismicPrimeminister: {
      edges: Array<{
        node: {
          data: PrimeMinisterData;
        };
      }>;
    };
  };
}

const PrimeMinisterPage: React.FC<PrimeMinisterProps> = ({ data }) => {
  const primeMinister = data.allPrismicPrimeminister.edges[0].node.data;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-gray-50 rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-4">
          {primeMinister.prime_minister_of_pakistan.text}
        </h1>
        <h2 className="text-2xl font-semibold mb-4">
          {primeMinister.prime_minister.text}
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          {primeMinister.paragraph.text}
        </p>
        {primeMinister.numbering && (
          <div className="mt-4 text-lg font-medium text-gray-800">
            <span>Numbering: </span>
            <span className="text-blue-500">{primeMinister.numbering}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allPrismicPrimeminister {
      edges {
        node {
          data {
            prime_minister_of_pakistan {
              text
            }
            prime_minister {
              text
            }
            paragraph {
              text
            }
            numbering
          }
        }
      }
    }
  }
`;

export default PrimeMinisterPage;
