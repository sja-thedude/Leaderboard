const refresh = () => {
  const btnRefresh = document.querySelector('.refresh');

  btnRefresh.addEventListener('click', () => {
    window.location.reload();
  });
};

export default refresh;