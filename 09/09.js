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
for (let [k,v] of Object.entries(obj)) {        //[?,!] ?는 key자리, !는 value자리 고정
    console.log("오브젝트 :", k)
    console.log("오브젝트 :", v)
}
//오브젝트 key배열
console.log("오브젝트 키배열 :",Object.keys(obj))

//오브젝트 value배열
console.log("오브젝트 키배열 :",Object.values(obj))

//배열과 오브젝트의 차이
//배열은 index를 이용해서 검색을 하지만
//오브젝트는 key를 이용해서 검색
//자바스크립트에서 배열은 파이썬의 List
//자바스크립트에서 오브젝트는 파이썬의 Dictionary

let arr5;
console.log("arr5 :",arr5);
//변수만 정의했을 때 결과 : arr5 : undefined

//for of문 사용한 경우(index사용 안함)
let arr6=[];
for(let item of arr) {
    arr6.push(item);
    }
console.log("arr6 :",arr)

//for in문 사용한 경우(index사용 안함)
let arr7=[];
for(let i in arr) {
    arr7.push(arr[i]);
    }
console.log("arr7 :",arr7)

//반복문에서 index를 사용한 경우
let arr8=[0,0,0,0,0,0];
for(let i in arr) {
    arr8[i]=arr[i]
}
console.log("arr8 :",arr8)

//map함수 사용(파라미터가 1개인 경우만 가능)  파라미터가 2개인 경우에는 괄호 생략 불가능
arr9 = arr.map(v=>v);
console.log("arr9 :",arr9)

//map함수 사용(return 무조건 필요)
arr10 = arr.map((v)=>{
     return v;
});
console.log("arr10 :",arr10);

//filter(true값만 출력)
let arr21=[];
for(let item of arr) {
    if(isNaN(item))     //값이 숫자면 false반환(문자열은 true)
    arr21.push(item)
}
console.log("arr21 :",arr21);

let arr22=[];
for(let item of arr) {
    if(!isNaN(item))
    arr22.push(item)
}
console.log("arr22 :",arr22);

arr23=arr.filter((v)=>{
    if(isNaN(v))
    return isNaN(v)
})
console.log("arr23 :",arr23)

arr24=arr.filter((v)=>isNaN(v))
console.log("arr24 :",arr24);

//map,filter는 배열에서만 사용가능(오브젝트는 사용불가)
//오브젝트를 배열로 만들어서 사용해야함

//전개연산자
let arr25 = [...arr];
console.log("전개연산자 :",arr25);