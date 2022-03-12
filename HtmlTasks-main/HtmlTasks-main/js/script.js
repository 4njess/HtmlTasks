//Задача №1
///////////////////////////////

//function getResult1(string) {
    //return string[0].toUpperCase() + string.substring(1, string.lenght);

 //}

//console.log(getResult1('имя'), '->', 'Имя');

//Задача №2
////////////////////////////


// function getResult1(array) {

//     var number = 0; 

//    for (let i = 0;  i < array.length; i++) {
//        number = number + array[i];
        
//         }
  
  
//   return number;

// }

// console.log(getResult1([1,2,3,4,5]), '==', '15');
// console.log(getResult1([-1,-2,-3,-4,-5]), '==', '-15');
// console.log(getResult1([-2,-2,0,4]), '==', '0');


//Задача №3
//////////////////////

//function getResult3(string) {
// дурацкое решение  string = string.substring(0, 16) + '!' + string.substring(17,20) + '! ' + string.substring(22,24) + ' !.';
//   return string;
/////////////////////
   ///правильное решение:
   //var a = [массив цифр]
   //for let i = 0; i < a.length; i++{
     //string = string.replace(a[i], '!')
   //}
   //string = string.replace('2', '!')
//}

//console.log(getResult3('Текст с числами 2 и 3 до 5.'), '==', 'Текст с числами ! и ! до !.');

//Задача № 4
////////////////////

function getResult4(string){

  var a = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ь', 'Э', 'Ю', 'Я', '32', '33'];
    for (let i = 0; )



  
}

console.log(getResult4('Арбуз'), '==', '1.17.');