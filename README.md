
# Calculate/Print Fib(N) and Prime(N)

This is a Node.js service that aims to print the first N fibonacci
numbers and prime numbers in order of occurence. 

This service also posts a basic message to a RingCentral endpoint.




## Deployment (Ubuntu/Debian)

Verify Installation of Node.js/NPM (Node Packager Manager)
```bash
  sudo apt update
  sudo apt install nodejs npm
  node -v
```

Install NPM Package Dependencies Below
```bash
   npm install yargs@13.2
   npm install async
```

Navigate to Project Bin and Utilize Service

+ Parameter is an integer of which Fib(N) and Prime(N) is shown
```bash
   cd calculate-api/bin
   node . -n <parameter>
```

+ Examples 
```bash
   node . -n 10   /* Fib(10) and Prime(10) is printed */
   node . -n 4    /* Fib(4) and Prime(4) is printed */
```
