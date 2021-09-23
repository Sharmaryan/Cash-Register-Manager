const billInput = document.querySelector("#bill-amount");
const cashGivenInput = document.querySelector("#cash-given");

const showMsg = document.querySelector(".show-message");

const nextBtn = document.querySelector("#next-btn");
const checkBtn = document.querySelector("#check-btn");

const cashGivenSection = document.querySelector(".cash-given-section");
const table = document.querySelector(".change-table");

const numberOfNotes = document.querySelectorAll(".no-of-notes");
const notesList = [2000, 500, 100, 20, 10, 5, 1];

cashGivenSection.style.display = "none";
table.style.display = "none";
showMsg.style.display = "none";

nextBtn.addEventListener("click", () => {
  if (billInput.value >= 1) {
    showMsg.style.display = "none";
    cashGivenSection.style.display = "block";
    nextBtn.style.display = "none";
  } else if (billInput.value == "0") {
    showMsg.style.display = "block";
    showMsg.innerText = "Please Enter Valid Bill Amount";
  } else {
    showMsg.style.display = "block";
    showMsg.innerText = "you can't leave bill amount empty";
  }
});

function clickHandler() {
  table.style.display = "block";
  showMsg.style.display = "none";

  const billInputValue = Number(billInput.value);
  const cashGivenInputValue = Number(cashGivenInput.value);

  if (cashGivenInput.value == "" ||billInput.value == "" ||cashGivenInput.value <= 0 ||billInput.value <= 0) {
     if (billInput.value < 0 || cashGivenInput.value < 0) {
       showMsg.style.display = "block";
       showMsg.innerText = "Please Enter Valid Amount";
       table.style.display = "none";
     } else if (billInput.value == "0" || cashGivenInput.value == "0") {
       showMsg.style.display = "block";
       showMsg.innerText = "Zero is not allowed";
       table.style.display = "none";
     } else {
       showMsg.style.display = "block";
       showMsg.innerText = " don't leave any field empty";
       table.style.display = "none";
     }
  } else {
    if (billInputValue <= cashGivenInputValue) {
      if (billInputValue == cashGivenInputValue) {
        table.style.display = "none";
        showMsg.style.display = "block";
        showMsg.innerText = `No need for change`;
      }

      let returnedCash = cashGivenInputValue - billInputValue;
      for (let i = 0; i < notesList.length; i++) {
        const noOfNotes = Math.trunc(returnedCash / notesList[i]);
        returnedCash = returnedCash % notesList[i];
        numberOfNotes[i].innerText = noOfNotes;
      }
    } else {
      showMsg.style.display = "block";
      showMsg.innerText = "do you wanna wash plates?";
      table.style.display = "none";
    }
  }
}

checkBtn.addEventListener("click", clickHandler);
