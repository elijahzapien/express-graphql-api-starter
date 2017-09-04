const fs = require('fs');

module.exports = fs.open('.env', 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
        return console.log('Setup: File already exists');
    } else {
        return console.log(`Setup error (1): ${err}`);
    }
  }

  fs.readFile('.env.starter', 'utf8', (err, data) => {
    if (err) return console.log(`Setup error (2): ${err}`); 

    fs.write(fd, data, 'utf8', (err) => {
      if (err) return console.log(`Setup error (3): ${err}`);

      return console.log('.env file successfully created');
    });
  });
});

