function fun() {
  let rows = document.getElementsByTagName('input')[0].value;
  let cols = document.getElementsByTagName('input')[1].value;

  let container = document.getElementByTagName('tableContainer'); 

  let table = document.createElement('table');

  for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < cols; j++) {
      let td = document.createElement('td');
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  container.appendChild(table);
}
