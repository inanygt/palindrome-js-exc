const palindromes = function(string) {
   let nString = string.toLowerCase().replace(/[^a-z]/g, "");
   if (nString == nString.split("").reverse().join("")) {
      return true;
   } else {
      return false;
   }
};

// Do not edit below this line
module.exports = palindromes;

// npm test palindromes.spec
