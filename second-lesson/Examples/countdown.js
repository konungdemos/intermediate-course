const count = (time) => {
	console.log(time);
	return count(time - 1);
}

count(10);