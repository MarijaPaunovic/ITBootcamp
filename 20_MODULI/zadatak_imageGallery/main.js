// import { generateList, generateItem  as generateListItem} from "./modules/list.js";
// import {generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js";

// let list = generateList(document.body);

// generateListItem(list, "./images/photo1.jpg");
// generateListItem(list, "./images/photo2.jpg");
// generateListItem(list, "./images/photo3.jpg");

// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// generateTableItem(tr, "./images/photo1.jpg");
// generateTableItem(tr, "./images/photo2.jpg");
// generateTableItem(tr, "./images/photo3.jpg");

// PRIMER 2 (svega)
import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

import * as Div from "./modules/div.js";

console.log(List);
console.log(Table);

let list = List.generateList(document.body);
List.generateItem(list, "./images/photo1.jpg");
List.generateItem(list, "./images/photo2.jpg");
List.generateItem(list, "./images/photo3.jpg");

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr, "./images/photo1.jpg");
Table.generateItem(tr, "./images/photo2.jpg");
Table.generateItem(tr, "./images/photo3.jpg");

let div = Div.generateDiv(document.body);
Div.generateDivItem(div, "./images/photo1.jpg");
Div.generateDivItem(div, "./images/photo2.jpg");
Div.generateDivItem(div, "./images/photo3.jpg");
