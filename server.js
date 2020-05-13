const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema.js");
const app = express();

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}))
app.listen(8081, () => {
    console.log("Server is running on port 8081")
})