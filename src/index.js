import './style.css';

const dataScore = [
  { name: 'name', score: 100 },
  { name: 'name', score: 53 },
  { name: 'name', score: 67 },
  { name: 'name', score: 51 },
  { name: 'name', score: 23 },
  { name: 'name', score: 98 },
];

function tableLoad() {
  const table = document.querySelector('.table-score-board');

  dataScore.forEach((data) => {
    const tr = document.createElement('tr');
    tr.className = 'row-table';
    const td = document.createElement('td');
    td.className = 'data-table';
    td.innerHTML = `${data.name}: ${data.score}`;

    tr.appendChild(td);
    table.appendChild(tr);
  });
}

tableLoad();