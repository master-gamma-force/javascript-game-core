const templeteCodeFilter =
  `const leonidas = {
  name: 'Leondias',
  skill: 'JavaScript',
};
const nicole = {
  name: 'Nicole',
  skill: 'Python',
};
const david = {
  name: 'Nico',
  skill: 'Python',
};

const employees = [];

const sabePython = (employe) => {
  
};

console.log();`;

const testFilter = (result) => {
  return result === [{
    name: 'Nicole',
    skill: 'Python',
  },
  {
    name: 'Nico',
    skill: 'Python',
  }];
};

module.exports = {
  templeteCodeFilter,
  testFilter,
};
