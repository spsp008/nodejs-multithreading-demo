const { exec } = require('child_process');

const listCommand = 'ls -lh';
const findCommand = 'find /';
const pwdCommand = 'pwd';

exec(pwdCommand, (error, stdout, stderr) => {

  if (error) {
    console.log(`error: ${error}`);
    return;
  }

  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
});
