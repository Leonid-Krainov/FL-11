const rootNode = document.getElementById('root');

const todoItems = [{
  isDone: false,
  id: 12345,
  description: 'Todo 1'
}];
let doneItems = [];
let creator = function (tag, text) {
  let created = document.createElement(tag);
  created.innerHTML = text;
  return created;
};

let mainPage = function () {
  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }
  let title = creator('h2', 'Simple TODO application');
  rootNode.appendChild(title);
  let button = creator('button', '');
  rootNode.appendChild(button);
  let linkToPage2 = creator('a', 'Add new task');
  linkToPage2.setAttribute('href', '#/addNew/' + todoItems.length);
  button.appendChild(linkToPage2);
  let emptyText = creator('p', 'TODO is empty');
  rootNode.appendChild(emptyText);
  let minimalLength = 0;
  let items = todoItems.concat(doneItems);
  if (items.length > minimalLength) {
    emptyText.setAttribute('class', 'hidden');
    let list = creator('ul', '');
    rootNode.appendChild(list);
    let i = 0;
    for (; i < items.length; i++) {
      let item = creator('li', '');
      item.setAttribute('id', i);
      rootNode.appendChild(item);
      let check = creator('button', '');
      item.appendChild(check);
      check.setAttribute('class', items[i].isDone);
      check.addEventListener('click', function () {
        if (check.classList[0] === 'false') {
          items[check.parentNode.id].isDone = true;
          let currentItem = todoItems.splice(check.parentNode.id, 1);
          doneItems.push(currentItem[0]);
          mainPage();
        } else {
          items[check.parentNode.id].isDone = false;
          doneItems.forEach((element, i) => {
            if (element.id === parseInt(check.parentNode.id)) {
              let currentItem = doneItems.splice(i, 1);
              todoItems.push(currentItem[0]);
              return;
            }
          });
          mainPage();
        }
      });
      let p = creator('p', items[i].description);
      p.addEventListener('click', function () {
        if (p.previousSibling.classList[0] === 'true') {
          alert("Error! You can't edit already done item")
        } else {
          modifyPage(p,todoItems);
        }
      });
      item.appendChild(p);
      let del = creator('button', '');
      del.setAttribute('class', 'remove');
      del.addEventListener('click', function () {
        todoItems.splice(del.parentNode.id, 1);
        if (todoItems.length) {
          emptyText.removeAttribute('class', 'hidden');
        }
        mainPage();
      });
      item.appendChild(del);
    }
  } else {
    emptyText.removeAttribute('class', 'hidden');
  }
};
mainPage();

let addNew = function (suffix) {
  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }
  let title = creator('h2', 'Add task');
  rootNode.appendChild(title);
  let input = creator('input', '');
  rootNode.appendChild(input);
  let div = creator('div', '');
  rootNode.appendChild(div);
  let buttonC = creator('button', '');
  div.appendChild(buttonC);
  let linkTo1 = creator('a', 'Cancel');
  linkTo1.setAttribute('href', '#');
  buttonC.appendChild(linkTo1);
  let buttonS = creator('button', 'Save changes');
  div.appendChild(buttonS);
  buttonS.onclick = function () {
    let item = {
      isDone: false,
      id: suffix,
      description: input.value
    };
    todoItems.push(item);
    mainPage();
  };
};
let modifyPage = function (elem, arr) {
  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }
  let title = creator('h2', 'Modify item');
  rootNode.appendChild(title);
  let input = creator('input', '');
  input.setAttribute('placeholder', '');
  rootNode.appendChild(input);
  let div = creator('div', '');
  rootNode.appendChild(div);
  let buttonC = creator('button', '');
  div.appendChild(buttonC);
  let linkTo1 = creator('a', 'Cancel');
  linkTo1.setAttribute('href', '#');
  buttonC.appendChild(linkTo1);
  buttonC.onclick = function() {
    mainPage();
  };
  let buttonS = creator('button', 'Save changes');
  buttonS.onclick = function () {
    arr.forEach(el => {
      if (el.description === input.value) {
        alert("Error! You can't add already exist item");
        return mainPage();
      } 
    });
    arr.forEach(el => {
      if (el.description === elem.innerHTML) {
        el.description = input.value;
        mainPage();
      }
    });
  };
  div.appendChild(buttonS);
};

function locationHashChanged() {
  if (location.hash === '#/addNew/' + todoItems.length) {
    addNew(todoItems.length);
  } else if (location.hash === '#modifyPage') {
    modifyPage();
  } else {
    mainPage();
  }
}
window.onhashchange = locationHashChanged;
