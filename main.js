const input = document.querySelectorAll("input");
const card_h1 = document.querySelector(".front-card h1");
const name_date = document.querySelectorAll(".front-card p");


input[0].addEventListener("keyup", () => {
    name_date[0].textContent = input[0].value;
})
input[1].addEventListener("keyup", () => {
    if (input[1].value == "") card_h1.textContent = "";
    var pattern = /^(\d+|\\)$/;
    if ((pattern.test(input[1].value)) && (input[1].value.length <= 16)) {
        card_h1.textContent = input[1].value;
        ch1 = ""
        for (let i = 0; i < input[1].value.length; i += 4) {
            j = -1;
            j = j + 1;
            ch1 = ch1 + input[1].value.substr(i + j, 4) + " ";
        }
        ch1 = ch1.slice(0, ch1.length - 1);
        card_h1.textContent = ch1;
    }
});

input[2].addEventListener("keyup", () => {

    name_date[1].textContent = input[2].value + "/" + input[3].value;
})
input[3].addEventListener("keyup", () => {
    name_date[1].textContent = input[2].value + "/" + input[3].value;
})

const cvc = document.querySelector(".back-card p");
input[4].addEventListener("keyup", () => {
    cvc.textContent = input[4].value;
})

// ! Confirmation
const btn = document.querySelector("button");
const span = document.querySelectorAll("#error");

const succed = document.querySelector(".succed");
const contact = document.querySelector("form");
const btn_reset = document.querySelector("#Continue");

function wrongInput(x) {
    input[x].style.outline = "1px solid hsl(0, 100%, 66%)";
    if (x==3 || x==4)x=x-1;
    span[x].style.display = "block";
}


btn.addEventListener("click", (e) => {
    var string_test = /^[a-zA-Z\s]+$/;
    var int_test = /^(\d+|\\)$/;
    test=0;
    if (!string_test.test(input[0].value)) {wrongInput(0);test=1}
    if (!int_test.test(input[1].value)) {wrongInput(1);test=1}
    if (!int_test.test(input[2].value)) {wrongInput(2);test=1}
    if (!int_test.test(input[3].value)) {wrongInput(3);test=1}
    if (!int_test.test(input[4].value)) {wrongInput(4);test=1}

    if (!test){
        succed.style.display="flex";
        contact.style.display="none";
    }else{
        succed.style.display="none";
        contact.style.display="flex";
    }
   e.preventDefault();

})

btn_reset.addEventListener("click", (e) => {
    succed.style.display="none";
    contact.style.display="flex";
    input.forEach(element => {
        element.value=""
        element.style.outline = "1px solid hsl(270, 3%, 87%)";
       
    });
    for(let i=0;i<span.length;i++)span[i].style.display = "none";;
})
