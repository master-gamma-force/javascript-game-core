const leonidas = {
  name: 'Leondias',
  skill: 'JavaScript',
};
const nicole = {
  name: 'Nicole',
  skill: 'Python',
};
const richard = {
  name: 'Richard',
  skill: 'Python',
};
const angela = {
  name: 'Angela',
  skill: 'JavaScript',
};

const employees = [leonidas, nicole, richard, angela];

const knowPython = () => employees.filter((employee) => employee.skill === 'Python');

const sabePython = knowPython();

console.log(sabePython);
