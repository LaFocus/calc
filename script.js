var num1 = +prompt('Введите первое число')
var num2 = +prompt('Введите второе число')
var num3 = prompt('Выберите действие(+ - * /)')

if ((!isNaN(num1)) && (!isNaN(num2)) && (num3 == '+')) {
    alert(num1 + num2)
}else if ((!isNaN(num1)) && (!isNaN(num2)) && (num3 == '-')) {
    alert(num1 - num2)
}    
else if ((!isNaN(num1)) && (!isNaN(num2)) && (num3 == '*')) {
    alert(num1 * num2)
}    
else if ((!isNaN(num1)) && (!isNaN(num2)) && (num3 == '/')) {
    alert(num1 / num2)
}else {
    alert('Ошибка')
}   