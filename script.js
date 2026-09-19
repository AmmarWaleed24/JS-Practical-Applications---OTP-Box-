const inputs = document.querySelectorAll("input[type='text']");
inputs[0].setAttribute("maxlength", inputs.length);
inputs.forEach((inp, index) => {
  inp.addEventListener("input", () => {
    inp.value = inp.value.replace(/[^0-9]/g, "");
    moveForward(inp, index);
    moveBackward(inp, index);
  });
});

inputs[0].addEventListener("input", () => {
  pasteNumber(inputs[0]);
});

function moveForward(inp, index) {
  if (inp.value.length === 1) {
    if (index < inputs.length - 1) {
      inputs[index + 1].removeAttribute("disabled");
      inputs[index + 1].focus();
    }
  }
}

function moveBackward(inp, index) {
  if (inp.value.length === 0) {
    if (index > 0) {
      inputs[index].setAttribute("disabled", true);
        inputs[index - 1].focus();
    }
  }
}

function pasteNumber(inp) {
  if (inp.value.length > 1 && inp.value.length > inputs.length) {
    inp.value = inp.value.slice(0, inputs.length);
    console.log("pasted number is more than " + inputs.length);
  } else if (inp.value.length > 1 && inp.value.length <= inputs.length) {
    console.log("pasted number is less than or equal " + inputs.length);
  }

  let inpValue = inp.value.split("");

  for (let i = 0; i < inpValue.length; i++) {
    inputs[i].value = inpValue[i];
    moveForward(inputs[i], i);
  }
}
//123456  7890
//123
