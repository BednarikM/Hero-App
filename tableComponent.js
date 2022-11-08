import { formatDate } from "./utils.js"
import { createEl } from "./domUtils.js"
import { trashCan, editPencil } from "./svg.js"



/// CREATE TABLE FUNCTION ///


export const createTable = function (data) {

  /// MAPING ENTRY DATA ///

  const superHeroes = data
  const superHeroesMaped = data.map((superHero) => {
    return {
      ["First name"]: superHero.firstname[0].toUpperCase() + superHero.firstname.slice(1).toLocaleLowerCase(),
      ["Last name"]: superHero.lastname[0].toUpperCase() + superHero.lastname.slice(1).toLocaleLowerCase(),
      ["Birthday"]: formatDate(superHero.birthday),
      ["Superpower"]: superHero.superpower,
      ["Action"]: ""
    }
  })

  /// CREATING ROOT TABLE ///

  const rootTable = createEl("table", "", "table-component")

  /// CREATING HEAD ///

  const tableHead = createEl("thead")
  const headerRow = createEl("tr", "", "thead-row")

  Object.keys(superHeroesMaped[0]).forEach((header) => {
    headerRow.appendChild(createEl("th", header, "thead-cell"))
  })

  tableHead.appendChild(headerRow)

  /// CREATING BODY /// 

  const tableBody = createEl("tbody")

  superHeroesMaped.forEach(superHero => {

    let bodyRow = createEl("tr", "", "tbody-row")

    Object.values(superHero).forEach((value, index) => {

      if (index === Object.values(superHero).length - 1) {

        const btnCell = createEl("td", "", "tbody-btn-cell");
        const btnDelete = createEl("button", "", "btn-delete")
        const btnUpdate = createEl("button", "", "btn-update")

        btnDelete.innerHTML = trashCan
        btnUpdate.innerHTML = editPencil
        btnCell.appendChild(btnDelete)
        btnCell.appendChild(btnUpdate)
        bodyRow.appendChild(btnCell);

      } else {
        let bodyCell = createEl("td", value, "tbody-cell")
        bodyRow.appendChild(bodyCell)
      }

    })

    /// ASSEMBLE WHOLE TABLEBODY ///

    tableBody.appendChild(bodyRow)

  })

  /// APENDING CREATED TABLEHEAD AND TABLEBODY TO ROOT TABLE

  rootTable.appendChild(tableHead)
  rootTable.appendChild(tableBody)

  return rootTable

}