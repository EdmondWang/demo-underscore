'use strict';
const _ = require('underscore');

console.log(null == undefined);

let flat = {};

/* let flat = {
    bedroom: {
        metadata: {
            area: 16
        }
    }
}; */

try {
    console.log(flat['bedroom']['metadata']['area']);
} catch (e) {
    console.log(e);
}

console.log(_.property(flat, ['bedroom', 'metadata'])('area'));