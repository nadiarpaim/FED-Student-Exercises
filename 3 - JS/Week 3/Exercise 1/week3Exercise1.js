let input = document.getElementById("input");
let output = document.getElementById("output");

document.getElementById("button").addEventListener("click", function () {
    let s = input.value;
    output.innerHTML = s + " is" + (isPalindrome(s) ? "" : " not")
                     + " a palindrome.";
});

function isPalindrome(s) {
    s = s.toLowerCase();
    return s.split("").reverse().join("") === s;
}

