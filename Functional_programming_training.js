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
