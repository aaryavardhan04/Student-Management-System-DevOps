const studentForm = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');
const recordCount = document.getElementById('recordCount');

let students = [];

function updateTable() {
  studentList.innerHTML = '';
  students.forEach((student, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.roll}</td>
      <td>${student.name}</td>
      <td>${student.course}</td>
      <td><button class="btn-delete" onclick="deleteStudent(${index})">Delete</button></td>
    `;
    studentList.appendChild(row);
  });
  recordCount.textContent = students.length;
}

studentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const roll = document.getElementById('roll').value.trim();
  const course = document.getElementById('course').value.trim();

  if (students.some(s => s.roll === roll)) {
    alert('A student with this Roll Number already exists!');
    return;
  }

  students.push({ name, roll, course });
  studentForm.reset();
  updateTable();
});

window.deleteStudent = function(index) {
  students.splice(index, 1);
  updateTable();
};