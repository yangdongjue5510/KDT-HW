// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = Number(line);

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
`${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
'살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.

function getItemByAmount(data, amount){
    let tmpProduct = { name: '', price: 0 } //임시적으로 값을 저장할 객체 선언 filter로 한줄로 만들기.
    if (amount < 500) //가장 저렴한 제품보다 적은 돈을 입력시 null반환
        return null
    for (let product of data){   //data 배열의 요소에 접근
        if (amount >= product.price){  //가진 돈으로 살 수 있는 제품이면 tmpProduct.price는 어차피 amount보다 작음!!
            if (product.price > tmpProduct.price){ //이전에 임시로 저장한 제품보다 비싼 제품이면
                tmpProduct = product //해당 제품을 임시로 저장.
            }
        }
    }
    return tmpProduct
}