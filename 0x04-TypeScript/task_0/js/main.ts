// Definition the interfaces for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Elvis",
  lastName: "kimutai",
  age: 20,
  location: "Eldoret",
};

const student2: Student = {
  firstName: "faisal",
  lastName: "Adan",
  age: 22,
  location: "Nairobi",
};

// Create an array  containing the two variables
const studentsList: Student[] = [student1, student2];

// Using Vanilla JavaScript, render a table and append rows for each student
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
