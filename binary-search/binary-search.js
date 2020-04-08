'use strict';

// Complete this algo
const binarySearch = (array, target, midpointIndex = Math.floor(array.length / 2)) => {
	let newMidPointIndex = midpointIndex ;

	// [1,2,4,5,8] , 7

	//[5,8]  7

	// [8] index 4 


	// with 3 

	//[1, 2]  
	
	//[2]  midpoint =  1
 

   //root node first 
	if (array[midpointIndex] === target) {
		return true
	} 

	if (midpointIndex < 2) {
		return false
	}

	if (array[midpointIndex] > target) {
		newMidPointIndex = Math.floor(newMidPointIndex / 2)
	} else {
		newMidPointIndex = Math.floor((array.length - (midpointIndex / 2)))
	}






	
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch