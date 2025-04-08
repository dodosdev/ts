/**
 * 타입스크립트 함수 선언
 * 
 * 기본함수 선언 :
 * funtion 함수명(파라미터: 파라미터 타입): 반환값 타입 {
 *      실행로직
 *  return 반환값;
 * }
 */


//greet1("홍길동") --> 화면출력 : 반갑습니다. 홍길동님!!!
function greet1(pname: string) {
    console.log(`반갑습니다. ${pname}님!!!`);
}
greet1("홍길동");



//greet2("홍길동", 30); --> 반환값 : '홍길동의 나이는 30 입니다.', 반환값 화면출력
function greet2(pname: string, age:number): string {
    return `${pname}의 나이는 ${age} 입니다`;
}
const str: string = greet2("홍길동", 30);
console.log(str);
console.log(greet2("홍길동", 30));



//greet3("Alice", "서울시 강남구") : 화살표 함수를 통해 함수 표현식으로 생성
//화면 출력 : 이름:Alice, 주소-서울시 강남구
//age 나이를 입력받는 변수 매개변수 추가, 단, 타입은 정해지지 않음!!!
//age는 필수 입력 사항이 아닌 선택 사항임
const greet3 = (pname: string, addr:string, age?:any) => {  //age?:any (옵션)있어도되고없어도됨
    age ? 
        console.log(`이름-${pname}, 주소-${addr}, 나이-${age}`)
    :   console.log(`이름-${pname}, 주소-${addr}`);
    //있으면 출력하고 없으면 출력안함
}
greet3("Alice", "서울시 강남구");
greet3("Alice", "서울시 강남구", "30");
greet3("Alice", "서울시 강남구", "30");


//greet4(1,2,3,4,5) 값을 입력받아 배열객체로 화면 출력
const greet4 = (...params: any[]) => {  //(...pnumbers: number[])여러개를 받을경우 스프레드연산자 사용
    console.log(params);
}
greet4(1,2,3,4,5); //넘어오는 여러애들 배열로 출력하기
greet4('✨','🎀','🎴')
