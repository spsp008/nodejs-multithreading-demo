function longComputation() {
  let sum = 0;
  for (let i = 0; i < 1E9; i++) {
    sum += i;
  }
  return sum;
}

process.on('message', (msg) => {
  if (msg === 'start') {
    const sum = longComputation();
    process.send(sum);
  }
});
