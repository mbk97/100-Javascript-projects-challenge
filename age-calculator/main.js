const btn = document.getElementById("btn");
const birthdayInput = document.getElementById("birthday");
const resultText = document.getElementById("result");

const calculateAge = () => {
  const birthdayValue = birthdayInput.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultText.innerText = `Your age is ${age} ${
      age > 1 ? "Years" : "year"
    } old`;
  }
};

const getAge = (birthdayValue) => {
  const currentDate = new Date();

  //** new Date(birthdayValue): This is the constructor of the Date object. When you pass a string argument to this constructor, it attempts to parse that string and convert it into a date object.
  const birthdayDate = new Date(birthdayValue);
  //   ** This subtracts the years
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();

  //   ** This subtracts the months
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  //   month < 0: This condition checks if the current month is before the birth month. If this is true, it means the person hasn't had their birthday yet this year, so their age needs to be adjusted down by 1.(month === 0 && currentDate.getDate() < birthdayDate.getDate()): This condition checks if the current month is the same as the birth month, but the current day is before the birth day. If this is true, it also means the person hasn't had their birthday yet this year, so their age needs to be adjusted down by 1. month === 0: This part checks if the current month is the same as the birth month.currentDate.getDate() < birthdayDate.getDate(): This part checks if the current day of the month is before the birth day of the month.
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
};

btn.addEventListener("click", () => {
  calculateAge();
});
