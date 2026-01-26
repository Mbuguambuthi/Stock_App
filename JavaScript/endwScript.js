const WEBHOOK_URL = "";

const routes = [
    { id: "ER01", department: "ENDW", name: "Al Barsha" },
    { id: "ER02", department: "ENDW", name: "Bur Dubai" },
    { id: "ER03", department: "ENDW", name: "Deira 1" },
    { id: "ER04", department: "ENDW", name: "Deira 2" },
    { id: "ER05", department: "ENDW", name: "Ajman" },
    { id: "ER06", department: "ENDW", name: "Sharjah 1" },
    { id: "ER07", department: "ENDW", name: "Sharjah 2" },
    { id: "ER08", department: "ENDW", name: "Credit Route Airport" },
    { id: "ER09", department: "ENDW", name: "Credit Route 1" },
    { id: "ER10", department: "ENDW", name: "Credit Route 2" },
    { id: "ER11", department: "ENDW", name: "Credit Route 3" },
    { id: "ER12", department: "ENDW", name: "Credit Route 4" },
    { id: "ER13", department: "ENDW", name: "Credit Route 5" },
    { id: "ER14", department: "ENDW", name: "Credit Route 6" },
    { id: "ER15", department: "ENDW", name: "Credit Route 7" },
    { id: "ER16", department: "ENDW", name: "Credit Route 8" },
    { id: "ER17", department: "ENDW", name: "Credit Route 9" },
    { id: "ER18", department: "ENDW", name: "Credit Route 10" }
];

const trips = [
    { key: "Trip", label: "1" },
    { key: "Trip", label: "2" },
    { key: "Trip", label: "3" },
    { key: "Trip", label: "4" },
    { key: "Trip", label: "5" }

];

const items = [
    { key: "1500ML Carton", label: "1500Ml Carton" },
    { key: "1500Ml Pack", label: "1500Ml Pack" },
    { key: "500Ml Carton", label: "500Ml Carton" },
    { key: "500Ml Pack", label: "500Ml Pack" },
    { key: "330Ml Carton", label: "330Ml Carton" },
    { key: "330Ml Pack", label: "330Ml Pack" },
    { key: "250Ml Carton", label: "250Ml Carton" },
    { key: "250Ml Pack", label: "250Ml Pack" },
    { key: "250Ml Cup", label: "250Ml Cup" },
    { key: "200(36)Ml Cup", label: "200(36)Ml Cup" },
    { key: "200(30)Ml Cup", label: "200(30)Ml Cup" },
    { key: "150Ml Cup", label: "150Ml Cup" },
    { key: "100Ml Cup", label: "100Ml Cup" },
    { key: "100Ml Tra", label: "100Ml Tray" },
    { key: "Tissue", label: "Tissue" },
    { key: "Cooler", label: "Cooler" }


];

const routeSelect = document.getElementById("endwRouteSelect");
routes.forEach(route => {
    const options = document.createElement("option");
    options.value = route.id;
    options.textContent = route.name;
    routeSelect.appendChild(options);
});

const tripSelect = document.getElementById("endwTripSelect");
trips.forEach(trip => {
    const tripOptions = document.createElement("option");
    tripOptions.value = trip.label;
    tripOptions.textContent = `Trip ${trip.label}`;
    tripSelect.appendChild(tripOptions);
});

const itemSelect = document.getElementById("endwItemSelect");
//const itemQty = document.getElementById("endwItemsQty");
items.forEach(item => {
    const itemOptions = document.createElement("option");
    itemOptions.value = item.label;
    itemOptions.textContent = item.label;
    itemSelect.appendChild(itemOptions);

});

const qtyInput = document.getElementById("endwItemsQty");
const addBtn = document.getElementById("addItemBtn");
const tableBody = document.getElementById("itemsTableBody");

let selectedItems = [];

addBtn.addEventListener("click", () => {

    const item = itemSelect.value;
    const qty = Number(qtyInput.value);

    if (!item || qty <= 0) {
        alert("Please select an item and place a quantity");
        return;

    }
    const existing = selectedItems.find(i => i.item === item);
    if (existing) {
        existing.qty += qty;
    } else {
        selectedItems.push({ item, qty });
    }

    renderItems();

    itemSelect.value = "";
    qtyInput.value = 1;
});

function renderItems() {
    tableBody.innerHTML = "";

    selectedItems.forEach((row, index) => {
        const tr = document.createElement("tr");

        const tdItem = document.createElement("td");
        tdItem.textContent = row.item;

        const tdQty = document.createElement("td");
        tdQty.textContent = row.qty;
        tdQty.classList.add("text-center")

        const tdAction = document.createElement("td");
        tdAction.classList.add("text-center");

        const btn = document.createElement("button");
        btn.className = "btn btn-danger btn-sm";
        btn.type = "button";
        btn.textContent = "X";

        btn.addEventListener("click", () => {
            selectedItems.splice(index, 1);
            renderItems();
        })

        tdAction.appendChild(btn);

        tr.append(tdItem, tdQty, tdAction);
        tableBody.appendChild(tr);


    });
};





