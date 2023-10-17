function peekaboo(a) {
  n = document.querySelectorAll('.artykuł');
  n.forEach((element) => {
    console.log(n);
    element.style.display = 'none';
  });
  document.getElementById(a).style.display = 'initial';
}
