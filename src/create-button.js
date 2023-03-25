function createButton(classArray, buttonContent) {
  const button = document.createElement('button');

  for (let i = 0; i < classArray.length; i += 1) {
    button.classList.add(classArray[i]);
  }

  button.innerHTML = buttonContent;

  return button;
}

export { createButton };
