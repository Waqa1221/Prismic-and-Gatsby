import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface HomePageProps {
  data: {
    allPrismicHomePage: {
      edges: Array<{
        node: {
          data: {
            title: string;
            select_auth: string;
            og_image: {
              gatsbyImageData: any;
            };
          };
        };
      }>;
    };
  };
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  // Extract data from the GraphQL query result
  const homePageData = data.allPrismicHomePage.edges[0].node.data;

  // Get image data using getImage for correct processing
  const ogImage = getImage(homePageData.og_image.gatsbyImageData);

  return (
    <div className="flex flex-col   bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-8 h-auto w-full">
        <h1 className="text-4xl font-bold mb-4">{homePageData.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{homePageData.select_auth}</p>

        {/* Display the image if it's available */}
        {ogImage ? (
          <div
            className="rounded overflow-hidden shadow-md"
            // style={{ width: "600px", height: "194px" }} // Optional styling for display
          >
            <GatsbyImage
              image={ogImage}
              alt={homePageData.title || "Homepage Image"}
            />
          </div>
        ) : (
          <p className="text-red-500 mt-4">Image not available</p>
        )}
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allPrismicHomePage {
      edges {
        node {
          data {
            title
            select_auth
            og_image {
              gatsbyImageData(width: 2000, height: 880)
            }
          }
        }
      }
    }
  }
`;

export default HomePage;

// import React from "react";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

// interface HomePageProps {
//   data: {
//     title: string;
//     select_auth: string;
//     og_image: {
//       gatsbyImageData: any;
//     };
//   };
// }

// const HomePage: React.FC<HomePageProps> = ({ data }) => {
//   const ogImage = getImage(data.og_image.gatsbyImageData);

//   return (
//     <div className="flex flex-col items-center justify-center mt-8 bg-gray-50">
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
//         <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
//         <p className="text-lg text-gray-700 mb-6">{data.select_auth}</p>
//         {ogImage && (
//           <div className="rounded overflow-hidden shadow-md">
//             <GatsbyImage image={ogImage} alt={data.title} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
