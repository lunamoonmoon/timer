let input = process.argv.slice(2);

input.forEach((value) => {
  if(value > 0 && !isNaN(value)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 100 * value);
  }
});
