var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

// new Date().getTime()

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment();
// console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));