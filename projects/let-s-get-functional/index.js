// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./patrick-henry.github.io2/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males 
      males =  _.filter(array, obj => obj.gender === 'male')
    return males.length
};

var femaleCount = function(array) {
    var females =  _.reduce(array, ((acc, curr) => {
        if (curr.gender === 'female'){
            acc += 1
        }
        return acc
        }), 0)
    return females
};

var oldestCustomer = function(array){
    return _.reduce(array, (acc, curr) => acc.age > curr.age? acc: curr)['name']
};

var youngestCustomer = function(array){
    return _.reduce(array, (acc, curr) => acc.age < curr.age? acc: curr)['name']
};;

var averageBalance = function(array){
    var balance = _.reduce(array, (curr, acc) => {
        acc += curr.balance
        return acc
    }, 0) / array.length
    return balance 
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
