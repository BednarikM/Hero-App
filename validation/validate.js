/// IMPORTS //
import { controls } from "./controls.js"
import { validator } from "./validator.js"

export const validate = function (control) {

  const targetEl = document.getElementById(control)
  const value = targetEl.value
  let result = true

  /// Iterating rules and playing them according to control

  controls[control].rules.forEach(ruleObject => {
    if (result) {
      if (!validator[ruleObject.rule](value, ruleObject.par || null)) {
        result = false
        // add invalid class //
        targetEl.classList.add("invalid")
        // remove valid class if present
        targetEl.classList.remove("valid")
        // display error message //
        targetEl.querySelector("#" + control + " ~ .error-message").textContent = ruleObject.message

      }
    }
  })
  if (result) {
    /// remove or add validation classes according to condition value ///
    targetEl.classList.add("valid")
    targetEl.classList.remove("invalid")
  }
  return { control, result, value }
}

// export const validateForm = function () {

// }