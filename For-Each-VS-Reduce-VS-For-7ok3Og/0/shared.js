const arr = [];

for (let i = 0; i < 10000; i++) {
    arr.push({
        fn: function() {
          return { something: 'something'}
        }
    });
}
