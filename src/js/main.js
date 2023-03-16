import { renderInputValidity, renderResults } from './view.js';

const app = () => {
  const searchForm = document.querySelector('.search-form');

  const substSearchHandler = async (e) => {
    e.preventDefault();
    const baseURL = 'https://api.github.com/search/repositories';
    const searchedSubstr = searchForm.firstElementChild.value;
    const encodedSubstr = encodeURIComponent(`${searchedSubstr} in:name`);

    const response = await fetch(`${baseURL}?q=${encodedSubstr}&per_page=10`);
    if (!response) {
      console.log(response.status);
      return null;
    }
    const result = await response.json();
    return renderResults(result);
  };

  searchForm.addEventListener('submit', substSearchHandler);

  renderInputValidity();
};

export default app;
