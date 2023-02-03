/**
 * set a new localstorage
 */
function CreateInvoice() {
  localStorage.setItem("Invoice", JSON.stringify([{}]));
}

/**
 * Add a new element into the localstorage
 * @param {*} invoice
 */
export function AddInvoice(invoice) {
  console.log(invoice);

  if (localStorage.getItem("Invoice") == null) CreateInvoice();

  let items = JSON.parse(localStorage.getItem("Invoice"));
  items.add(invoice);
  localStorage.setItem("Invoice", JSON.stringify([invoice]));
}

export function LastInvoiceCode() {
  if (localStorage.getItem("Invoice") == null) {
    return 1;
  } else {
    let items = localStorage.getItem("Invoice");
    const maxId = items.reduce(
      (max, character) =>
        character.IdInvoice > max ? character.IdInvoice : max,
      items[0].IdInvoice
    );
    return maxId + 1;
  }
}

/**
 * visualize the data from localstorage
 */
export function LoadInvoice() {
  return JSON.parse(localStorage.getItem("Invoice"));
}
