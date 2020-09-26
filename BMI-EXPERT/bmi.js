// function bmicc(){
//   w = document.getElementById('w').value
//     h = document.getElementById('h').value
//     res = w / (h * h)
//     res1 = Math.round(res)
//
// // function for between
//
//
//
//     if (res1 <= 18 ) {
//
//       alert("you are underWeight. ")
//     }
//
//     else if (res1 >= 18 && <= 25 ) {
//       alert("you are normal.")
//     }
//     else if (res1 >= 25 && <= 30){
//       alert("Overweight")
//     }
//     else{
//       alert("obese")
//     }
//
//     document.getElementById("hh").innerHTML = "Your BMI is "+ res1 +". ";
//     alert("Your BMI is "+ res1)
//
// }
function bmicc(){
  w = +(document.getElementById('w').value)
  h = +(document.getElementById('h').value)
  res = w / (h * h)
  res1 = Math.round(res)

// function for between


  if (res1 <= 18 ) {
    bmicat = "UnderWeight"
  }
  else if(res1 >= 18 && res1 <= 25 ) {
    bmicat = "Normal"
  }
  else if(res1 >= 25 && res1 <= 30){
    bmicat = "OverWeight"
  }
  else if (res1 >=30 && res1 <= 100000) {
    bmicat = "Obesity"

  }else{
    bmicat = "NO"
  }

  document.getElementById("result-h1").innerHTML = "Result:"
  document.getElementById("result-p").innerHTML = "Your BMI is "+ res1 +" . Your BMI comes under  "+ bmicat +" category"
  alert("Your BMI is "+ res1 +" . Your BMI comes under  "+ bmicat +" category");
  console.log("Your BMI is "+ res1 +" . Your BMI comes under  "+ bmicat +" category");

}
// REMOVE SRY div
function rmSryDiv(){
  document.getElementById('sorry-div').style.visibility = "hidden"
}
