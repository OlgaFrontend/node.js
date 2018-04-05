var arr = function(arr) {
	return "in array " + arr.length + " elements";
}

var multiply = function(x,y) {
	return `${x} multiply ${y} equal ${x*y}`;
}

var some_value = 451;

module.exports = {
	arr: arr,
	multiply: multiply,
	some_value: some_value
};
