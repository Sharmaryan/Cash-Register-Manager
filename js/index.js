const billInput = document.querySelector("#bill-amount");
const cashGivenInput = document.querySelector("#cash-given");

const showMsg = document.querySelector(".show-message");
const errorMsg = document.querySelector(".error-msg");

const nextBtn = document.querySelector("#next-btn");
const checkBtn = document.querySelector("#check-btn");

const cashGivenSection = document.querySelector(".cash-given-section");
const table = document.querySelector(".change-table");

const numberOfNotes = document.querySelectorAll(".no-of-notes");
const notesList = [2000, 500, 100, 20, 10, 5, 1];

cashGivenSection.style.display = "none";
table.style.display = "none";
showMsg.style.display = "none";
errorMsg.style.display = "none";

nextBtn.addEventListener("click", () => {
  if (billInput.value > 0) {
    showMsg.style.display = "none";
    cashGivenSection.style.display = "block";
    nextBtn.style.display = "none";
  } else {
    showMsg.style.display = "block";
    showMsg.innerText = "Please Enter Valid Bill Amount";
  }
});

function clickHandler() {
  table.style.display = "block";
  errorMsg.style.display = "none";

   const billInputValue = Number(billInput.value);
   const cashGivenInputValue = Number(cashGivenInput.value);

  if (billInputValue <= cashGivenInputValue) {
    let returnedCash = cashGivenInputValue - billInputValue;
    for (let i = 0; i < notesList.length; i++) {
      const noOfNotes = Math.trunc(returnedCash / notesList[i]);
      returnedCash = returnedCash % notesList[i];
      numberOfNotes[i].innerText = noOfNotes;
    }
  } else {
    errorMsg.style.display = "block";
    errorMsg.innerText = "do you wanna wash plates?";
  }
}

checkBtn.addEventListener("click", clickHandler);
