import scoreAdd from './ScoreAdd';
import scoresRecent from './scoresRecent';
import refresh from './refresh';
import { scoresGet, gameID } from './api';
import './style.css';

const loadTable = () => {
  window.onload = () => {
    if (gameID()) {
      scoresGet(gameID).then((scores) => scoresRecent(scores));
    }
  };
};

scoreAdd();
refresh();
loadTable();