#!/usr/bin/env node

const yargs = require("yargs");
const async = require('async');
const https = require('https');

const options = yargs
 .usage("Usage: -n <Fib(n) and Prime(n)>")
 .option("n", { alias: "N", describe: "Calculate first N Fibonacci and Prime Numbers in Parallel", type: "integer", demandOption: true })
 .argv;

const cliInput = `${options.N}`;


function fibonacci(k) {

	let first = 0, second = 1, sum

	if(k < 0)
	{
		console.log("Fibonacci of negative numbers is not defined");
		return;
	}

    else if(k == 0 || k == 1)
	{
		console.log('FIB ' + k + ': ' + k)
		return
	}

	console.log('FIB ' + 1 + ': ' + 1);
    for(var i = 2; i <= k; i++)
    {
		sum = first + second;
		console.log('FIB ' + i + ': ' + sum)
		first = second;
		second = sum;
    }
}


function prime(k) {
	if(k < 1)
	{
		console.log("Prime numbers are not defined for K < 1");
		return;
	}

	let prime_status, count = 0;

	for (var i = 2; i <= k; i++) 
	{
		prime_status = false
		for(var j = 2; j <= (i/2); j++)
		{
			if (i % j == 0)
			{
				prime_status = true;
				break;
			}
		}

		if(k != 1 && prime_status == false)
		{
			count += 1;
			console.log('PRIME ' + count + ': ' + i)
		}
    }
}


/* Run fibonacci task and prime task*/
async.parallel([
	function(callback) {
	  setTimeout(function() {
		fibonacci(cliInput);
		callback(null, 'Fibonacci Done');
	  }, 300);
	},
	function(callback) {
	  setTimeout(function() {
		prime(cliInput);
		callback(null, 'Prime Done');
	  }, 200);
	}
  ],

  function(err, results) {
	console.log(results);
});


/*Configure HTTP header and submit a POST request*/
const data = JSON.stringify({
	activity: "Beer consumed",
	title: "Apoorv Palkar",
	icon:"http://foo.com/bar.png",
	body:"Location: [The Funky BuddhaLounge](http://www.thefunkybuddha.com)"
  })

const option = {
	hostname: 'hooks.glip.com',
	port: 443,
	path: '/webhook/38dbfcb8-57c2-49d6-a7c1-44ed88024ee0',
	method: 'POST',
	headers: {
	  'Content-Type': 'application/json',
	  'Content-Length': data.length
	}
  }

const req = https.request(option, res => {
	console.log(`statusCode: ${res.statusCode}`)
  
	res.on('data', d => {
	  process.stdout.write(d)
	})
})
  
  req.on('error', error => {
	console.error(error)
})
  
req.write(data)
req.end()
