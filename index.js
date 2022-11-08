/// IMPORTS //
import { apiData } from "/apiData.js"
import { createTable } from "./tableComponent.js"
import { createForm } from "./formComponent.js"
import { validate } from "./validation/validate.js"
import { controls } from "./validation/controls.js"


/// LOADING PAGE WITH DASHBOARD ALREADY IN APP CONTAINER ///

const isEmpty = !document.querySelector(".content-container").innerText.trim();
if (isEmpty) {
  document.querySelector(".content-container").appendChild(createTable(apiData));
  document.querySelector(".link-dashboard").classList.add("link-active")
}

/// DASHBOARD ///

/// ACTION AFTER CLICKIN DASHBOARD LINK ///

document.querySelector(".link-dashboard").addEventListener("click", (e) => {

  e.preventDefault()

  /// ADD UNDERLINE ///

  const dashboardUnderline = e.target.classList
  const formUnderline = document.querySelector(".link-form").classList

  dashboardUnderline.add("link-active")
  formUnderline.remove("link-active")




  const container = document.querySelector(".content-container")

  if (container.querySelector("table-component")) {
    return
  } else {
    container.innerHTML = ""
    container.appendChild(createTable(apiData))
  }
})


/// FORM ///

/// ACTIONS AFTER CLICKIN FORM LINK ///

document.querySelector(".link-form").addEventListener("click", (e) => {
  e.preventDefault()

  const formUnderline = e.target.classList
  const dashboardUnderline = document.querySelector(".link-dashboard").classList

  dashboardUnderline.remove("link-active")
  formUnderline.add("link-active")


  const container = document.querySelector(".content-container")

  if (container.querySelector(".form-component")) {
    return
  } else {
    container.innerHTML = ""
    container.appendChild(createForm())

    const form = container.querySelector(".form-component")

    /// VALIDATION OF 1 CONTROL ///

    form.addEventListener("focusout", (e) => {
      if (e.target.tagName.toLowerCase() === 'input') {
        validate(e.target.getAttribute("id"))
      }
    })


    /// VALIDATION OF FORM RESULT ///

    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const formErrorMessage = document.querySelector(".form-error-message")
      const formResult = Object.keys(controls).map((control) => {
        return validate(control)
      })

      // console.log(formResult);

      /// IF ALL RESULTS ARE TRUE ///

      if (formResult.every(item => item.result)) {
        formErrorMessage.classList.remove("is-visible")
        const data = formResult.reduce((acc, item) => {
          acc[item.control] = item.value
          return acc
        }, {})
      } else {
        formErrorMessage.classList.add("is-visible")
      }
    })
  }
});







// (function validateForm() {
//   if (formChecker.formReady) {
//     document.querySelector(".form-component").addEventListener("submit", (e) => {
//       e.preventDefault()

//       const formResult = Object.keys(controls).map(control => {
//         validate(control)
//       })

//       // .every(item => item)

//       console.log(formResult);
//     })
//   } else {
//     setTimeout(validateForm, 50)
//   }
// })()
// /// ACTIONS AFTER CLICKIN FORM LINK ///