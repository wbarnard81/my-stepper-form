let nameValue = document.querySelector("#nameValue");
let colorValue = document.querySelector("#colorValue");
let carValue = document.querySelector("#carValue");
let petValue = document.querySelector("#petValue");

const nextBtn = document.querySelectorAll("#nextBtn");
const prevBtn = document.querySelectorAll("#prevButton");
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const answerStep = document.querySelector("#answer");

let formStep = 1;

nextBtn.forEach(function(fbutton) {
  fbutton.addEventListener("click", stepForward);
});

prevBtn.forEach(function(bbutton) {
  bbutton.addEventListener("click", stepBackward);
});

function stepForward() {
  if (formStep < 5) {
    document.querySelector(`.step${formStep}`).classList.add("hidden");
    formStep++;
    if (formStep < 4 || formStep === 4) {
      document.querySelector(`.step${formStep}`).classList.remove("hidden");
    }
  } else {
    return;
  }
  if (formStep === 5) {
    nameValue.innerText = document.querySelector("#name").value;
    colorValue.innerText = document.querySelector("#color").value;
    carValue.innerText = document.querySelector("#car").value;
    petValue.innerText = document.querySelector(
      'input[name="pet"]:checked'
    ).value;
    answerStep.classList.remove("hidden");
  }
}

function stepBackward() {
  console.log(formStep);
  if (formStep < 5 && formStep > 1) {
    document.querySelector(`.step${formStep}`).classList.add("hidden");
    formStep--;
    document.querySelector(`.step${formStep}`).classList.remove("hidden");
    if (formStep === 4) {
      answerStep.classList.remove("hidden");
    }
  } else {
    return;
  }
  console.log(formStep);
}

yesBtn.addEventListener("click", function() {
  document.querySelector(".main-content").classList.add("hidden");
  document.querySelector("#easter-egg1").classList.remove("hidden");
});

noBtn.addEventListener("click", function() {
  document.querySelector(".main-content").classList.add("hidden");
  document.querySelector("#easter-egg2").classList.remove("hidden");
});
