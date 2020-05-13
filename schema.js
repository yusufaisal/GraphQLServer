const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require("graphql");

// Harcoded Data
const customers = [
    {id:'1', name:'John Apple Seed', email: 'john@apple.com', age:35},
    {id:'2', name:'Seed', email: 'seed@apple.com', age:22},
    {id:'3', name:'Tim Cook', email: 'tim@apple.com', age:42},
]

// Customer Type
const CustomerType = new GraphQLObjectType({
    name:"Customer",
    fields:() => ({
        id: {type:GraphQLString},
        name: {type:GraphQLString},
        email: {type:GraphQLString},
        age: {type:GraphQLInt}
    })
})

// Root Query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields : {
        customer: {
            type:CustomerType,
            args:{
                id:{type: GraphQLString}
            },
            resolve(parentValue, args){
                for (let i = 0; i < customers.length; i++){
                    if (customers[i].id == args.id) {
                        return customers[i];
                    }
                }
            }
        },
        customers: {
            type: new GraphQLList(CustomerType),
            resolve(parentValue, args){
                return customers;
            }
        }

    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});