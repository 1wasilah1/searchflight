#!/usr/bin/env node

const search = require('commander');

// import function to find a route
const find = require('../lib/find');

search
.option('from, cityfrom <citycodefrom>', 'from')
.option('to, cityto <citycodeto>', 'to')
.option('by, orderby <order>', 'order')
.action(
          citycodefrom => find(citycodefrom),
          citycodeto => find(citycodeto),
          order => find(order)
        );

// allow commander to parse `process.argv`
search.parse(process.argv);
