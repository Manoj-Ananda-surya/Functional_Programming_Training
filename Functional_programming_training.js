const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const names = users.map(user => user.name);
  console.log(names);

  const usersUnder30 = users.filter(user => user.age < 30);
  console.log(usersUnder30); 

  const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
  console.log(sumOfAges);
  
  const otherString = "How are-you.today";
  const byDigits = otherString.split(/[.,-\s]/);
  console.log(byDigits);

const first = [1, 2, 3];
const second = [4, 5];
console.log(first.concat(second));

const numbers = [1, 5, 8, 0, 10, 11];
console.log(numbers.every(i=>i<10));
console.log(numbers.some(i=>i<10));


  