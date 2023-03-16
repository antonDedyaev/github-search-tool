export const renderInputValidity = () => {
  const input = document.querySelector('.search-input');
  input.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (input.value.length === 0) {
      input.classList.add('invalid');
      input.nextElementSibling.innerHTML = 'Запрос должен содержать хотя бы один символ';
    } else {
      input.classList.remove('invalid');
      input.nextElementSibling.innerHTML = 'Введите подстроку для поиска';
    }
  });
};

export const renderResults = (searchResults) => {
  const resultsContainer = document.querySelector('.results-container');
  resultsContainer.innerHTML = '';

  const resultsHeader = document.createElement('h2');

  if (searchResults.items.length === 0) {
    resultsHeader.innerHTML = 'Совпадений не найдено';
    resultsContainer.append(resultsHeader);
  } else {
    const table = document.createElement('table');
    table.className = 'results-table';

    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');

    const headRow = document.createElement('tr');
    const nameHead = document.createElement('th');
    nameHead.innerHTML = 'Название';
    const descriptionHead = document.createElement('th');
    descriptionHead.innerHTML = 'Описание';
    const languageHead = document.createElement('th');
    languageHead.innerHTML = 'Язык';
    const authorHead = document.createElement('th');
    authorHead.innerHTML = 'Автор';

    headRow.append(nameHead, descriptionHead, languageHead, authorHead);
    tableHead.append(headRow);

    const tableContent = Array.from(searchResults.items).map((item) => {
      const row = document.createElement('tr');
      const nameTd = document.createElement('td');
      const linkForName = document.createElement('a');
      linkForName.setAttribute('href', item.html_url);
      linkForName.setAttribute('target', '_blank');
      nameTd.append(linkForName);

      const descriptionTd = document.createElement('td');
      const languageTd = document.createElement('td');
      const authorTd = document.createElement('td');

      linkForName.innerHTML = item.name;
      descriptionTd.innerHTML = item.description || 'none';
      languageTd.innerHTML = item.language || 'none';
      authorTd.innerHTML = item.owner.login;

      row.append(nameTd, descriptionTd, languageTd, authorTd);
      return row;
    });

    tableBody.append(...tableContent);
    table.append(tableHead, tableBody);

    resultsHeader.innerHTML = 'Найденные совпадения';
    resultsContainer.append(resultsHeader, table);
  }
};
