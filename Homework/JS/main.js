
function randomPick(array) {
	var randomNum = Math.floor(Math.random() * array.length);
	return array[randomNum];
}

function rot13Encoder (undecodedString) {

	var storeVal = 0;
	var decodedName = '';
	var lowerMin = 'a'.charCodeAt();
	var lowerMiddle = 'm'.charCodeAt();
	var lowerMax = 'z'.charCodeAt();
	var upperMin = 'A'.charCodeAt();
	var upperMiddle = 'M'.charCodeAt();
	var upperMax = 'Z'.charCodeAt();
	console.log

	for(var i = 0; i < undecodedString.length; i++) {

		storeVal = undecodedString.charCodeAt(i);

		if (storeVal >= lowerMin && storeVal <= lowerMax) {

			if (storeVal <= lowerMiddle ) {
				storeVal +=13;
				decodedName = decodedName + String.fromCharCode(storeVal);
			} else {
				storeVal -=13;
				decodedName = decodedName + String.fromCharCode(storeVal);
			}
		}

		else if (storeVal >= upperMin && storeVal <= upperMax) {

			if (storeVal <= upperMiddle) {
				storeVal += 13;
				decodedName = decodedName + String.fromCharCode(storeVal);
			} else {
				storeVal -=13;
				decodedName = decodedName + String.fromCharCode(storeVal);
			}
		}
		
	}
	return decodedName;
}

function rot13Decoder (encodedString) {

	var storeVal = 0;
	var codedString = '';
	var lowerMin = 'a'.charCodeAt();
	var lowerMiddle = 'm'.charCodeAt();
	var lowerMax = 'z'.charCodeAt();
	var upperMin = 'A'.charCodeAt();
	var upperMiddle = 'M'.charCodeAt();
	var upperMax = 'Z'.charCodeAt();


	for(var i = 0; i < encodedString.length; i++) {

		storeVal = encodedString.charCodeAt(i);

		if (storeVal >= lowerMin && storeVal <= lowerMax) {

			if (storeVal <= lowerMiddle ) {
				storeVal +=13;
				codedString = codedString + String.fromCharCode(storeVal);
			} else {
				storeVal -=13;
				codedString = codedString + String.fromCharCode(storeVal);
			}
		}

		else if (storeVal >= upperMin && storeVal <= upperMax) {

			if (storeVal <= upperMiddle) {
				storeVal += 13;
				codedString = codedString + String.fromCharCode(storeVal);
			} else {
				storeVal -=13;
				codedString = codedString + String.fromCharCode(storeVal);
			}
		}
		
	}
	return codedString;
}

//else if ((storeVal > maxLowercaseValue) && (storeVal > maxUppercaseValue)) {
			//storeVal -=26;

// console.log(name);
// var myArray = [1,true,"string"];

// var anotherArray = [1,2,3,4];
// concat will cocatonate arrays

// var finalArray = myArray.concat(anotherArray);

// var aIndex = finalArray.indexOf('a');
// console.log(finalArray[1].charAt(5));
// console.log(aIndex);

// var newArray = ['a', 'r', 'f' ,'we'];
// console.log(newArray);
// console.log(newArray.join('-')); // .join =  convert array into a string then add the argument inbetween each element and convert it to string 

// var mysteryValue  = finalArray.pop(); //pop off the last element of an array

// push adds to the end of an array. Push will nest an array into an array, not add it like concat will.
// reference nested elements in the array with chain brackets [] [] []
// gets the range without altering the original array aka slice(0, 5);
// splice = start position and then number of things to cut out (remove) from the array. 
// shift = remove from front of array
// unshift = takes a value like ('Ryan'); adds to the front of an array. Can take multiple values.





// $( document ).ready(function() {

// 	$('#score-box').append(numberGame());
	
// });