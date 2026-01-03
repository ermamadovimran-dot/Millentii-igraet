let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let divis = document.querySelector('.divis');

plus.addEventListener('click', function() {
    let num1 = document.querySelector('.num1')
    let num2 = document.querySelector('.num2')

    if (num1.value === '' || num2.value === '') {
        alert("Поля не должны быть пустыми")
        return
    }

    val_1 = parseInt(num1.value);
    val_2 = parseInt(num2.value);

    val_1 + val_2;
    num1.value = val_1
    num2.value = " "

})

minus.addEventListener('click', function() {
    let num1 = document.querySelector('.num1')
    let num2 = document.querySelector('.num2')

    if (num1.value === '' || num2.value === '') {
        alert("Поля не должны быть пустыми")
        return
    }

    val_1 = parseInt(num1.value);
    val_2 = parseInt(num2.value);

    val_1 -= val_2;
    num1.value = val_1
    num2.value = " "

})

multiply.addEventListener('click', function() {
    let num1 = document.querySelector('.num1')
    let num2 = document.querySelector('.num2')

    if (num1.value === '' || num2.value === '') {
        alert("Поля не должны быть пустыми")
        return
    }

    val_1 = parseInt(num1.value);
    val_2 = parseInt(num2.value);

    val_1 *= val_2;
    num1.value = val_1
    num2.value = " "

})

divis.addEventListener('click', function() {
    let num1 = document.querySelector('.num1')
    let num2 = document.querySelector('.num2')

    if (num1.value === '' || num2.value === '') {
        alert("Поля не должны быть пустыми")
        return
    }
    else if (num2.value == 0){
        alert("На ноль делить нельзя")
        return
    }

    val_1 = parseInt(num1.value);
    val_2 = parseInt(num2.value);

    if (val_2 === 0) {
        alert("На ноль делить нельзя")
        return
    }

    val_1 /= val_2;
    num1.value = val_1
    num2.value = " "

})

sqrt.addEventListener('click', function() {
    let num1 = document.querySelector('.num1')
    let num2 = document.querySelector('.num2')

    if (num1.value === '' || num2.value === '') {
        alert("Поля не должны быть пустыми")
        return
    }

    val_1 = parseInt(num1.value);
    val_2 = parseInt(num2.value);

    if (val_1 < 0) {
        alert("Невозможно извлечь квадратный корень из отрицательного числа")
        return
    }

    val_1 = Math.sqrt(val_1);
    num1.value = val_1
    num2.value = " "

})

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Math</title>
// </head>
// <body>
//     <div>
//         <input class="num1" type="number">
//         <input class="num2" type="number">
//         <hr>
//         <br>
//         <button class="plus">+</button>
//         <button class="minus">-</button>
//         <button class="multiply">*</button>
//         <button class="divis">/</button>
//         <button class="sqrt">√</button>
//     </div>

//     <script src="script.js"></script>
// </body>
// </html>
