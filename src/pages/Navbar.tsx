import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Navbar: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `);

  const navbarData = data.allPrismicNavbar.edges[0].node.data;

  return (
    <nav className="bg-gray-400 p-8 w-[895px] rounded-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          {navbarData.logo.text}
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <Link
            to={
              navbarData.home_link.url.startsWith("/")
                ? navbarData.home_link.url
                : `/${navbarData.home_link.url}`
            }
            className="text-white hover:text-gray-300 text-lg font-medium"
          >
            Home
          </Link>
          <Link
            to={
              navbarData.login_link.url.startsWith("/")
                ? navbarData.login_link.url
                : `/${navbarData.login_link.url}`
            }
            className="text-white hover:text-gray-300 text-lg font-medium"
          >
            Login
          </Link>
          <Link
            to={
              navbarData.setting_link.url.startsWith("/")
                ? navbarData.setting_link.url
                : `/${navbarData.setting_link.url}`
            }
            className="text-white hover:text-gray-300 text-lg font-medium"
          >
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
