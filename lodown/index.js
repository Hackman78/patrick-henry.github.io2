'use strict';

const { identity } = require("lodash");

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * _.identity: Returns the input value unchanged.
 * 
 * @param {any} value: Any value to be returned unchanged.
 * @returns {any} The input value unchanged.

 */
_.identity = function(value){
    return value;
}

module.exports.identity = identity

/**
 * _.typeOf: Returns the type of the input value as a string.
 * 
 * @param {any} value: Any value to determine its type.
 * @returns {string} The type of the input value as a string. Possible types:

 */
_.typeOf = function(value){
    if (Array.isArray(value)){
        return 'array';
    } else if(value === null){
        return 'null';
    } else {
        return typeof value;
    }
}

module.exports.typeOf = typeOf

/**
 * _.first: Returns the first elements of an array based on the specified number.
 * 
 * @param {Array} array: The array from which to extract elements.
 * @param {number} number: The number of elements to return from the beginning of the array.
 * @returns {Array or any} The extracted elements from the array.

 */
_.first = function(array, number){
    if (!Array.isArray(array)){
        return [];
    } else if(this.typeOf(number) !== 'number'){
        return array[0];
    } else if(number < 0){
        return [];
    } else {
        return array.slice(0, number);
    }
}

module.exports.first = first

/**
 * _.last: Returns the last elements of an array based on the specified number.
 * 
 * @param {Array} array: The array from which to extract elements.
 * @param {number} number: The number of elements to return from the end of the array.
 * @returns {Array or any} The extracted elements from the array.

 */
_.last = function(array, number){
    if (!Array.isArray(array)){
        return [];
    } else if(this.typeOf(number) !== 'number'){
        return array[array.length - 1];
    } else if(number < 0){
        return [];
    } else if(number > array.length){
        return array;
    } else {
        return array.slice(array.length - number, array.length);
    }
}


module.exports.last = last


/**
 * _.indexOf: Returns the index of the first occurrence of a value in an array.
 * 
 * @param {Array} array: The array to search for the specified value.
 * @param {any} value: The value to find in the array.
 * @returns {number} The index of the first occurrence of the specified value in the array. Returns -1 if the value is not found.
 * 
 */
_.indexOf = function(array, value){
    if (!array.includes(value)){
        return -1;
    } else {
        for (let i = 0; i < array.length; i++){
            if (array[i] === value){
                return i;
            }
        }
    }
}

module.exports.indexOf = indexOf


/**
 * _.contains: Returns true if an array contains a specified value, otherwise false.
 * 
 * @param {Array} array: The array to check for the specified value.
 * @param {any} value: The value to check for in the array.
 * @returns {boolean} True if the array contains the specified value, false otherwise.

 */
_.contains = function(array, value){
    return value !== undefined ? _.indexOf(array, value) !== -1 : false;
}

module.exports.contains = contains

/**
 * _.each: Iterates over a collection, applying a function to each element or property.
 * 
 * @param {Array or Object} collection: The collection to iterate over.
 * @param {Function} func: The function to apply to each element or property in the collection.
 * 
 */
_.each = function(collection, func){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
    } else {
         for (var key in collection){
            func(collection[key], key, collection);
         }
    }
}


module.exports.each = each


/**
 * _.unique: Returns a new array with duplicates removed.
 * 
 * @param {Array} array: The array from which to remove duplicates.
 * @returns {Array} A new array with unique elements from the input array.
 * 
 */
_.unique = function(array){
    var output = [];
    for (let i = 0; i < array.length; i++){
        if (_.indexOf(output, array[i]) === -1){
            output.push(array[i]);
        }
    }
    return output;
}


module.exports.unique = unique

/**
 * _.filter: Returns a new array of elements for which a specified function returns true.
 * 
 * @param {Array} array: The array to filter.
 * @param {Function} func: The function to apply to each element in the array.
 * @returns {Array} A new array of elements for which the function returns true.
 * 
 */
_.filter = function(array, func){
    var output = [];
    _.each(array, function(element, index, collection){
        if (func(element, index, collection)){
            output.push(element);
        }
    });
    return output;
}


module.exports.filter = filter

/**
 * _.reject: Returns a new array of elements for which a specified function returns false.
 * 
 * @param {Array} array: The array to filter.
 * @param {Function} func: The function to apply to each element in the array.
 * @returns {Array} A new array of elements for which the function returns false.
 */
_.reject = function(array, func){
    var output = [];
    for (let i = 0; i < array.length; i++){
        if (!func(array[i], i, array)){
            output.push(array[i]);
        }
    }
    return output;
}


module.exports.reject = reject

/**
 * _.partition: Partitions an array into two subarrays based on a specified function.
 * 
 * @param {Array} array: The array to partition.
 * @param {Function} func: The function to apply to each element in the array.
 * @returns {Array} An array containing two subarrays:
 *   0) An array that contains all the values for which the function returned something truthy.
 *   1) An array that contains all the values for which the function returned something falsy.

 */
_.partition = function(array, func){
    var output = _.filter(array, func);
    var outputs = _.reject(array, func);
    var result = [];
    result.push(output, outputs);
    return result;
}

module.exports.partition = this.partition


/**
 * _.map: Applies a function to each element or property in a collection and returns a new array of results.
 * 
 * @param {Array or Object} collection: The collection to iterate over.
 * @param {Function} func: The function to apply to each element or property in the collection.
 * @returns {Array} A new array containing the results of applying the function to each element or property.
 */
_.map = function(collection, func){
    var output = [];
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            output.push(func(collection[i], i, collection));
        } 
    } else {
        for (var key in collection){
            output.push(func(collection[key], key, collection));
        }
    }
    return output;
}


module.exports.map = map

/**
 * _.pluck: Returns an array containing the value of a specified property for every element in an array of objects.
 * 
 * @param {Array} array: The array of objects.
 * @param {string} prop: The property to pluck from each object.
 * @returns {Array} An array containing the values of the specified property for each object in the array.
 * 
 * Dependencies:
 *   - Uses _.map() in the implementation.
 * 
 * Examples:
 *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 */
_.pluck = function(array, prop){
    return _.map(array, function(obj){
        return obj[prop];
    });
}

module.exports.pluck = pluck

/**
 * _.every: Checks if a given function returns true for every element in a collection.
 * 
 * @param {Array or Object} collection: The collection to check.
 * @param {Function} func: The function to apply to each element or property.
 * @returns {boolean} True if the function returns true for every element, false otherwise.
 */
_.every = function(collection, func){
    if (Array.isArray(collection)){
        if (func === undefined){
            for (let i = 0; i < collection.length; i++){
                if (!collection[i]){
                    return false;
                }
            }
        } else {
            for (let i = 0; i < collection.length; i++){
                if (!func(collection[i], i, collection)){
                    return false;
                }
            }
        }
    } else {
        for (let key in collection){
            if (typeof func !== 'function'){
                if (!collection[key]){
                    return false;
                }
            }     
            if (!func(collection[key], key, collection)){
                return false;
            } 
        }
    }
    return true;
}


module.exports.every = every

/**
 * _.some: Checks if a given function returns true for at least one element in a collection.
 * 
 * @param {Array or Object} collection: The collection to check.
 * @param {Function} func: The function to apply to each element or property.
 * @returns {boolean} True if the function returns true for at least one element, false otherwise.

 */
_.some = function(collection, func){
    if (Array.isArray(collection)){
        if (func === undefined){
            for (let i = 0; i < collection.length; i++){
                if (collection[i]){
                    return true;
                }
            }
        } else {
            for (let i = 0; i < collection.length; i++){
                if (func(collection[i], i, collection)){
                    return true;
                }
            }
        }
    } else {
        for (let key in collection){
            if (typeof func !== 'function'){
                if (collection[key]){
                    return true;
                }
            }     
            if (func(collection[key], key, collection)){
                return true;
            } 
        }
    }
    return false;
}

module.exports.some = some

/**
 * _.reduce: Reduces an array to a single value using a specified function and optional seed.
 * 
 * @param {Array} array: The array to reduce.
 * @param {Function} func: The function to apply to each element in the array.
 * @param {any} seed: The initial value for the reduction.
 * @returns {any} The result of the final reduction.
 * 
 */
_.reduce = function(array, func, seed){
    var previous;
    if (seed !== undefined){
        previous = seed;
        for (let i = 0; i < array.length; i++) {
            previous = func(previous, array[i], i);
        }
    } else {
        previous = array[0];
        for (let i = 1; i < array.length; i++){
            previous = func(previous, array[i], i);
        }
    }
    return previous;
}

module.exports.reduce = reduce

/**
 * _.extend: Extends an object by copying properties from other objects.
 * 
 * @param {Object} object: The object to extend.
 * @param {...Object} object2: The objects whose properties to copy to the first object.
 * @returns {Object} The updated object after copying properties.
 * 

 */
_.extend = function(object, ...object2){
    Object.assign(object, ...object2);
    return object;
}

module.exports.extend = extend