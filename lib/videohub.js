'use strict';

var events = require('events'),
	net = require('net'),
	PORT = 9990,
	_connected,
	connection;

exports.__proto__ = Object.create(new events.EventEmitter);

/**
 *	Connect to the hub
 *	@method connect
 *	@param {String} ipAddress
 */
exports.connect = function(ipAddress) {
	if (_connected) return connection;

	connection = net.connect({
		host: ipAddress,
		port: PORT
	});

	connection.on('error', function(e){
		exports.emit('error', e);
	});

	conneciton.on('connect', function(){
		exports.emit('connection', null);
	});

	_connected = true;
};

/**
 *	Route an input
 *	@method route
 *	@param {Number} output
 *	@param {Number} input
 *	@param {Function} cb
 */
exports.route = function(output, input, cb) {

};

/**
 *	Set or get an outputLabel
 *	@method outputLabel
 *	@param {Number} output
 *	@param {String} label
 *	@param {Function} cb
 */
exports.outputLabel = function(output, label, cb) {

};

/**
 *	Set or get an inputLabel
 *	@method inputLabel
 *	@param {Number} input
 *	@param {String} label
 *	@param {Function} cb
 */
exports.inputLabel = function(input, label, cb) {

};
