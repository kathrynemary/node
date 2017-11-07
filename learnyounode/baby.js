process.argv;

var length = (process.argv).length;
var sumTotal = 0;

for (i = 2; i < length; i++) {
	sumTotal += Number(process.argv[i]);
};

console.log(sumTotal);
