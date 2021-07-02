const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.basename('D:/node-hw-1/contacts.json');
console.log(contactsPath);

async function listContacts() {
  const file = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(file);
  console.log(contacts);
}

async function getContactById(contactId) {
  const file = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(file);
  const contact = contacts.find(contact => contact.id === Number(contactId));
  console.log(contact);
}

async function removeContact(contactId) {
  const file = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(file);
  const delContacts = contacts.filter(
    contact => contact.id !== Number(contactId),
  );
  fs.writeFile(contactsPath, JSON.stringify(delContacts), 'utf-8', error => {
    if (error) {
      console.log(error.massage);
    }
  });
  console.log(delContacts);
}

async function addContact(name, email, phone) {
  const file = await fs.readFile(contactsPath, 'utf-8');
  const contacts = JSON.parse(file);
  const newContacts = {
    name,
    email,
    phone,
  };
  contacts.push(newContacts);

  fs.writeFile(contactsPath, JSON.stringify(contacts), 'utf8', error => {
    if (error) {
      console.log(error.message);
    }
  });
  console.log(contacts);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
