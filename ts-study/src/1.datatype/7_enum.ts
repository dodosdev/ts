/**
 * enum(enumeration) - 열거형으로 표현되는 데이터를 저장하는 형식
 * 정의 형식
 * const(let) 변수명 {
 *      enum item 1, // 인덱스 0
 *      enum item 2, //인덱스 1
 *      ...
 * }
 */

const objLiteral = {
    name: "홍길동",
    age: 30
};


enum objEnum {         //enum objEnum <--enum으로 지정하면 자동으로 순회함 
    TypeScript = "타입스크립트",  //0
    JavaScript = "자바스크립트",  //1
    React = "리액트" //2
}

console.log(objLiteral);
console.log(objEnum.TypeScript);


// 출력 형식의 차이점!!!
// objLiteral --> for.. in 사용 ❌, Object.keys() : [name, age] --> forEach를 적용해서 출력
const keys = Object.keys(objLiteral);
console.log(keys);  //[name, age]
keys.forEach((key)=> {
    console.log(`{${key} : ${objLiteral[key as keyof typeof objLiteral]}}`);
});


//objEnum --> for.. in 사용⭕
console.log(`objEnum: for..in----------------------------`);
for(const key in objEnum) {
    console.log(`{${key} : ${objEnum[key as keyof typeof objEnum]}}`);
};




// objEnum --> for.. in 사용 ⭕
