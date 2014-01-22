'use strict';

var videohub = require(__dirname+'/../index.js'),
	assert = require('chai').assert;

describe('the existance of videohub', function(){
	it('is ok', function(){
		assert.ok(videohub);
		assert.isFunction(videohub.emit);
	});
});


