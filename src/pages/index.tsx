import React from "react";
import { graphql, Link } from "gatsby";
import AuthorsPage from "./authors";
import Navbar from "./Navbar"; // Import Navbar

const IndexPage = ({ data }: { data: any }) => {
  const homeImageText =
    data.allPrismicHomepage.edges[0].node.data.home_mage.text;

  // Prime Minister data
  const primeMinisterData = data.allPrismicPrimeminister.edges[0].node.data;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      <Navbar /> {/* Include Navbar component */}
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl w-full mt-8">
        <h1 className="text-xl font-semibold mb-4">Welcome to Gatsby!</h1>
        <p className="text-xl mb-6">{homeImageText}</p>

        {/* Authors Section */}
        <AuthorsPage data={data} />

        {/* Prime Minister Section */}
        <div className="bg-gray-50 rounded-lg shadow-md p-8 mt-8 w-full">
          <h2 className="text-2xl font-bold mb-4">
            {primeMinisterData.prime_minister_of_pakistan.text}
          </h2>
          <h3 className="text-xl font-semibold mb-4">
            {primeMinisterData.prime_minister.text}
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            {primeMinisterData.paragraph.text}
          </p>
          {primeMinisterData.numbering && (
            <div className="mt-4 text-lg font-medium text-gray-800">
              <span>Numbering: </span>
              <span className="text-blue-500">
                {primeMinisterData.numbering}
              </span>
            </div>
          )}
        </div>

        {/* Links to other pages */}
        <div className="text-center mt-6">
          <Link
            to="/homepage"
            className="text-blue-500 hover:underline text-lg font-medium"
          >
            Go to Homepage
          </Link>
        </div>
        <div className="text-center mt-4">
          <Link
            to="/PrimeMinister"
            className="text-blue-500 hover:underline text-lg font-medium"
          >
            Go to Prime Minister Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allPrismicHomepage {
      edges {
        node {
          data {
            home_mage {
              text
            }
          }
        }
      }
    }
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
    allPrismicNavbar {
      edges {
        node {
          data {
            logo {
              text
            }
            home_link {
              url
            }
            login_link {
              url
            }
            setting_link {
              url
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

// import React from "react";
// import { graphql } from "gatsby";
// import AuthorsPage from "./authors";
// import HomePage from "./homepage";

// const IndexPage = ({ data }: { data: any }) => {
//   const homeImageText =
//     data.allPrismicHomepage.edges[0].node.data.home_mage.text;
//   const homePageData = data.allPrismicHomePage.edges[0].node.data;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
//       <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl w-full">
//         <h1 className="text-xl font-semibold mb-4">Welcome to Gatsby!</h1>
//         <p className="text-xl">{homeImageText}</p>

//         {/* Display HomePage data */}
//         <HomePage data={homePageData} />

//         {/* Display AuthorsPage data */}
//         <AuthorsPage data={data} />
//       </div>
//     </div>
//   );
// };

// export const query = graphql`
//   query {
//     allPrismicHomepage {
//       edges {
//         node {
//           data {
//             home_mage {
//               text
//             }
//           }
//         }
//       }
//     }
//     allPrismicAuthors {
//       edges {
//         node {
//           data {
//             imran_khan {
//               text
//             }
//             description {
//               text
//             }
//           }
//         }
//       }
//     }
//     allPrismicHomePage {
//       edges {
//         node {
//           data {
//             title
//             select_auth
//             og_image {
//               gatsbyImageData(aspectRatio: 1.5, height: 10)
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export default IndexPage;
