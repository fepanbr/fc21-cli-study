
const fs =require('fs');
const { program } = require('commander');
program.version('0.0.1');


program.command('list-bugs')
.description('List issues with bug label')
.action(async () => {
  console.log('List bugs!')
})

program
.command('check-prs')
.description('Check pull requrest status')
.action( async () => {
  console.log('Check PRs')
})

program.parseAsync();
// node src/main.js 

// console.log(process.argv);