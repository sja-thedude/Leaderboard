const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const createGame = async () => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name: 'newGame',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await response.json();
    const gameId = json.result.split(' ')[3];
    localStorage.setItem('gameID', JSON.stringify(gameId));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const gameID = () => {
  const id = JSON.parse(localStorage.getItem('gameID'));

  if (!id) {
    createGame();
  }

  return id;
};

export const saveToApi = async (gameID, user, score) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID()}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const scoresGet = async (gameID) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID()}/scores/`);
    const data = await response.json();
    return data.result;
  } catch (error) {
    throw new Error(error.message);
  }
};