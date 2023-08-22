// Comparision of BMI of Avinash and Hiren 

const massHiren = 68; // inKg
const heightHiren = 172; // incm

const massAvinash = 66; // inKG
const heightAvinash = 166; // incm

const bmiHiren = (massHiren / heightHiren ** 2 ) * 10000 // COnverting Cm inmeter
const bmiAvinash = (massAvinash / heightAvinash ** 2 ) * 10000 // COnverting Cm inmeter

console.log(bmiAvinash , bmiHiren)
const compareBmi = bmiAvinash >= bmiAvinash 
console.log(compareBmi)

// Control structure to print the value 

if(bmiHiren > bmiAvinash){
    console.log(`BMI of Hiren is Greater than BMI of Avinash. BMI of Hiren is ${bmiHiren} and BMI of Avinash is ${bmiAvinash}`)
}
else{
    console.log(`BMI of Avinash is Greater than BMI of Hiren. BMI of Avinash is ${bmiAvinash} and BMI of Hiren is ${bmiHiren}`)
}




