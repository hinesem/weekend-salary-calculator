console.log(`hello world`);
// local storage https://www.youtube.com/watch?v=AUOzvFzdIk4 

function submitSalary(event) {
    event.preventDefault();
    let fName = document.querySelector('#fNameInput').value;
    let lName = document.querySelector('#lNameInput').value;
    let idNum = document.querySelector('#idNumInput').value;
    let title = document.querySelector('#titleInput').value;
    let annualSalary = document.querySelector('#anualSalaryInput').value;
    let salaryTable = document.querySelector('#salaryData');
    salaryTable.innerHTML += `
        <tr>
            <td>${fName}</td>
            <td>${lName}</td>
            <td>${idNum}</td>
            <td>${title}</td>
            <td>${annualSalary}</td>
        </tr>
    `;
}