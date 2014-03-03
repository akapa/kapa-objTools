define(['underscore'], function (_) {
	
	/**
	 * @namespace objTools
	 * @desc A set of useful methods to work with objects.
	 */
	var objTools = 
	/**
	 * @lends objTools
	 */
	{
		/**
		 * Use an object as a prototype and extend it with the provided properties/methods.
		 * @param {Object | Function} proto - The base object. If an object is given, it will be used as a prototype with `Object.create`. A function will be called with `new`.
		 * @param {Object} extensions - The properties and/or methods to be added.
		 * @returns {Object}
		 */	
		make: function (proto, extensions) {
			var obj = _(proto).isFunction() ? new proto() : Object.create(proto);
			if (extensions) {
				_(obj).extend(extensions);
			}
			return obj;
		},
		/**
		 * Constructs an object from a prototype object and a "constructor" function.
		 * Used to create objects that are "named" in the browser's inspector.
		 * @param {Object} obj - The object to be used as a prototype.
		 * @param {Function} func - The "constructor" function. It will not be called, it is only used to make the object "named".
		 * @returns {Object}
		 */	
		construct: function (obj, func) {
			func.prototype = obj;
			var obj = Object.create(obj, {
				constructor: { value: func }
			});
			return obj;
		}
	};

	return objTools;

});