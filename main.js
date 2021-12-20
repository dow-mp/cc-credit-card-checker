// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

function validateCred(array) {
  let newArray = array.slice();
  for (let i = newArray.length-1; i>=0; i--) {
    let doubleDigit;
    let sub9DIgit;
    if (newArray.length%2===0) {
      if (i%2===0) {
        doubleDigit = newArray[i]*2;
        newArray.splice(i,1,doubleDigit);
        if (doubleDigit>9) {
          sub9DIgit = doubleDigit - 9;
          newArray.splice(i,1,sub9DIgit);
        }
      }
    } else if (newArray.length%2!==0) {
        if (i%2!==0) {
        doubleDigit = newArray[i]*2;
        newArray.splice(i,1,doubleDigit);
        if (doubleDigit>9) {
          sub9DIgit = doubleDigit - 9;
          newArray.splice(i,1,sub9DIgit);
        }
      }
    }
  };
  let sum;
  let prev;
  for (let i = newArray.length; i>=0; i--) {
    sum = (typeof prev === "number") ? (prev + newArray[i]) : newArray[i];
    prev = sum;
  };
  if (sum%10===0) {
    return true
  } else {
    return false
  };
};

let invalidCardsArray = [];
function findInvalidCards(setOfArrays) {
  for (let i=0; i<setOfArrays.length; i++) {
    if (validateCred(setOfArrays[i]) === false) {
      invalidCardsArray.push(setOfArrays[i])
    }
  };
  console.log("invalid cards: ", invalidCardsArray);
  return invalidCardsArray;
};


let companies = {
  amexCompany: [],
  visaCompany: [],
  discoverCompany: [],
  masterCardCompany: [],
  companyUnknown: []
};

function idInvalidCardCompanies(setOfArrays) {
  for (let i=0; i<setOfArrays.length; i++) {
  if (setOfArrays[i][0] === 3) {
      companies.amexCompany.push(setOfArrays[i]);
      } else if (setOfArrays[i][0] === 4) {
        companies.visaCompany.push(setOfArrays[i]);
      } else if (setOfArrays[i][0] === 5) {
      companies.masterCardCompany.push(setOfArrays[i]);
      } else if (setOfArrays[i][0] === 6) {
      companies.discoverCompany.push(setOfArrays[i]);
      } else {
      companies.companyUnknown.push(setOfArrays[i]);
      }
  };
  console.log("list of companies w/ invalid cards: ", companies);
  return companies;
};






//---------------Additional Work with CC Numbers from the Web--------------//


//----Web CC Numbers - Do Fx still work???----//
const webBatch = [4716369951416615, 4539706687069892, 4716204441190432341, 6011686931670145, 6011359592853208, 6011162712181570016, 2720996314003538, 5228261577596128, 5148849662350778, 378709404238347, 370538403621833, 344550903494135, 4026630429393271, 4913117566372173, 4026347449824306];

let digits;
let realDigits;
let fullNumArray = [];
function toDigits(arr) {
  for (i=0; i<arr.length; i++) {
    digits = arr[i].toString().split("");
    realDigits = digits.map(Number);
    fullNumArray.push(realDigits);
  };
  console.log("nested array from web: ", fullNumArray);
  return fullNumArray;
};

toDigits(webBatch);
findInvalidCards(fullNumArray);
idInvalidCardCompanies(invalidCardsArray);


/*console.log("----------Valid---------");
console.log(validateCred(valid1));
console.log(validateCred(valid2));
console.log(validateCred(valid3));
console.log(validateCred(valid4));
console.log(validateCred(valid5));
console.log("----------Invalid-----------");
console.log(validateCred(invalid1));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));
console.log(validateCred(invalid4));
console.log(validateCred(invalid5));
console.log("----------Mystery-----------");
console.log(validateCred(mystery1)); //
console.log(validateCred(mystery2));
console.log(validateCred(mystery3));
console.log(validateCred(mystery4));

findInvalidCards(batch);
idInvalidCardCompanies(invalidCardsArray);*/



