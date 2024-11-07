// execute immich upload -A VRChat <filepath cli arg>

const { exec } = require('child_process');

const args = process.argv.slice(2);
const filepath = args[0];

console.log(`Uploading ${filepath}...`);

exec(`immich upload -A VRChat ${filepath}`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stdout);
});