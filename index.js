const readLineSync = require('readline-sync');

const utilityOption = parseInt(readLineSync.question('Welcome to String hashing Utility. \nWhich utility function would you like to use?\n1. md5\n2. sha-1\n3. sha-256\n4. sha-512\nEnter your choice:'));

const hashingType = ['md5','sha1','sha256','sha512'];

function convertToHash(str,hashType){
  const crypto = require('crypto');
  return crypto.createHash(hashType).update(str).digest('hex');
}
function takeInputString(choice){
  const string = readLineSync.question("Enter the string you want to hash. \n");
  console.log("Hashed String is: " + convertToHash(string,hashingType[choice]));  
}


switch(utilityOption){
case 1:{
  takeInputString(utilityOption-1);
  break;
}
case 2:{
  takeInputString(utilityOption-1);
  break;
}
case 3:{
  takeInputString(utilityOption-1);
  break;
}
case 4:{
  takeInputString(utilityOption-1);
  break;
}
default:{
  console.log("Invalid Input");  
  break;
}
}




