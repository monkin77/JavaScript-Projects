let raceNumber = Math.floor(Math.random() * 1000);
const early = true
let age = 18

if (early && age > 18)
  raceNumber += 1000

if (early && age > 18) {
  console.log(`your race will be at 9:30am ma man ${raceNumber}`)
}
else if (!early && age > 18) {
  console.log (`your race will be at 11:00am ma man ${raceNumber} `)
}
else if (age < 18) {
  console.log(`Your race will be at 12:30pm ma boi ${raceNumber}`)
}
else {
  console.log ("Check the registration desk nigger")
}