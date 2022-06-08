const delBtn = document.querySelector('.del-btn');
delBtn.addEventListener('click', deleteTr);

function deleteTr(e) {
    const table = document.querySelector('table');
    let tr = table.querySelectorAll('tr');
    for (let i = 1; i < 6; i++) 
    tr[i].remove();

    setTimeout(() => {alert('5 rows deleted'); }, 100);
}


const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', addTr);

function addTr(e) {
    var value;
    let body = document.getElementsByTagName('tbody')[0];
    let NumOfCols = body.querySelector('tr').querySelectorAll('td').length;

    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr');
        
        for(let j = 0; j < NumOfCols; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);

            if(j != 0) {
                td.innerHTML = 'Cell';
                td.setAttribute('class', 'border-b-2 px-8 py-4');
            }else{
                let randNum = Math.floor(Math.random() * 9) + 1; //1 to 10
                value = body.children[randNum].querySelector('td').textContent.toLowerCase();
                td.innerHTML = `${value}`;
                td.setAttribute('class', 'border-b-2 px-8 py-4 font-bold');
            }
        }
        tr.setAttribute('class', 'bg-'+value);
        if (value === 'dark') {
            let classAttr = tr.getAttribute('class');
            classAttr += ' text-white';
            tr.setAttribute('class', `${classAttr}`)
        }
        body.appendChild(tr);
    }
}


function checkColor(color) {
    switch(color) {
        case 'default':
            return 'bg-default';
         case 'primary':
             return 'bg-primary';
         case 'secondary':
             return 'bg-secondary';
         case 'success':
             return 'bg-success';
         case 'danger':
             return 'bg-danger';
         case 'warning':
             return 'bg-warning';
         case 'info':
             return 'bg-info';
         case 'light':
             return 'bg-light';
         case 'dark':
             return 'bg-dark'
    }
}

function setThColors() {
    
    let body = document.getElementsByTagName('tbody')[0];

    body.querySelectorAll('tr').forEach((tr) => {
       const td = tr.querySelector('td');
       let color = td.textContent.toLowerCase();
    //    let bgColor = `bg-${color}`
    //    tr.setAttribute('class', `${bgColor}`);
        let bgColor = checkColor(color);
        tr.setAttribute('class', `${bgColor}`);
        if (color === 'dark') {
            let classAttr = tr.getAttribute('class');
            classAttr += ' text-white';
            tr.setAttribute('class', `${classAttr}`)
        }
    });
}

setThColors();