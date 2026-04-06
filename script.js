let User_name = prompt("Введіть ПІБ")
var grade1 = Number(prompt("Введіть першу оцінку"))
var grade2 = Number(prompt("Введіть другу оцінку"))
var grade3 = Number(prompt("Введіть третю оцінку"))

var grade_avg = Number((grade1 + grade2 + grade3) / 3)
console.log(grade1, grade2, grade3)
console.log("grade_avg = ", grade_avg, typeof grade_avg)

if (grade_avg >= 90 && grade_avg <= 100){
    console.log("Відмінно")
}
else if (grade_avg >= 70 && grade_avg <= 89){
    console.log("Добре")
}
else if (grade_avg >= 50 && grade_avg <= 69){
    console.log("Задовільно")
}
else if (grade_avg < 50){
    console.log("Незадовільно")
}
else{
    console.log("Помилка: grade_avg = ", grade_avg)
}

let grades = [grade1, grade2, grade3]

let grade_max = grades[0];
let grade_min = grades[0];

for (let i = 0; i < grades.length; i++){
    if (grades[i] > grade_max){
        grade_max = grades[i]
    }
    
    if (grades[i] < grade_min){
        grade_min = grades[i]
    }
}
console.log("Max: ", grade_max)
console.log("Min: ", grade_min)
