const prompt = require("prompt-sync")();

function printInfo() {
  console.log("Contact Management System");
  console.log("-------------");
  console.log("1. Add a Contact");
  console.log("2. Delete a contact");
  console.log("3. View contacts");
  console.log("4. Search Contacts");
  console.log("5. Exit");
}

printInfo();

function addContact() {
  const name = prompt("name: ");
  const email = prompt("Email: ");
  const contact = {
    name: name,
    email: email,
  };
  contacts.push(contact);
}

function deleteContact() {
  for(let i = 0; i < contacts.length; i++) {

  }
}

function searchContact() {}

function listContacts(contacts) {
  for (let contact of contacts) {
    console.log("#############");
    console.log("Name: " + contact.name);
    console.log("Email: " + contact.email);
  }
}

const contacts = [];
let keepGoing = true;
while (keepGoing) {
  const number = prompt("Enter an operation (1-5): ");

  switch (number) {
    case "1":
      addContact();
      break;

    case "2":
      deleteContact();
      break;

    case "3":
      listContacts(contacts);
      break;

    case "4":
      searchContact();
      break;

    case "5":
      keepGoing = false;
      break;

    default:
      console.log("Unknown.");
      break;
  }
}
