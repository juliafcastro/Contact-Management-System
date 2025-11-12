const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const buttonSubmit = document.getElementById("add-contact");
const cardContact = document.getElementById("card-contact");



buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const inputNameValue = inputName.value.trim();
  const inputEmailValue = inputEmail.value.trim();

  contacts.push({
    name: inputNameValue,
    email: inputEmailValue,
  });
  console.log(contacts);
  renderContacts();
});

const contacts = [];

function renderContacts() {
  cardContact.innerHTML = '';

  contacts.forEach((contact) => {
    const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");

  const nameEmailDiv = document.createElement("div");
  nameEmailDiv.classList.add("name-email");
  nameEmailDiv.innerHTML = `<h4>${contact.name}</h4><p>${contact.email}</p>`;

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("btn");

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.textContent = "Editar";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "Apagar";

  btnDiv.append(editBtn, deleteBtn);
  contactDiv.append(nameEmailDiv, btnDiv);

  cardContact.appendChild(contactDiv);
  })

  
  
}

// function printInfo() {
//   console.log("Contact Management System");
//   console.log("-------------");
//   console.log("1. Add a Contact");
//   console.log("2. Delete a contact");
//   console.log("3. View contacts");
//   console.log("4. Search Contacts");
//   console.log("5. Exit");
// }

// printInfo();

// function addContact() {
//   const name = prompt("name: ") ;
//   const email = prompt("Email: ");
//   const contact = {
//     name: name,
//     email: email,
//   };
//   contacts.push(contact);
// }

// function deleteContact() {
//   for(let i = 0; i < contacts.length; i++) {

//   }
// }

// function searchContact() {}

// function listContacts(contacts) {
//   for (let contact of contacts) {
//     console.log("#############");
//     console.log("Name: " + contact.name);
//     console.log("Email: " + contact.email);
//   }
// }

// let contacts = [];
// let keepGoing = true;
// while (keepGoing) {
//   const number = prompt;

//   switch (number) {
//     case "1":
//       addContact();
//       break;

//     case "2":
//       deleteContact();
//       break;

//     case "3":
//       listContacts(contacts);
//       break;

//     case "4":
//       searchContact();
//       break;

//     case "5":
//       keepGoing = false;
//       break;

//     default:
//       console.log("Unknown.");
//       break;
//   }
// }
