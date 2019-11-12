const Duvis = {
    name : 'Duvis' ,
    age : 25 ,
    gender : 'men'
}

const resolvers = {
    Query: {
       person: () => Duvis,
    },
}


export default resolvers;