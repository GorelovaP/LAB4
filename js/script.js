let table = document.getElementById("table");
let calc = 0;

document.querySelector(".delTop").addEventListener("click", deleteTop);

function deleteTop() {
    if (table.rows.length) {
        table.deleteRow(0);
    }
}

document.querySelector(".delBot").addEventListener("click", deleteBottom);

function deleteBottom() {
    let rowCount = table.rows.length;
    if (rowCount) {
        table.deleteRow(rowCount - 1);
    }
}

document.getElementById("myForm").addEventListener("change", function (e) {
    if (e.target.value === 'Строка') {
        let div = document.querySelector(".select1");
        let div2 = document.querySelector(".select2");
        div.style.display = "block";
        div2.style.display = "none";
    } else if (e.target.value === 'Cтолбец') {
        let div = document.querySelector(".select2");
        let div2 = document.querySelector(".select1");
        div.style.display = "block";
        div2.style.display = "none";
    }
})

function getCheckedRadioByName(name) {
    let a;
    let elements = document.getElementsByName(name);
    for (let el of elements) {
        if (el.checked) {
            a = el.value
        }
    }
    return a;
}

function getCheckedSelectByName(name) {
    let a;
    let elements = document.getElementsByName(name);
    for (let el of elements) {
        if (el.selected) {
            a = el.value;
        }
    }
    return a;
}

document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let firstChoice = getCheckedRadioByName("radio");
    if (firstChoice === "Строка") {
        let where = getCheckedSelectByName("option")
        let word = getCheckedSelectByName("option3")
        let columnCount = table.rows[0].cells.length;
        let tr = document.createElement('tr');
        for (let i = 0; i < columnCount; i++) {
            let td1 = document.createElement('td');
            td1.innerHTML = word;
            tr.appendChild(td1);
        }
        if (where === "Верх") {
            table.children[1].insertBefore(tr, table.children[1].childNodes[0]);
            calc++;
        } else {
            table.children[1].insertBefore(tr, table.children[0].childNodes[1]);
            calc++;
        }
    } else {
        {
            let where = getCheckedSelectByName("option2");
            let word = getCheckedSelectByName("option3");
            let trs = document.getElementsByTagName("tr");
            if (where === "Право") {
                for (let tr of trs) {
                    let td = document.createElement('td');
                    td.innerHTML = word;
                    tr.appendChild(td)
                }
                calc++;
            } else {
                for (let tr of trs) {
                    let td = document.createElement('td');
                    td.innerHTML = word;
                    tr.prepend(td);
                }
                calc++;
            }

        }
    }
})

document.querySelector(".show").addEventListener("click", show);
function show()
{
   let number= document.querySelector(".number");
   number.innerHTML= String(calc);
}