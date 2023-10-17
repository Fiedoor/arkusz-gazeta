function peekaboo(a) {
  n = document.querySelectorAll('.artykuł');
  n.forEach((element) => {
    element.style.display = 'none';
  });
  document.getElementById(a).style.display = 'initial';
}
