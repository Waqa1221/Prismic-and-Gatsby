module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `punjab`, // Replace with your Prismic repository name
        accessToken:
          "MC5aMFF5cFJFQUFDb0FGVzhB.NCXvv70r77-977-977-9c--_vWLvv73vv73vv73vv73vv70g77-977-977-9WXpd77-9X1Dvv70kZErvv73vv73vv70", // Optional for private repos
        customTypesApiToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6InB1bmphYi0xYzJlZTJmMC0xNTk3LTQxZjItOTVhNC0wNDRkYzMwNjI5ZWNfNSIsImRhdGUiOjE3MzI1MjI2NzMsImRvbWFpbiI6InB1bmphYiIsImFwcE5hbWUiOiJwdW5qYWIiLCJpYXQiOjE3MzI1MjI2NzN9.24NaxnQpLddLauVYIgeQm3G61kMBJ4B6bqS4SNpzJr8",
        schemas: require("./src/schemas/page.json"),
      },
    },
  ],
};
