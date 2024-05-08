function myFunction(...rest) {
    console.log(rest);
}

myFunction(9, 'iqra', 'minaaz');
myFunction([2, 3, 4]);
myFunction({ key: 'value' });
myFunction(function() { console.log('I am a function'); });


