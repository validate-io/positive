'use strict';

var isPositive = require( './../lib' );

console.log( isPositive( Math.PI ) );
// returns true

console.log( isPositive( 0 ) );
// returns false

console.log( isPositive( -1 ) );
// returns false
