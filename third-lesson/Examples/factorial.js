const fact = (n) => {
	if (n === 1) {
		return 1;
	} else {
		return n * fact(n - 1);
	}
}

// const fact = (n) => {
// 	let result = 1;
// 	for (let i = n; i > 0; i--) {
// 		result *= i;
// 	}
// 	return result;
// }
 
console.log(fact(5));