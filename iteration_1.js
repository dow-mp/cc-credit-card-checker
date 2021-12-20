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

//----------****-----ITERATION 1-----****----------

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

//console.log(mystery1.length);
  
  function validateCred(array) {
    let arrayChunks = [];
    //DEALING WITH EVEN ARRAYS (still starting with empty array though...why?)
    if (array.length % 2 === 0) {
      for (let i=array.length; i>=0; i-=2) {
        let arrayChunk = array.slice(i,i+2);
        arrayChunks.push(arrayChunk);
    };
    //console.log(arrayChunks);
    //return arrayChunks;
    } else {
      //DEALING WITH ODD ARRAYS
      let arrayInitChunk = array.slice(array.length-1);
      arrayChunks.push(arrayInitChunk);
      let tempArray = array.slice(0,array.length-1);
      //console.log(tempArray);
      //-----CHECK CODE BELOW, maybe where empty array problem is originating from
      for (let i = tempArray.length; i>=0; i-=2) {
        let arrayAdtlChunk = tempArray.slice(i,i+2);
        //console.log(arrayInitChunk);
        arrayChunks.push(arrayAdtlChunk);
      };
      //console.log(arrayChunks);
      //return arrayChunks;
    };
    let checkDigit = arrayChunks.splice(0,1);
    console.log(checkDigit);
    for (let i=0; i<=arrayChunks.length-1; i++) {
      let doubled = arrayChunks[i][0] * 2;
      arrayChunks[i].splice(0,1,doubled);
    };
    //console.log(arrayChunks);
    for (let i=0; i<=arrayChunks.length-1; i++) {
      if (arrayChunks[i][0] > 9) {
        let sub9 = arrayChunks[i][0] - 9;
        arrayChunks[i].splice(0,1,sub9);
      }
    };
    //console.log(arrayChunks);
    arrayChunks.splice(0,1);
    console.log(arrayChunks);
    let prevValue;
    let nestTotal;
    let sum; 
    for (i=0; i<=arrayChunks.length-1; i++) {
      nestTotal = arrayChunks[i][0] + arrayChunks[i][1];
      sum = (typeof prevValue === "number") ? (prevValue + nestTotal) : nestTotal;
      prevValue = sum;
      //console.log(sum);
    };
    //console.log(sum);
    let arrayTotal = Number(sum) + Number(checkDigit);
    console.log(arrayTotal);
    if (arrayTotal % 10 === 0) {
      return true
    } else {
      return false
    };
};
//console.log(mystery3.length);
let test = validateCred(invalid5);
console.log(test);


//-----12/6/2021 2:30PM: Discovered that testing with valid arrays is pulling false and one invalid array pulled true. Something wrong inside code, possibly with adding the digits correctly. Work on correcting at a later date.


let invalidCardsArray = [];
function findInvalidCards(setOfArrays) {
  for (let i=0; i<setOfArrays.length; i++) {
    if (validateCred(setOfArrays[i]) === false) {
      invalidCardsArray.push(setOfArrays[i])
    }
  };
  //console.log(invalidCardsArray);
  return invalidCardsArray;
};

findInvalidCards(batch);


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
  //console.log(companies);
  return companies;
};

idInvalidCardCompanies(invalidCardsArray);




//---------------Additional Work with CC Numbers from the Web--------------//


//----Web CC Numbers - Do Fx still work???----//
const webBatch = [4916093770408904,4539783859343348,4024007146879851079,6011420371447743,6011087944628602,6011744372072193795,4913782520843070,4913074642193893,4175005133088179,5562606577377719,5402731807510535,2720995059704219,374457083643890,377783868819141,370048984850900];

let digits;
let realDigits;
let fullNumArray = [];
function toDigits(arr) {
  for (i=0; i<arr.length; i++) {
    digits = arr[i].toString().split("");
    realDigits = digits.map(Number);
    fullNumArray.push(realDigits);
  };
  console.log(fullNumArray);
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
console.log(validateCred(mystery5));*/