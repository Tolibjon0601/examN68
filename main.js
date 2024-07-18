// 1-masala
// String holda raqamlar beriladi va uni teskari arrayga aylantiruvchi funksiya tuzing.
// Misol uchun: "34567" => [7, 6, 5, 4, 3]
// yechilishi:

// function reverseString(str) {
//  let reverseArr = [];
//  for (let i = str.length - 1; i >= 0; i--) {
//    reverseArr.push(Number(str[i]));
//  }
//  return reverseArr;
// }
// let Son = prompt("Sonni kiriting: ");
// let result = reverseString(Son);
// console.log( result);


//  2-masala
// "Berilgan raqamlardan tashkil topgan arrayni har birini qiymatini 2 baravar oshirib
// qaytaruvchi funksiya tuzing const numbers = [1, 2, 3, 4, 5];
// console.log(doubleNumbers(numbers)); // [2, 4, 6, 8, 10]"
// ----------------------------------------------------------------
// function doublenumbers(num){
// let doubleNum=[];
// for(let i=0;i<num.length;i++){
// doubleNum.push(num[i]*2);
// }
// return doubleNum;
// }
// const numbers=[1,2,3,4,5];
// console.log(doublenumbers(numbers));
// 3-masala
// "Berilgan arraydagi elementning indexini qaytaruvchi funksiya tuzing.
// let arr = [10, 20, 30, 40, 50];
// let element = 30;
//  // Output: Index of 30 in array: 2
// ----------------------------------------------------------------
// function findIndex(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == element) {
//       return i;
//     }
//   }
//   return -1;
// }
// let arr = [10, 20, 30, 40, 50];
// let element = parseInt(prompt("Elementni kiriting: "));
// let index = findIndex(arr, element);
// if (index !== -1) {
//   console.log( element  + " arrayning  " + index+ " chi indexi ");
// } else {
//   console.log("-1");
// }

// 4-masala
// Raqamlardan iborat array qabul qilib shu array ni ichidagi raqamlarni
// toq va juft arraylar ga ajratib shu arraylarni qiymatini array xolda qaytaring,
// misol uchun: [10, 31,2,6]; {juft: [10,2,6]; toq: [31] }
// ----------------------------------------------------------------
// 1-usul
// const arr=[1,2,3,4,5,6,32,57,89];
// const JuftSonlar=arr.filter(number=>number%2==0);
// const ToqSonlar=arr.filter(number=>number%2==1);
// console.log(JuftSonlar);
// console.log(ToqSonlar);
// 2-usul
// function SonlarniAjratish(arr) {
// 	let result = {
// 		juft: [],
// 		toq: [],
// 	};
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 === 0) {
// 			result.juft.push(arr[i]);
// 		} else {
// 			result.toq.push(arr[i]);
// 		}
// 	}
// 	return result;
// }
// let numbers = [2, 3, 4, 6, 8, 47, 89, 55, 77];
// let newNumber = SonlarniAjratish(numbers);
// console.log("Juft son: " + newNumber.juft);
// console.log("Toq son: " + newNumber.toq);

// 5-masala

// String qabul qiluvchi funksiya yarating va u stringni nechta ! belgisi
// bo’lsa hammasini olib tashlagan holda qaytarsin replace metodi ishlatish mumkin emas
// // "salom dunyo! hello world!" -> "salom dunyo hello world"
// ----------------------------------------------------------------
// function removeSymbol(str) {
//  let result = "";
//  for (let i = 0; i < str.length; i++) {
//    if (str[i] !== '!') {
//      result += str[i];
//    }
//  }
//  return result;
// }

// let Str= prompt("Matnni kirit: ");
// let NewStr = removeSymbol(Str);
// console.log(NewStr);

// 6-masala
// Ikki array qabul qiladigan funksiya yasang va u funksiya ikki arrayni
//  ichidagi raqamlarini yig’indisini qaytarsin.
// ----------------------------------------------------------------
// 1-usul
// function PlusTwoArrays(arr1,arr2) {
//  let newArr=arr1.concat(arr2);
//  let sum=0;
//  for(let i=0;i<newArr.length;i++){
//   sum+=newArr[i];
//  }
//  return sum;
// }
// let arr1=[1,2,3,4,5,];
// let arr2=[6,7,8,9,10];
// console.log(PlusTwoArrays(arr1, arr2));
// 2-usul
// function PlusTwoArrays(arr1, arr2) {
//  let sum = 0;
//  for (let i = 0; i < arr1.length; i++) {
//    sum += arr1[i];
//  }
//  for (let i = 0; i < arr2.length; i++) {
//    sum += arr2[i];
//  }
//  return sum;
// }

// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8,9,10];
// console.log(PlusTwoArrays(array1, array2));

// 7-masala
// String qabul qiladigan funksiya yarating va u stringni birinchi va oxirgi elementlarini
//  o’chirib yuborsin slice ishlatish mumkin emas.
// ----------------------------------------------------------------
// function removeFirstAndLastElement(str) {
//  if (str.length <= 2) {
//      return "";
//      }
//  let arr = str.split("");
//  arr.pop();
//  arr.shift();
//  return arr.join("");
// }
// let str = prompt("Matnni kirit: ");
// const result = removeFirstAndLastElement(str);
// console.log(result);
// --------------------------------------------------------------------
// 2-usul
  // function removeFirstAndLastElement(str){
  //  if (str.length < 2) {
  //   return "";
  // }
  //  return str.substring(1, str.length-1);

  // }
  // let str=prompt("matnni kirit: ");
  // console.log(removeFirstAndLastElement(str));
  // 8-masala
  // Array qabul qiluvchi funksiya yarating va u funksiya arrayni ichidagi elementlarini
  // teskari qilsin reverse ishlatish mumkin emas
  // ----------------------------------------------------------------
 //  function reverseArr(arr) {
 //   let reverse = [];
 //   for (let i = arr.length - 1; i >= 0; i--) {
 //    reverse.push(arr[i]);
 //   }
 //   return reverse;
 // }
 // let arr = [1,3,4,5,7,77,88,9];
 // let newArr = reverseArr(arr);
 // console.log(newArr);
// 9-masala
// String da raqam qabul qilib faqat oxirida 0 raqami bo'lsa
//  ochirib tashlaydigan va qaytaradigan funksiya tuzing
// ----------------------------------------------------------------
// function removeZero(str) {
//  for (let i = str.length - 1; i >= 0; i--) {
//    if (str.charAt(i) === '0' && i === str.length - 1) {
//      str = str.substring(0, i);
//    } else {
//      break;
//    }
//  }
//  return str;
// }
// let number = prompt("sonni kirit: ");
// let result = removeZero(number);
// console.log(result);
// 1200==>12

// 10-masala
// Arraydagi eng kichik sonni topuvchi fuksiya yarating va u eng kichik
// raqamni 4 chi darajasini string holda qaytarsin filter ishlatish mumkin
// 1-usul
//  let array =[3,5,8,9,7,15,48];
// let minimum=array[0];
// for(i=0;i<=array.length;i++){
// if(array[i]<minimum){
//   minimum=array[i];

// }
// }
// console.log("eng kichik son : " + minimum);

// 2-usul
// function findMinElem() {
//   let Arr = [50, 60, 20, 10, 40];
//   let minValue = Math.min(...Arr);
//   console.log("Eng kichik son:" + minValue);
// }
// findMinElem()
