//🔁
//입력받기
const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\n");


//학생 수 입력받기
const n = Number(input[0]);
//학생 정보 입력받기
let students = []
for ( let i = 1; i <= n; i++){
  const [name, score] = input[i].trim().split(" ");
  students.push({
    name: name,
    score: Number(score)
  })
}
//오름차순 정렬
students.sort((a,b) => a.score - b.score);
//출력하기
for( let i = 0; i < n; i++){
  process.stdout.write(students[i].name+" ");
}