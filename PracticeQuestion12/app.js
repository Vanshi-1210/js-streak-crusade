// Qs. For the given start state of an array, change it to final form using splice.
// Start: ['january', 'july', 'march', 'august']
// Final: ['july', 'june', 'march', 'august']

let months=['january','july','march','august'];
months.splice(0,1);
months.splice(1,0,'june');
console.log(months);


// Qs. Return the index of the "javascript" from the given array, if it was reversed.
// Array: ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql']


let languages=['c','c++','html','javascript','python','java','c#','sql'];
languages.reverse();
console.log(languages);
console.log(languages.indexOf('javascript'));