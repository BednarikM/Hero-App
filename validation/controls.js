export const controls = {
  firstname: {
    rules: [
      { rule: "required", message: "first name is required" }
    ]
  },
  lastname: {
    rules: [
      { rule: "required", message: "last name is required" }
    ]
  },
  birthday: {
    rules: [
      { rule: "required", message: "the date of birth is required" },
      { rule: "rightFormat", message: "wrong format, use DD.MM.YYYY" },
      { rule: "validDate", message: "the date is not valid" },
      { rule: "isPast", message: "the date can not be today or Future" }
    ]
  },
  superpower: {
    rules: [
      { rule: "required", message: "super power is required" }
    ]
  },
}







