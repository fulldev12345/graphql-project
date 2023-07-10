export const PORT = 8080;
export const environment = {
  development: {
    serverURL: `http://localhost:${PORT}/`,
    dbString: "mongodb://127.0.0.1:27017/graphqlTutorial",
  },
  production: {
    serverURL: `http://localhost:${PORT}/`,
    dbString: "mongodb://localhost:27017/graphqlTutorial-prod",
  },
};
