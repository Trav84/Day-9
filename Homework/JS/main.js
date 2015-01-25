$( document ).ready(function() {

//Function 1
function randomPick(array) {

	//data validation

	if (array.constructor !== Array) {
		throw 'You did not enter an array.';
	}
	//function

	var randomNum = Math.floor(Math.random() * array.length);
	return array[randomNum];
}

$('#f1').click(function() {
	var textInput = $('#enter1').val();
	textArray = textInput.split(',');
	console.log(textArray);
	$('#result1').val(randomPick(textArray));
});


//Function 2
function rot13Encoder (undecodedString) {

	//variable declaration

	var storeVal = 0;
	var decodedName = '';
	var lowerMin = 'a'.charCodeAt();
	var lowerMiddle = 'm'.charCodeAt();
	var lowerMax = 'z'.charCodeAt();
	var upperMin = 'A'.charCodeAt();
	var upperMiddle = 'M'.charCodeAt();
	var upperMax = 'Z'.charCodeAt();

	//data validation

	if (typeof(undecodedString) != 'string') {
		throw 'You did not enter a string.';
	} 

	for (var y =0; y < undecodedString.length; y++) {

		if ((undecodedString[y].charCodeAt() > lowerMax) || (undecodedString[y].charCodeAt() < upperMin)) {
			throw 'You can only encode letters from a to z (or uppercase A to Z)';
		}
	}

	//function

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

$('#f2').click(function() {
	var textInput = $('#enter2').val();
	$('#result2').val(rot13Encoder(textInput));
});

//Function 3
function rot13Decoder (encodedString) {

	//variable declartions

	var storeVal = 0;
	var codedString = '';
	var lowerMin = 'a'.charCodeAt();
	var lowerMiddle = 'm'.charCodeAt();
	var lowerMax = 'z'.charCodeAt();
	var upperMin = 'A'.charCodeAt();
	var upperMiddle = 'M'.charCodeAt();
	var upperMax = 'Z'.charCodeAt();

	//data validation

	if (typeof(encodedString) != 'string') {
		throw 'You did not enter a string.';
	} 

	for (var y =0; y < encodedString.length; y++) {

		if ((encodedString[y].charCodeAt() > lowerMax) || (encodedString[y].charCodeAt() < upperMin)) {
			throw 'You can only encode letters from a to z (or uppercase A to Z)';
		}
	}

	//function

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

$('#f3').click(function() {
	var textInput = $('#enter3').val();
	$('#result3').val(rot13Decoder(textInput));
});

//Function 4
function rotN (unencrypted, n) {

	if(unencrypted === undefined) {
		throw 'You must enter string to encrypt.';
	}

	if(typeof unencrypted !== 'string') {
		throw 'The first argument must be a string';
	}

	for(var i=0; i<unencrypted.length; i++) {
		var targetCharacter = unencrypted.charAt(i);
		targetCharacter = targetCharacter.toLowerCase();
		var targetCharacterCode = targetCharacter.charCodeAt(0);
		if(targetCharacterCode < 97 || targetCharacterCode > 122) {
			throw 'The unencrypted string can only have a-z or A-Z';
		}
	}

	var encrypted = '';

	for(var i=0; i<unencrypted.length; i++) {
		var charCode = unencrypted.charCodeAt(i);
		if(charCode >= 65 && charCode <= 90) {

			var translatedCharcode = charCode - 65;
			translatedCharcode += n;
			translatedCharcode %= 26;

			encrypted += String.fromCharCode(translatedCharcode+65);
		}

		else if(charCode >= 97 && charCode <= 122) {

			var translatedCharcode = charCode - 97;
			translatedCharcode += n;
			translatedCharcode %= 26;

			encrypted += String.fromCharCode(translatedCharcode+97);
		}
	}



	return encrypted; 
}

$('#f4').click(function() {
	var textInput = $('#enter4').val();
	var numInput = $('#enter4-1').val();
	numInput = parseInt(numInput);
	$('#result4').val(rotN(textInput,numInput));
});


//Function 5
function randomStudent (studentArray) {

	//variable declaration

	var randomPair = [];
	var resultArray = [];
	var randomNum = 0;

	//data validation

	if (typeof studentArray != 'object') {
		throw 'You did not enter an array.';
	}


	//function 
	for(var i = 0; i <= studentArray.length; i++) {

		var randomPair = [];
		randomNum = Math.floor(Math.random() * studentArray.length);

		// while (randomNum == (studentArray.length)-1 && studentArray.length != 1) {	
		// 	randomNum = Math.floor(Math.random() * studentArray.length);
		// }
		randomPair.push('[');
		randomPair.push(studentArray.splice(randomNum, 1));
		randomNum = Math.floor(Math.random() * studentArray.length);
		randomPair.push(studentArray.splice(randomNum, 1));
		randomPair.push(']');
		resultArray[i] = randomPair;
	
	}

	return resultArray;

}

$('#f5').click(function() {
	var textInput = $('#enter5').val();
	textArray = textInput.split(',');
	$('#result5').val(randomStudent(textArray));
});

//Function 6
function dashString(string) {

	//variable declaration

	var arrayOfString = string.split('');

	//data validation

	if (typeof string != 'string') {
		throw 'You did not enter an string.';
	}

	//function 

	return arrayOfString.join('-');

}


$('#f6').click(function() {
	var textInput = $('#enter6').val();
	$('#result6').val(dashString(textInput));
});
//Function 7
function noJoinString(string) {

	//variable declaration

	var newString = '';

	//data validation

	if (typeof string != 'string') {
		throw 'You did not enter an string.';
	}

	//function

	for(var i =0; i < string.length; i++) {
        newString += string.slice(i, i+1)+"-";
	}
	newString = newString.slice(0,-1);
	return newString;
}

$('#f7').click(function() {
	var textInput = $('#enter7').val();
	$('#result7').val(dashString(textInput));
});

//Function 8
function noJoin2Strings(string1, string2) {

	//variable declaration

	var combinedString = string1 + string2;
	console.log(combinedString);
	var newString = '';

	//data validation

	if (typeof string1 != 'string' || typeof string2 != 'string') {
		throw 'You did not enter an string.';
	}

	//function

	for(var i =0; i < combinedString.length; i++) {
        newString += combinedString.slice(i, i+1)+"-";
	}
	newString = newString.slice(0,-1);
	return newString;
}

$('#f8').click(function() {
	var textInput = $('#enter8').val();
	var textInput2 = $('#enter8-1').val();

	$('#result8').val(noJoin2Strings(textInput,textInput2));
});


});
