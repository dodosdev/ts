/**
 * 타입스크립트의 클래스 타입
 * 클래스는 객체 타입으로 OOP의 Encapsulation(캡슐화)이 적용된 타입이다.
 * 클래스간의 상속이 가능하며, 이를 통해 확장성이 높다. 단, 메모리 효율성이 좋지 않다.
 * 클래스의 실행은 인스턴스를 생성하여 사용되며, new라는 키워드를 통해 실행된다
 * 클래스 정의 형식 : 변수 + 함수
 * ❗❗ 클래스 정의 전 생성할 클래스에 대한 객체 설계가 필요함!!
 * 
 * class 클래스명 {
 *      fields(필드명:변수) 선언
 *      constructor(생성자) 선언
 *      function(함수) 선언
 * }
 * 
 * 인스턴스 생성 형식
 *  class의 인스턴스이름 = new class의 생성자함수();
 * ❗❗ class의 생성자함수는 클래스이름과 동일!!
 */

//객체 설계(모델링) : 객체는 실세계를 기준으로 정해지는 구체적인 값을 일반화하여 추상화하는 개념

//홍길동씨는 출근 전에 메가커피에서 아이스아메리카노 한잔을 주문하여 사무실에 들어간다
// --> 고객, 카페, 카페메뉴
// --> 고객 : 이름, 나이, 메뉴, 금액 주문한다.
// --> 카페 : 이름, 메뉴리스트, 음료를 만든다
// --> 카페메뉴 : 메뉴명, 가격


//메뉴(Menu) 클래스 선언
class Menu {
    name:string;
    price:number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
}


//고객(Customer) 클래스 선언
class Customer {
    //fields
    name:string;
    age: number; 
    menu: Menu;
    money: number;

    //constructor
    constructor(name:string, age:number, menu:Menu, money:number) {   //Customer
        this.name = name;
        this.age = age;
        this.menu = menu;
        this.money = money;
    }
    //function
    order() : void {
        console.log(`${this.name}이 ${this.menu.name}를 주문한다.`);
    };

    //function
    addExtraCharge(money:number): void {
    this.money += money;
    }

    receiveOrderMenu(orderMenu:string): void {
        console.log(`${this.name} >>>>감사합니다.`);
        console.log(`------->> ${this.name}님이 퇴장!!`);
        
        
    }

}


//인스턴스(객체) 생성
const honghong:Customer = new Customer("홍길동", 30, new Menu("아이스아메리카노", 10), 100);
console.log(honghong.name);
console.log(honghong.age);
console.log(honghong.menu);
console.log(honghong.money);
honghong.order();



//고객 : 클래스 (틀) 메모리 생성 X
//홍길동, 오애순, 양관식.. --> 객체=인스턴스 : 메모리생성

// 양관식씨가 출근 전 메가커피에서 아이스아메리카노를 주문한다.
// 1. 메가커피 영업 시작 --> 메뉴판 출력
// 2. 양관식씨가 입장
// 3. 메뉴 선택 후 주문
// 4. 주문확인 - 주문메뉴, 결제금액 확인 (반복작업)
//    결제 불가 -->  결제 금액 부족 메시지 전달
//    결제 가능 --> 5번 실행
// 5. 주문 메뉴 제주 --> 메뉴 완료 메시지 전달
// 6. 양관식씨가 받고 퇴장

// for문 반복횟수가 정해져있을때
// while문 횟수가 정해져있지않음







//메뉴(Cafe) 클래스 선언
class Cafe {
    name:string;
    menus:Menu[];
    orderMenu? : Menu;

    constructor(name:string, menus:Menu[]){
        this.name = name;
        this.menus = menus;
        console.log(`************************************`);
        console.log(`\t\t 영업시작`);
        console.log(`************************************`);
        this.showMenu();
        
    }

    
    showMenu(): void {
        console.log(`--------------메뉴리스트-----------------`);
        console.log(`번호\t메뉴명\t메뉴가격`); 
        console.log(`---------------------------------------`);
        this.menus && this.menus.map((menu, index) => {
            menu.name.length >5 ? console.log(`${index+1}\t${menu.name}\t${menu.price}`)
            : console.log(`${index+1}\t${menu.name}\t\t${menu.price}`);
        });

        console.log(`---------------------------------------`);
        
    }


    takeOrder(name:string, orderMenu:Menu, payment:number):boolean {
        this.orderMenu = orderMenu;
        // 4. 주문확인 - 주문메뉴, 결제금액 확인 (반복작업)
        //    결제 불가 -->  결제 금액 부족 메시지 전달
        //    결제 가능 --> 5번 실행
        let orderCheckResult:boolean = false;
        const omenu = this.menus.find((menu) => menu.name === orderMenu.name);
        if(payment >= orderMenu.price){
            console.log(`${this.name} >>>${name}님!! 주문이 완료되었습니다. 잠시만 기다려주세요~`);
            
            this.makeMenu(name);
            orderCheckResult = true;

        } else {
            console.log(`${this.name} >>> ${name}님!! 결제 금액이 부족합니다.`);
        }
        return orderCheckResult;
        
    }

    makeMenu(name:string) : void {
        console.log(`.....메뉴 제조중...........`);
        console.log(`${this.name} >>> ${name}님 음료가 준비되었습니다`);
        
    }
    getOrderMenu():string {
        const menuName:string = this.getOrderMenu.name ? this.getOrderMenu.name : '';
        return menuName ;
    };

}//Cafe



//인스턴스(객체) 생성
//0.메뉴판 생성
const menuData : {name:string, price:number}[] = [
    {name:"아메리카노", price:1700},
    {name:"아이스아메리카노", price:2000},
    {name:"바닐라라떼", price:3000}
];
const menus:Menu[] = menuData.map((menu) => new Menu(menu.name, menu.price) ); //map의 리턴타입[]


// 1. 메가커피 영업 시작 --> 메뉴판 출력
const megaCoffee:Cafe = new Cafe("메가커피🥤", menus);




// 2. 고객 입장
// const oh:Customer = new Customer("오애순", 32, new Menu("바닐라라떼", 3000), 5000);
const customers:{name:string, age:number, menu:Menu, money:number}[]=[
    {name:"부장임", age:35, menu:new Menu(menuData[1].name, menuData[1].price), money:1000},
    {name:"오애순", age:33, menu:new Menu(menuData[2].name, menuData[2].price), money:5000},
    {name:"양관식", age:32, menu:new Menu(menuData[0].name, menuData[0].price), money:7000},
];


//고객별로 출력됨
customers.map((customerData) => {
    const customer:Customer = new Customer(customerData.name,
                                            customerData.age,
                                            customerData.menu,
                                            customerData.money);


    //3~4 메뉴 선택 후 주문 : 고객 <----> 카페
    let orderFlag2 = true;

    while(orderFlag2) {
        if(megaCoffee.takeOrder(customer.name, customer.menu, customer.money)){
            //음료 제조중
            console.log(`음료 제조중`);
            orderFlag2 = false;
        }else {
            //결제 금액 부족 --> 고객이 추가 지급

            customer.addExtraCharge(2000);
            
        };   

    }

    //6. 고객이 주문한 음료 받고 퇴장
    customer.receiveOrderMenu(megaCoffee.getOrderMenu());

    
});













