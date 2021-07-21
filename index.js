const firstClass = [
  {
    name: 'Pedro',
    score: 10
  },
  {
    name: 'Alan',
    score: 9.5
  },
  {
    name: 'Diego',
    score: 10
  },
  {
    name: 'Fulano',
    score: 2
  },
  {
    name: 'Henrique',
    score: 10
  }
];

const secondClass = [
  {
    name: 'Mayk',
    score: 10
  },
  {
    name: 'Thor',
    score: 10
  },
  {
    name: 'Loki',
    score: 10
  },
  {
    name: 'Siclano',
    score: 0
  },
  {
    name: 'Thanos',
    score: 5
  }
];

function calculateAverage(students) {
  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].score;
  }

  const average = sum / students.length;

  return average;
}

function sendMessage(average, team) {
  if (average > 5) {
    console.log(`${team} average: ${average}. Congrats!`);
  } else {
    console.log(`${team} average is bad`);
  }
}

function markAsFlunked(student) {
  student.flunked = false;

  if (student.score < 5) {
    student.flunked = true;
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`${student.name} is flunked!`);
  }
}

function studentsFlunked(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student);
  }
}

const firstAverage = calculateAverage(firstClass);
const secondAverage = calculateAverage(secondClass);

sendMessage(firstAverage, 'First Class');
sendMessage(secondAverage, 'Second Class');

studentsFlunked(firstClass);
studentsFlunked(secondClass);
