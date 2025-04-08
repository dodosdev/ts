"use strict";
/**
 * 타입스크립트 배열 형식
 * const(let) 배열변수명:타입정의[] = [데이터,..];
 * const(let) 배열변수명:Array<타입정의> = new Array();
 */
//1,2,3,4,5 숫자를 저장하는 배열 생성
const numArray1 = [1, 2, 3, 4, 5];
const numArray2 = new Array(1, 2, 3, 4, 5);
console.log(numArray1[0]);
console.log(numArray2[0]);
// 배열의 메소드: forEach, for...in, for..on, map...
numArray1.forEach((number) => console.log('numArray1 >>', number));
numArray2.forEach((number) => console.log('numArray2 >>', number));
// for...of
for (const n of numArray1)
    console.log(n);
for (const n of numArray2)
    console.log(n);
