const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { db } = require("./db");
const { seed } = require("./db/seed");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

app.listen(3000, async () => {
  console.log("listening on port 3000");
  try {
    await db.sync({ force: true });
    seed();
  } catch (error) {
    console.log("error:", error);
  }
});
