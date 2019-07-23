let rootNode = document.getElementById('root');
let taskLimit = 10;
let input = document.getElementById('input');
let addBox = document.getElementById('add_box');
let ul = document.getElementById('list');
let lastArrayEl = 3;

function iNotComplete() {
  let i = document.createElement('i');
  i.setAttribute('class', 'material-icons');
  i.innerHTML = 'check_box_outline_blank';
  return i;
}

function itemCheck() {
  this.innerHTML = 'check_box';
}

function itemDelete() {
  this.parentElement.remove();
  document.getElementById('notification').innerHTML = '';
}

function iCreate() {
  let i = document.createElement('i');
  i.setAttribute('class', 'material-icons');
  i.innerHTML = 'create';
  return i;
}

function changeMode() {
  let input = document.createElement('input');
  input.setAttribute('id', 'newValue');
  return input;
}

function iSave() {
  let i = document.createElement('i');
  i.setAttribute('class', 'material-icons');
  i.setAttribute('id', 'save');
  i.innerHTML = 'save';
  return i;
}

function iDelete() {
  let i = document.createElement('i');
  i.setAttribute('class', 'material-icons');
  i.innerHTML = 'delete';
  return i;
}

let dragSrcEl = null;
let variable = null;

function dragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragEnter(e) {
  this.classList.add('over');
  variable = e;
}

function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragDrop(e) {
  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  this.childNodes[0].addEventListener('click', itemCheck);
  this.childNodes[lastArrayEl].addEventListener('click', itemDelete);
  return false;
}

function dragEnd(e) {
  let listItems = document.querySelectorAll('.draggable');
  [].forEach.call(listItems, function (item) {
    item.classList.remove('over');
  });
  this.style.opacity = '1';
  this.childNodes[0].addEventListener('click', itemCheck);
  this.childNodes[lastArrayEl].addEventListener('click', itemDelete);
  variable = e;
}

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}

let newLi = function (data) {
  if (document.getElementsByTagName('li').length < taskLimit) {
    let li = document.createElement('li');
    li.setAttribute('draggable', 'true');
    ul.appendChild(li);
    let p = document.createElement('p');
    let iCheckBox = li.appendChild(iNotComplete());
    iCheckBox.addEventListener('click', itemCheck);
    li.appendChild(p).innerHTML = data;
    input.value = null;
    let iChange = li.appendChild(iCreate());
    iChange.addEventListener('click', function () {
      li.innerHTML = '';
      li.appendChild(changeMode());
      li.appendChild(iSave());
      let save = document.getElementById('save');
      let newValue = document.getElementById('newValue');
      save.addEventListener('click',
        function () {
          if (newValue.value !== '') {
            li.innerHTML = '';
            li.appendChild(iCheckBox);
            li.appendChild(p).innerHTML = newValue.value;
            li.appendChild(iChange);
            li.appendChild(iDel);
          }
        });
    });
    let iDel = li.appendChild(iDelete());
    iDel.addEventListener('click', itemDelete);
    addEventsDragAndDrop(li);
  } else {
    document.getElementById('notification').innerHTML = 'Maximum item per list are created';
    input.value = null;
  }
};

addBox.addEventListener('click', function () {
  if (input.value !== '') {
    return newLi(input.value);
  }
});