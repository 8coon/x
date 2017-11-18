module.exports = (...args) => require('child_process').execSync(String.raw(...args), {stdio: 'inherit'});
