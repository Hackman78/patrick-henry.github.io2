/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(array, name){
    for (let i = 0; i < array.length; i++){
    if (array[i].name === name){
        return array[array.findIndex(animal => animal['name'] === name)]
    }
}
    return null
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(array, name, replacement){
    for (let i = 0; i < array.length; i++){
        if (array[i].name === name){
             array[array.findIndex(animal => animal['name'] === name)] = replacement
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(array, name){
    for (let i = 0; i < array.length; i++){
        if (array[i].name === name){
             array.splice(array[array.findIndex(animal => animal['name'] === name)])
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(array, object){
   if (object.name.length > 0 && object.species.length > 0 && array.filter(animal => animal.name === object.name ).length === 0){
    array.push(object)
   }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
