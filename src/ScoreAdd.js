import { saveToApi, gameID } from './api';

const scoreAdd = () => {
  const addForm = document.querySelector('.form-add');
  const name = document.getElementById('name');
  const score = document.getElementById('score');

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveToApi(gameID, name.value, score.value)
      .then((response) => {
        if (response.result === 'Leaderboard score created correctly.') {
          window.location.reload();
        }
      });
  });
};

export default scoreAdd;