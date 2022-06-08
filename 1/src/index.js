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
       //another solution
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



