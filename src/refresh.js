const refresh = () => {
  const refBtn = document.querySelector('.refresh');

  refBtn.addEventListener('click', () => {
    window.location.reload();
  });
};

export default refresh;