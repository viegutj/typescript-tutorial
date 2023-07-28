var character = 'luigi';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log('inputs', inputs);
inputs.forEach(function (input) {
    console.log('input', input);
});
// NOTE: nothing will run in browser, the browser doesn't know TypeScript (.ts)
// NOTE: don't worry about variable declarations being repeated! The browser will only read the .js file.
