//This file connects to the remote prisma db and gives up the
//abilityh to query it in js

const { Prisma } = require('prisma-binding');

console.log(process.env.PRISMA_ENDPOINT);
console.log(`${process.env.PORT}`)

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false,
});

module.exports = db;
