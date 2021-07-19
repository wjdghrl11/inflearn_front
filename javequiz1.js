/*1. object, array 자료형을 이용해서  3개의 상품이 들어가있는 배열(array)를 만들어보세요.
- Answer
2. 1번에서 만든 products 변수에서 2번째 상품의 name 값을 추출해 보세요.
- Answer*/

/* 1 */
var products = [{
    name: '유우키',
    description: '칼을 들고있는 무신유우키의 모습이다',
    price: 1000000,
}, {
    name: '아스나',
    description: '섬광의 아스나의 진지한 모습이다',
    price: 500000
}, {
    name: '키리토',
    description: '스타버스터... 스트림...!',
    price: 10000000
}]

/* 2 */
products[1].name
products[1]['name']