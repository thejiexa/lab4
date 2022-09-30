const methods = require('./lab4.js');
/* const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send("1.    Рассчитать значение у при заданном значении х: " + methods.Method1(5) + 
    "\n2.   Дано натуральное число n. Выяснить, является ли оно палиндромом: " + methods.IsPolindrom(123321) + 
    "\n3.   Определить, является ли високосным год с таким номером: " + methods.CheckTheYear(1984) + 
    "\n4.   Составить программу для вычисления значения функции y(x): " + methods.Method4(5) + 
    "\n5.   выводит на экран время года, к которому относится этот месяц: " + methods.Season(10) + 
    "\n6.   Определить полное название (масть и достоинство) соответствующей карты в виде: " + methods.Cards(3, 13) +
    "\n7.    Азиатский календарь: " + methods.AsianCalendar(1984) + 
    "\n8.	Напечатать таблицу умножения на 9: " + methods.multTab(9) + 
    "\n9.	Напечатать \"столбиком\" значения sin 2 , sin 3 , ..., sin 20: " + SinCol(20) + 
    "\n"
    
    );
});

app.listen(8080); */

console.log(`1.     ` +  methods.Method1(5));
console.log(`2.     ` +  methods.IsPolindrom(123321));
console.log(`3.     ` +  methods.CheckTheYear(1984));
console.log(`4.     ` +  methods.Method4(5));
console.log(`5.     ` +  methods.Season(10));
console.log(`6.     ` +  methods.Cards(3, 13));
console.log(`7.     ` +  methods.AsianCalendar(1984));
console.log(`8.     ` +  methods.multTab(9));
console.log(`9.     ` +  methods.SinCol(20));
console.log(`10 a.     ` +  methods.Method10.A(5));
console.log(`10 b.     ` +  methods.Method10.B(30));
console.log(`10 c.     ` +  methods.Method10.C(50));
console.log(`10 d.     ` +  methods.Method10.D(4, 120));
console.log(`11.     ` +  methods.Method11(5));
console.log(`12.     ` +  methods.Method12(6, 5));
console.log(`13.     ` +  methods.Method13(5));
console.log(`14.     ` +  methods.Method14(50));
console.log(`15.     ` +  methods.Method15());
console.log(`16.     ` +  methods.Method16());
console.log(`17.     ` +  methods.Method17());
console.log(`18.     ` +  methods.Method18());
console.log(`19.     ` +  methods.Method19(21));
console.log(`20.     ` +  methods.Method20(1478));
console.log(`21.     ` +  methods.Method21(4000));
console.log(`22.     ` +  methods.Method22());
console.log(`23.     ` +  methods.Method23());
