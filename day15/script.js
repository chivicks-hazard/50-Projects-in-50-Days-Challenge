const bmiForm = document.getElementById("bmiForm");
const mass = document.getElementById("mass");
const height = document.getElementById("height");

function calculateBMI() {
  let bmi;

  bmi = (mass.value * 2.205) / Math.pow(height.value / 2.54, 2);
  bmi = bmi * 703;

  return bmi;
}

bmiForm.addEventListener("submit", function (event) {
  event.preventDefault();

  alert(`Your BMI is ${calculateBMI()}`);
});
