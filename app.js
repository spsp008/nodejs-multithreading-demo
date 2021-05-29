const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

const numCpu = os.cpus().length;
console.log('num of cpu:', numCpu);

app.get('/', (req, res) => {
  for (let i = 0; i < 1E8; i++) {
    // some long
  }
  res.send(`Ok...${process.pid}`);
  // cluster.worker.kill();
});

// if (cluster.isMaster) {
//   for (let i = 0; i < numCpu; i++) {
//     cluster.fork();
//   }
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker: ${worker.process.pid} died.`);
//     cluster.fork();
//   })
// } else {
//   app.listen(3000, () => console.log(`Server ${process.pid} running ✅ on port 3000...`));
// }

app.listen(3000, () => console.log(`Server ${process.pid} running ✅ on port 3000...`));
