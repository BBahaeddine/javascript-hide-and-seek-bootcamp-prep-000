function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let elems = document.querySelectorAll('ul.ranked-list li');
  for(let i=0; i < elems.length; i++) {
    let num = parseInt(elems[i].innerHTML);
    elems[i].innerHTML = (num + n).toString();
  }
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div");
}