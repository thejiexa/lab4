module.exports = {

    Method1 : let  = (x) => x > 0 ? Math.sin(x) ** 2 : 1 - 2*Math.sin(x**2),

    IsPolindrom : let  = (n) => String(n) == String(n).split('').reverse().join('')? true : false,
    
    CheckTheYear : let = (year) => (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)? true : false,
    
    Method4 : let  = (x) => x < -1 ? -1 : x > -1 ? x : 1,

    Season : function(m){
        let dics = {
            1:'Зима',
            2:'Зима',
            12:'Зима',
            3:'Весна',
            4:'Весна',
            5:'Весна',
            6:'Лето',
            7:'Лето',
            8:'Лето',
            9:'Осень',
            10:'Осень',
            11:'Осень'
        };
        return  m > 12 || m < 1? 'такого месяца нет': dics[m]; 
    },

    Cards : function (m, k){
        let dics = {
            1:'пики',
            2:'трефы',
            3:'бубны',
            4:'червы',

            6:'шестёрка',
            7:'семёрка',
            8:'восьмёрка',
            9:'девятка',
            10:'десятка',
            11:'валет',
            12:'дама',
            13:'король',
            14:'туз'
        };

        return 1 > m | m > 4 ? '1 =< m =< 4!!' : 6 > k | k > 14 ? '6 =< m =< 14!!' : `${dics[k]} ${dics[m]}`;
    },

    AsianCalendar : function (n){
        let animals = ["Крыса", "Корова", "Тигр", "Заяц", "Дракон", "Змея", "Лошадь", "Овца", "Обезьяна", "Петух", "Собака", "Свинья"] ;
        let colors = ["зеленый", "зеленый", "красный", "красный", "желтый", "желтый", "белый", "белый", "черный", "черный" ];
        return `${animals[(n - 4) % animals.length]}, ${colors[(n - 4) % colors.length]}`;
    },

    multTab : function (n){
        let result = '\n';
        for (let i = 1; i < 11; i++)  result += `${n} * ${i} = ${n * i}\n`;
        return result;
    },

    SinCol : function (x){
        let result = '\n';
        for (let i = 2; i < x + 1; i++) result += `Sin(${i}) = ${Math.sin(i).toFixed(5)}\n`
        return result;
    },

    Method10 : let = {
        A : function(){
            let result = 0;
            for (let i = 100; i < 501; i++) result += i;
            return result;
        }, 
        B : function(n){
            if (n > 500) return "a <= 500!";
            else {
                let result = 0;
                for (let i = n; i < 501; i++) result += i;
                return result;
            }
        },
        C : function(n){
            if (n < -10) return "b => –10!";
            else {
                let result = 0;
                for (let i = -10; i <= n; i++) result += i;
                return result;
            }
        },
        D : function(a , b){
            if (a > b) return "b >= a!";
            else {
                let result = 0;
                for (let i = a; i <= b; i++) result += i;
                return result;
            }
        }
    },

    Method11 : function(n){
        if (n < 1) return "n >= 1"
        else {
            let result = 0;
            for (let i = 1.0; i <= n; i++) result += 1 / i;
            return result;
        }
    },

    Method12 : function(x, y){
        if (x < y) [x, y] = [y, x];
        if (x < 0 && y < 0) [x, y] = [-x, -y];
        result = 0;
        for (let i = 0; i < x; i++) result += y;
        return result;
    },

    Method13 : function(x){
        if (x < 0) x = -x;
        let result = 0;
        for (let i = 1; i <= x; i++) result += 2*i - 1;
        return result;
    },

    Method14 : function(x){
        let result = Math.sqrt(x);
        for (let i = x - 1; i >= 1 ; i--) result = Math.sqrt(i + result);
        return result;
    },

    Method15 : function(){
        let chars = '1234567890';
        let sum = 0;
        let array = [];
        for (let i = 0; i < Math.floor(Math.random() * 10) + 7; i++){
            array.push(chars.charAt(Math.floor(Math.random() * chars.length)));
            sum += Number(array[i]);
        }
        array.push(0);
        return `последовательность: ${array}\nа) суммa всех чисел: ${sum}\nб) количество всех чисел: ${array.length}`;
    },

    Method16 : function(){
        let chars = '1234567890';
        let sum = 0;
        let array = [];
        for (let i = 0; i < Math.floor(Math.random() * 10) + 7; i++){
            array.push(chars.charAt(Math.floor(Math.random() * chars.length)));
            sum += Number(array[i]);
        }
        array.push(-Math.floor(Math.random() * 10) - 1);
        return `последовательность: ${array}\nарифметическое всех чисел последовательности (без учета отрицательного числа): ${(sum / (array.length - 1)).toFixed(2)}`;
    },

    Method17 : function(){
        let x = Math.floor(Math.random() * 10000000000000000) + 1;
        let n = String(x);
        let resultA = 0;
        let resultB = 0;
        let resultC = 0;
        let resultD = 0;
        let resultE = 1;
        let resultF = 0;
        for (let i = 0; i < n.length; i++){
            if (n[i] == '3') resultA++ ; 
            if (n[i] == '0'|| n[i] == '5') resultF++ ; 
            if (parseInt(n[i]) % 2 == 0) resultC++ ; 
            if (n[i] == n[n.length - 1]) resultB++ ; 
            if (parseInt(n[i]) > 5) resultD += parseInt(n[i]); 
            if (parseInt(n[i]) > 7) resultE *= parseInt(n[i]); 
        }
        return `Число: ${x}\nа) количество цифр 3 в нем: ${resultA}\nб) сколько раз в нем встречается последняя цифра: ${resultB}\nв) количество четных цифр в нем: ${resultC}\nг) сумму его цифр, больших пяти: ${resultD}\nд) произведение его цифр, больших семи: ${resultE}\nе) сколько раз в нем встречаются цифры 0 и 5: ${resultF}`;
    },

    Method18 : function(){
        let array = [];
        let number = '';
        for (let i = 0; i < Math.floor(Math.random() * 1) + 10; i++){
            array.push(Math.floor(Math.random() * 10));
        }
        array.forEach(e => number += e);

        let maxL = 0
        let minL = 9;
        let maxR = 0;
        let minR = 9;
        let maxLi, minLi, maxRi, minRi;

        for (let i = 0; i < array.length; i++){
            if (array[i] > maxL){
                maxL = array[i];
                maxLi = i + 1;
            }
            if (array[i] < minL){
                minL = array[i];
                minLi = i + 1;
            }
        }

        array.reverse()
        for (let i = 0; i < array.length; i++){
            if (array[i] > maxR){
                maxR = array[i];
                maxRi = i + 1;
            }
            if (array[i] < minR){
                minR = array[i];
                minRi = i + 1;
            }
        }
        
        return `Число: ${number}, длинна: ${number.length}\nа) порядковый номер его максимальной цифры, считая номера: от конца числа: ${maxRi} ; от начала числа: ${maxLi}\nб) порядковый номер его минимальной цифры, считая номера: от конца числа: ${minRi}; от начала числа: ${minLi}. `;
    },

    Method19 : function(x){
        let n = 2;
        while(x > n){
            if (x % n == 0) return false;
            n++;
        }
        return true;
    },

    Method20 : function(x){
        let n = String(x);
        for (let i = 0; i < n.length - 1; i++)
            if (n[i] >= n[i + 1]) return false;
        return true;
    },

    Method21 : function(n){
        let result = "Нет такого числа";
        let array = [];
        array.push(10000);
        for (let i = 0; i < 10; i++)
            array.push(Math.floor(Math.random() * 10000));
        array.sort((x, y) => x - y);

        for (let i = 0; i < array.length; i++){
            if (array[i] > n) {
                result = `порядковый номер первого числа, большего заданного n: ${i + 1}`; 
                break;
            }
        }
        return `Число n: ${n}\nПоследовательность целых чисел: ${array}\n${result}`;
    },

    Method22 : function(){
        let number = '';
        let a = Math.floor(Math.random() * 10);
        let b = Math.floor(Math.random() * 10);
        while (a == b) b = Math.floor(Math.random() * 10);
        let aCount = 0;
        let bCount = 0;
        let array = [];
        for (let i = 0; i < 15; i++){
            array.push(Math.floor(Math.random() * 10));
            if(array[i] == a) aCount++;
            else if (array[i] == b) bCount++;
        }
        array.forEach(e => number += e);

        let result = aCount < bCount ? true : false;

        return `a: ${a}, b: ${b}\nЧисло: ${number}\nРзультат: ${result}    ${aCount}   ${bCount}`;
    },

    Method23 : function(){
        let i1 = 10;
        let i2 = 10;
        let result1 = '';
        let result2 = '';

        while (i1 <= 30) {
            result1 += `${i1}\n`;
            i1++;
        }
        
        do  {
            result2 += `${i2}\n`;
            i2++;
        }while (i2 <= 30)

        return `Оформить этот фрагмент в виде:\nа) оператора цикла с предусловием\n${result1}б) оператора цикла с постусловием\n${result2}`;
    }
}
