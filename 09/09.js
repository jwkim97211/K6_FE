//자바스크립트 데이터 타입
//기본 타입
//let 변경 가능
//const 변경 불가능
let n1 = 10;                //정수
let n2 = 10.5;              //실수
let s1 = "안녕하세요.";       //문자열

console.log("정수 :", n1)
console.log("실수 :", n2)
console.log("문자열 :", s1)
console.log("문자열의 요소 접근 :", s1[1]);
//문자열 순회
console.log("문자열 of")
for (let c of s1) {      //of를 사용(값)
    console.log("문자열 :", c)
}
console.log("문자열 in")
for (let i in s1) {      //in을 사용(index)
    console.log("문자열 :", s1[i])
}

//배열
//tailing 쉼표 가능
let arr = ['🍎', 1, '🥕', 2, '🍌', 3,];
console.log("배열 :", arr);
console.log("배열의 요소 접근 :", arr[0]);
//배열 순회
console.log("배열 of")
for (let c of arr) {  //값 사용
    console.log("배열 :", c)
}
console.log("배열 in")
for (let i in arr) { //index 사용
    console.log("배열 :", arr[i])
}

//배열 map함수(return되는 개수는 배열의 개수와 동일)
console.log("배열 map함수")
const arr2 = arr.map((v)=> {    //return된 값을 모아서 arr2에 넣음
    console.log(v);
    return v+"🍖";
});
console.log("arr2 :",arr2)

const arr3 = arr.map((v,i)=> {    //return된 값을 모아서 arr2에 넣음
    console.log("value :",v,"index :",i);
});

//배열 map 함수(콜백)
console.log("배열 map함수(콜백)")
const arr4 = arr.map(v=> v+"🍖");    //매개변수가 1개 일 경우에는 괄호 생략 가능
//콜백의 body에 실행문이 없고 return문만 있을 경우에는 {}와 return 생략가능
console.log("arr4 : ",arr4)

//오브젝트(key,value 사용)
//tailing 쉼표 가능
let obj = { '🍎': 1, '🥕': 2, '🍌': 3, };
console.log("오브젝트 :", obj);
console.log("오브젝트의 요소 접근 :", obj['🍎'])
//오브젝트 순회
console.log("오브젝트 in")
for (let i in obj) {
    console.log("오브젝트 :", obj[i])
}
/*      오브젝트는 of 사용 불가
for (let c of obj) {
    console.log("오브젝트 : ", c)
}
*/
//오브젝트는 of 사용법이 다름 Object.entries(이름)
console.log("오브젝트 of")
for (let c of Object.entries(obj)) {
    console.log("오브젝트 :", c)
    console.log("오브젝트 :", c[0])
    console.log("오브젝트 :", c[1])
}
console.log("오브젝트 구조분해")
for (let [k,v] of Object.entries(obj)) {
    console.log("오브젝트 :", k)
    console.log("오브젝트 :", v)
}