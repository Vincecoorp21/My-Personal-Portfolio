document.querySelector('.light').addEventListener('click', partylight);
document.querySelector('.dark').addEventListener('click', partydark);
document.querySelector('.darker').addEventListener('click', partydarker);

function partylight() {
  document.querySelector('body').style.backgroundColor = '#E4E9BE';
  document.querySelector('#contact').style.backgroundColor = 'white';
}
function partydark() {
  document.querySelector('body').style.backgroundColor = '#DDDDDD';
  document.querySelector('#contact').style.backgroundColor = 'white';
}
function partydarker() {
  document.querySelector('body').style.backgroundColor = '#525E75';
  document.querySelector('#contact').style.backgroundColor = 'white';
}
