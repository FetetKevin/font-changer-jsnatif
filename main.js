const body = document.querySelector("body");
const select = document.querySelector("select");
const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector(".result");

const handleSelect = () => {
    body.classList == false
        ? body.classList.add(select.value)
        : (body.classList.remove(body.classList),
          body.classList.add(select.value));
};

select.addEventListener("change", handleSelect);

const handleClickBtn = () => {
    result.innerHTML = `[${input.value}]`;
};

button.addEventListener("click", handleClickBtn);
