let create = document.querySelector(".create");
let text = document.querySelector("#text");
let num = document.querySelector("#num");
let p = document.querySelector(".p");
let copy = document.querySelector(".copy-btn");
let body = document.querySelector("body");

create.addEventListener('click', () => {
    if (text.value !== "" && num.value !== "") {
        let valuespace = `${text.value}\n`;
        let repet = valuespace.repeat(num.value);
        p.textContent = repet;
        // p.select();
        document.execCommand("copy");
        navigator.clipboard.writeText(p.textContent);
    }
});
