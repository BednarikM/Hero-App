export const createEl = function (tag, textContent = "", cssClasses = []) {
  const el = document.createElement(tag)
  if (textContent) {
    el.textContent = textContent
  }
  if (!cssClasses) {
    return el
  }

  if (Array.isArray(cssClasses)) {
    cssClasses.forEach((cssClass) => {
      el.classList.add(cssClass)
    })
    return el
  }

  if (cssClasses) {
    el.classList.add(cssClasses)
    return el
  }
}

