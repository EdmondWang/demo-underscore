'use strict';

const _ = require('underscore');

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
let arr = [];
let chunked = _.chunk(arr, 3);

console.log(chunked);