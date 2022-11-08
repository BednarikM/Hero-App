/// IMPORT ///
import { createEl } from "./domUtils.js"
import { checkMark } from "./svg.js"

export const createForm = function () {

  const inputSettings = [
    { id: "firstname", label: "First name", type: "text", placeholder: "e.g. John" },
    { id: "lastname", label: "Last name", type: "text", placeholder: "e.g. Smith" },
    { id: "birthday", label: "Birthday", type: "text", placeholder: "DD.MM.YYYY" },
    { id: "superpower", label: "Superpower", type: "text", placeholder: "e.g. super speed" },
  ]

  /// CREATE ROOT FORM AND APEND HEADER SPAN TO IT ///

  const form = createEl("form", "", "form-component")
  const header = createEl("span", "Add new SuperHero", "form-header")
  const formErrorMessage = createEl("div", "the form can not be submited", "form-error-message")

  form.appendChild(header)
  form.appendChild(formErrorMessage)


  /// CREATE ALL INPUTS ///

  inputSettings.forEach(item => {

    const divContainer = createEl("div")
    let label = createEl("label", item.label)
    label.setAttribute("for", item.id)


    const input = createEl("input")
    input.setAttribute("type", "text")
    input.setAttribute("id", item.id)
    input.setAttribute("placeholder", item.placeholder)
    input.setAttribute("autocomplete", "off")

    const divErrMessage = createEl("div", "", "error-message")
    const divCheckMark = createEl("div", "", "check-mark")
    divCheckMark.innerHTML = checkMark
    /// APEND INPUTS ///

    divContainer.appendChild(label)
    divContainer.appendChild(input)
    divContainer.appendChild(divErrMessage)
    divContainer.appendChild(divCheckMark)
    form.appendChild(divContainer)

  })

  /// CREATE AND APEND SUBMIT BUTTON ///

  const btnForm = createEl("button", "submit", "btn-form")
  form.appendChild(btnForm);

  return form

}



