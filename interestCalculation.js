var data = [
	{	
	   principal: 2500,
	   time: 1.8
	},
	{	
	   principal: 1000,
	   time: 5
	},
	{	
	   principal: 3000,
	   time: 1
	},
	{	
	   principal: 2000,
	   time: 3
	}
];

// function to perform calculations
function calculations(principal,time,rate) {
	var interest = principal * rate * time/100;
	return{principal,time,rate,interest};
}

// function to put individual objects into array
function interestCalculator(arr) {

	var rate; interestData = [];
	arr.filter( data => {
		

		if (data.principal >= 2500 && data.time > 1 && data.time < 3) {
			rate = 3;
			interestData.push(calculations(data.principal,data.time,rate));
		}
		else if (data.principal >= 2500 && data.time >= 3) {
			rate = 4;
			interestData.push(calculations(data.principal,data.time,rate));
		}
		else if (data.principal < 2500 || data.time <= 1) {
			rate = 2;
			interestData.push(calculations(data.principal,data.time,rate));
		}
		else {
			rate = 1;
			interestData.push(calculations(data.principal,data.time,rate));
		}
	})
	console.log(interestData);

	return interestData;
}

interestCalculator(data);
