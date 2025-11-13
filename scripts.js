const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const buttonSubmit = document.getElementById("add-contact");
const cardContact = document.getElementById("contacts-list");
const search = document.getElementById("search");

search.addEventListener("input", (e) => {
  e.preventDefault();
  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.includes(search.value) ||
      contact.email.includes(search.value)
    );
  });

  renderContacts(filteredContacts);
});

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const inputNameValue = inputName.value.trim();
  const inputEmailValue = inputEmail.value.trim();

  contacts.push({
    name: inputNameValue,
    email: inputEmailValue,
  });
  renderContacts();
  saveContacts();
});

const contacts = JSON.parse(localStorage.getItem("meus_contatos")) || [];

function saveContacts() {
  localStorage.setItem("meus_contatos", JSON.stringify(contacts));
}

function renderContacts(list = contacts) {
  if (list.length === 0) {
    cardContact.innerHTML = "<p>Seus contatos aparecerão aqui!</p>";
  } else {
    cardContact.innerHTML = "";

    list.forEach((contact, index) => {
      const contactDiv = document.createElement("div");
      contactDiv.classList.add("card-contact");

      const nameEmailDiv = document.createElement("div");
      nameEmailDiv.classList.add("name-email");
      nameEmailDiv.innerHTML = `<h4>${contact.name}</h4><p>${contact.email}</p>`;

      const btnDiv = document.createElement("div");
      btnDiv.classList.add("btn");

      const editBtn = document.createElement("button");
      editBtn.classList.add("edit");
      editBtn.textContent = "Editar";

      editBtn.addEventListener("click", (e) => {
        if (editBtn.textContent === "Editar") {
          const nameInput = document.createElement("input");
          nameInput.value = contact.name;
          const emailInput = document.createElement("input");
          emailInput.value = contact.email;

          nameEmailDiv.innerHTML = "";
          nameEmailDiv.append(nameInput, emailInput);

          editBtn.textContent = "Salvar";
        } else {
          const newName =
            nameEmailDiv.querySelector("input:nth-child(1)").value;
          const newEmail =
            nameEmailDiv.querySelector("input:nth-child(2)").value;

          contacts[index].name = newName;
          contacts[index].email = newEmail;

          renderContacts();
          saveContacts()
        }
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete");
      deleteBtn.textContent = "Apagar";

      deleteBtn.addEventListener("click", (e) => {
        contacts.splice(index, 1);

        renderContacts();
        saveContacts()
      });

      btnDiv.append(editBtn, deleteBtn);
      contactDiv.append(nameEmailDiv, btnDiv);

      cardContact.appendChild(contactDiv);
    });
  }
}


renderContacts();