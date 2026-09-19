const inputs = document.querySelectorAll(".otp-input");

inputs.forEach((inp, index) => {
  // 1. Forward movement & numeric filtering
  inp.addEventListener("input", () => {
    inp.value = inp.value.replace(/[^0-9]/g, "");

    if (inp.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].removeAttribute("disabled");
      inputs[index + 1].focus();
    }
  });

  // 2. Backward movement on Backspace
  inp.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && inp.value.length === 0 && index > 0) {
      inputs[index].setAttribute("disabled", true);
      inputs[index - 1].focus();
    }
  });
});

// 3. Multi-digit Paste handling on the first field
inputs[0].addEventListener("paste", (e) => {
  e.preventDefault();
  const pasteData = e.clipboardData
    .getData("text")
    .replace(/[^0-9]/g, "")
    .slice(0, inputs.length);

  if (pasteData) {
    pasteData.split("").forEach((char, index) => {
      inputs[index].removeAttribute("disabled");
      inputs[index].value = char;
      inputs[index].focus();
    });
  }
});
