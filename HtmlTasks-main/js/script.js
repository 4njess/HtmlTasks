//function getResult1(string) {
    //return string[0].toUpperCase() + string.substring(1, string.length);

 //}

//console.log(getResult('имя'), '->', 'Имя')


//function getResult1(array) {

  //  var number = 0; 

   // for (let i = 0;  i < array.length; i++) {
       // number = number + array[i];
        
        //}
    ////////array.map((a) => {
      /////////////number = number + a
    ///////////////})
    

    //return number;

//}



//console.log(getResult1([1,2,3,4,5]), '==', '15');
///console.log(getResult1([-1,-2,-3,-4,-5]), '==', '-15');
//console.log(getResult1([-2,-2,0,4]), '==', '0');

function getResult3(string) {
    string = string.substring(0, 16) + '!' + string.substring(17,20) + '! ' + string.substring(22,24) + ' !';
    return string;
 
}

console.log(getResult3('Текст с числами 2 и 3 до 5.'), '==', 'Текст с числами ! и ! до !.');

