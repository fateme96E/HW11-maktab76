// write a function that add two inputs values and show them below of inputs and
// when the result is Odd the result color is Red and when it is Even the color is Blue.
function getAdd() {

    const val1 = document.getElementById('val1');
    const val2 = document.getElementById('val2');

    const result = document.getElementById('result');
    result.value = parseInt(val1.value) + parseInt(val2.value);
    result.innerHTML = result.value;
    if (result.value % 2 === 0) {
        result.style.color = 'blue';
    }else{
        result.style.color = 'red';
    }
}
