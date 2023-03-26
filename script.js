const btn = document.querySelector('button');

btn.addEventListener('click', addButton2);

function addButton2() {
    const btn2 = document.createElement('button');
    btn2.className = 'button button2';
    btn2.innerText = 'Click me!!';
    btn2.style.backgroundColor = 'green';
    btn2.style.marginTop = '5px';
    document.body.append(btn2);
    btn2.addEventListener('click', addButton3);

    btn.removeEventListener('click', addButton2);
    btn.addEventListener('click', changeList);
}

function addButton3() {
    const btn3 = document.createElement('button');
    btn3.className = 'button';
    btn3.innerText = 'Click me!!';
    btn3.style.backgroundColor = 'yellow';
    btn3.style.margin = '5px';
    document.body.append(btn3);
    btn3.addEventListener('click', changeList);
}

function changeList() {
    const parent = document.getElementById('list');
    let elList = document.createElement('li');
    //let textNode = document.createTextNode('new el list');
    elList.innerText = 'new el list 1';
    parent.append(elList);// вставка в конец
    //alert(1);
    elList.innerText = 'new el list 2';
    parent.prepend(elList);// вставка в в начало
    //alert(2);
    elList.innerText = 'new el list 3';
    parent.after(elList);// вставка в конец
    //alert(3);
    elList.innerText = 'new el list 4';
    parent.before(elList);// вставка в конец
    //alert(4);
    elList.innerText = 'new el list 5';
    let el2List = document.getElementById('el1');
    parent.appendChild(elList);
    //alert(5);
    parent.insertBefore(elList, el2List);// вставка в в середину


    const myNewClone = elList.cloneNode(true);
    //myNewClone.
    parent.prepend(myNewClone);

}

btn.addEventListener('click', test);

function test() {
    const link = document.createElement('a');
    const text = document.createTextNode('read more...');
    const hr = document.createElement('hr');

    link.href = 'index.html';
    link.appendChild(text);
    document.appendChild(link);
    document.appendChild(hr);
}









