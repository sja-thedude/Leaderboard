const scoresRecent = (scores) => {
  const table = document.querySelector('.table-score-board');

  scores.forEach((data) => {
    const tr = document.createElement('tr');
    tr.className = 'row-table';
    const td = document.createElement('td');
    td.className = 'data-table';
    td.innerHTML = `${data.user}: ${data.score}`;

    tr.appendChild(td);
    table.appendChild(tr);
  });
};

export default scoresRecent;