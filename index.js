var _= require('underscore'); //loading module
//require function works like this first it assumes it is
// core module else assume
//File or Folder else // we access file or folder via ./
//node_module   //our case

var result = _.contains([1,2,3],4); // contain has two arguments ist is array second variable we r looking for that
// array if it is in that array it returns true else false
console.log(result);

