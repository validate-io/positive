/**
*
*	VALIDATE: positive
*
*
*	DESCRIPTION:
*		- Validates if a value is a positive number.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isNumber = require( 'validate.io-number' );


// ISPOSITIVE //

/**
* FUNCTION: isPositive( value )
*	Validates if a value is a positive number.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a positive number
*/
function isPositive( value ) {
	return isNumber( value ) && value > 0;
} // end FUNCTION isPositive()


// EXPORTS //

module.exports = isPositive;
