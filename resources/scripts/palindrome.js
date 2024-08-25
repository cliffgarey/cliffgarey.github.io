const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

let string = "A man, a plan, a canal. Panama";

function cleanInput(str) {
  const regex = /[^a-z\d]/gi;
  return str.replace(regex, "");
};


function check(str) {
  let arr= [];
  let revStr = '';
  for (let char of str) {
    arr.unshift(char)
  }
  revStr = arr.join("")
  if (str === revStr) {
    return true;
  } else {
    return false;
  }
}

const isPalindrome = (str) => {
  const clean = cleanInput(str);
  const lower = clean.toLowerCase();
  const result = check(lower);
  return result;
}


function checkInput() {
  const input = document.getElementById("text-input").value;
  if (input) {
    isPalindrome(input);
    if (isPalindrome(input) === true) {
      result.innerText = `${input} is a palindrome`;
    } else {
      result.innerText = `${input} is not a palindrome`;
    }

  } else {
    alert("Please input a value")
  }
}

checkButton.addEventListener("click", checkInput);
