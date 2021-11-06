const listNav = document.querySelector('#listNav');
const addNav = document.querySelector('#addNav');
const contactNav = document.querySelector('#contactNav');

const listSection = document.querySelector('#listSection');
const addBookSection = document.querySelector('#addBookSection');
const contacts = document.querySelector('#contacts');

listNav.addEventListener('click', () => {
  listSection.classList.remove('closed');
  listSection.classList.add('open');
  addBookSection.classList.add('closed');
  contacts.classList.add('closed');
  listNav.style.color = 'grey';
  addNav.style.color = 'white';
  contactNav.style.color = 'white';
});

addNav.addEventListener('click', () => {
  listSection.classList.add('closed');
  addBookSection.classList.remove('closed');
  addBookSection.classList.add('open');
  contacts.classList.add('closed');
  addNav.style.color = 'grey';
  listNav.style.color = 'white';
  contactNav.style.color = 'white';
});

contactNav.addEventListener('click', () => {
  listSection.classList.add('closed');
  contacts.classList.remove('closed');
  contacts.classList.add('open');
  addBookSection.classList.add('closed');
  addNav.style.color = 'white';
  listNav.style.color = 'white';
  contactNav.style.color = 'grey';
});
