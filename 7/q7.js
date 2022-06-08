arr = [
  { name: "James", age: 9, country: "United States" },
  { name: "Rony", age: 31, country: "United Kingdom" },
  { name: "Peter", age: 58, country: "Canada" },
  { name: "Marks", age: 20, country: "Spain" },
];


function checkAge(table) {

    const rowNum = document.getElementsByTagName('tr');
    const rows = document.querySelectorAll('tr');
    for (let i = 1; i < rowNum.length; i++) {
        let age = rows[i].querySelectorAll('td')[1].innerHTML;
        if (age < 10) {
            rows[i].style.backgroundColor = 'yellow';
        }else if (age >= 10 && age < 40) {
            rows[i].style.backgroundColor = 'green';
        }else if (age >= 40 && age < 80) {
            rows[i].style.backgroundColor = 'red';
        }else {
            rows[i].style.backgroundColor = 'blue';
        }
    }
}

function plotTable(arr) {
    const body = document.getElementsByTagName("body")[0];
    headers = Object.keys(arr[0]);
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");
    headers.forEach((headerText) => {
        let header = document.createElement("th");
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    console.log(table);
    arr.forEach((emp) => {
        let row = document.createElement("tr");
        Object.values(emp).forEach((text) => {
        let cell = document.createElement("td");
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
        });
        table.appendChild(row);
    });
    
    let styleSheet = document.createElement("style");
    styleSheet.innerHTML = "th, td{border: 1px solid black;} table{width:30rem; margin:10rem 0 0 35rem;";
    document.body.appendChild(styleSheet);

    body.appendChild(table);
    checkAge(table);
}

plotTable(arr);
