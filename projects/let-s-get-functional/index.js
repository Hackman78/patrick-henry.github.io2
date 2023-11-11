// #!/usr/bin/env node

'use strict';

const { rest } = require('lodash');
var customers = require('./data/customers.json');
var _ = require('underbar');
const object = require('underbar/object');

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

function averageBalance(data) {  
    // Extract numeric values from the 'balance' property and calculate the average
    const totalBalance = data.reduce((sum, customer) => {
      // Extract numeric value from the 'balance' property
      const balance = parseFloat(customer.balance.replace(/[^\d.-]/g, ''));
  
      // Check if the extracted balance is a valid number
      if (!isNaN(balance)) {
        return sum + balance;
      } else {
        throw new Error(`Invalid balance value for customer ${customer.name}`);
      }
    }, 0);
  
    const avgBalance = totalBalance / data.length;
  
    return avgBalance;
  }
  
  
  console.log(averageBalance(customers))

var firstLetterCount = function(array, letter){
    return array.filter(customer => customer.name.charAt(0).toLowerCase() === letter.toLowerCase()).length
};

var friendFirstLetterCount = function(array, customer, letter){
    var index = array.findIndex(cust => cust.name === customer)
    return array[index].friends.filter(friend => friend.name.charAt(0).toLowerCase() === letter.toLowerCase()).length
};

var friendsCount = function(array, name){
    var result = []
    for (let i = 0; i < array.length; i++){
        if (array[i].friends.filter(friend => friend.name === name).length > 0){
            result.push(array[i].name)
        }
    }
    return result
};
//console.log(friendsCount(customers, 'Olga Newton'))
var topThreeTags = function(array){
  var result = {}
  var results = []
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (!Object.keys(result).includes(array[i].tags[j])){
                result[array[i].tags[j]] = 1
            } else if (Object.keys(result).includes(array[i].tags[j])){
                result[array[i].tags[j]] += 1
            }   
        }
    }
    for (let key in result){
        if (result[key] === 3){
            results.push(key)
        }
    }
    return results
};

//console.log(topThreeTags(customers))
var genderCount = function(array){
    var result = {}
    for (let i = 0; i < array.length; i++){
        if (!Object.keys(result).includes(array[i].gender)){
            result[array[i].gender] = 1
        } else{
            result[array[i].gender] += 1
        }
    }
    return result
};

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
