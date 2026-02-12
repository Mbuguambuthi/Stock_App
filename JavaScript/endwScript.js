const WEBHOOK_URL = "https://default0765532a06c14f0f9f39394689f5f8.fe.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/0b1d44d86156420dbdf74622448fbba2/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=HZdRN9n39GwUE4IU6IPu0aK5nwPtbfQXIQsm237qwXw";

const routes = [
    { id: "ER01", department: "ENDW", name: "Al Barsha/ Quoz" },
    { id: "ER02", department: "ENDW", name: "Ajman" },
    { id: "ER03", department: "ENDW", name: "Aweer" },
    { id: "ER04", department: "ENDW", name: "Bur Dubai" },
    { id: "ER05", department: "ENDW", name: "Deira 1" },
    { id: "ER06", department: "ENDW", name: "Deira 2" },
    { id: "ER07", department: "ENDW", name: "International City" },
    { id: "ER08", department: "ENDW", name: "Sharjah 1" },
    { id: "ER09", department: "ENDW", name: "Sharjah 2" },
    { id: "ER10", department: "ENDW", name: "Credit Route Airport" },
    { id: "ER11", department: "ENDW", name: "Credit Route Abu Dhabi" },
    { id: "ER12", department: "ENDW", name: "Credit Route Al Ain" },
    { id: "ER13", department: "ENDW", name: "Credit Route Dubai" },
    { id: "ER14", department: "ENDW", name: "Credit Route Sharjah" },
    { id: "ER15", department: "ENDW", name: "Lootah Premium Foods" },
    { id: "ER16", department: "ENDW", name: "ENDW Distro" }

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

const brandInput = document.getElementById("endwBrands");
const qtyInput = document.getElementById("endwItemsQty");
const addBtn = document.getElementById("addItemBtn");
const tableBody = document.getElementById("itemsTableBody");

let selectedItems = [];

addBtn.addEventListener("click", () => {

    const item = itemSelect.value;
    const brand = brandInput.value.trim();
    const qty = Number(qtyInput.value);


    if (!item || !brand || qty <= 0) {
        alert("Please select an item, enter a brand and place a quantity");
        return;

    }
    const existing = selectedItems.find(i => i.item === item);
    if (existing === brand) {
        // existing.brand = brand;
        existing.qty = qty;
    } else {
        selectedItems.push({ item, brand, qty });
    }

    renderItems();

    itemSelect.value = "";
    brandInput.value = "";
    qtyInput.value = 0;
});

function renderItems() {
    tableBody.innerHTML = "";

    selectedItems.forEach((row, index) => {
        const tr = document.createElement("tr");

        const tdItem = document.createElement("td");
        tdItem.textContent = row.item;

        const tdbrand = document.createElement("td");
        tdbrand.textContent = row.brand;
        tdbrand.classList.add("text-center");
        tdbrand.contentEditable = "true";

        const tdQty = document.createElement("td");
        tdQty.textContent = row.qty;
        tdQty.classList.add("text-center");
        tdQty.contentEditable = "true";
        tdQty.addEventListener("blur", () => {
            const newValue = Number(tdQty.textContent.trim());
            //Validation
            if (isNaN(newValue) || newValue < 0) {
                alert("Invalid Quantity");
                tdQty.textContent = row.qty;
                return;

            };
            selectedItems[index].qty = newValue;

        });


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

        tr.append(tdItem, tdbrand, tdQty, tdAction);
        tableBody.appendChild(tr);


    });
};

const endwForm = document.getElementById("distributionForm");
endwForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const selectedOption = routeSelect.options[routeSelect.selectedIndex];

    if (!selectedOption.value) {
        alert("Please select a route");
        return;
    }

    const driver = document.getElementById("endwDriver").value.trim();
    const loadOut = Number(document.getElementById("loadOut").value);
    const action = document.getElementById("actionSelect").value;
    const sign = "";//document.getElementById("signature").value.trim()
    const user = document.getElementById("user").value.trim();

    if (!driver || !user) {
        alert("Please enter the values for both Driver and User");
        return;
    }

    if (!tripSelect.value) {
        alert("Please Select a trip");
        return;
    }

    if (selectedItems.length === 0) {
        alert("Please enter atleast one quantity");
        return;

    }

    const itemsPayload = selectedItems.map(i => ({
        item_key: i.item,
        brand: i.brand,
        quantity: i.qty,
    }));

    const payload = {
        timestamp: new Date().toISOString(),
        route_ID: selectedOption.value,
        driver: driver,
        Trip: tripSelect.value,
        loadOut: loadOut,
        items: itemsPayload,
        Action: action,
        sign: sign,
        user: user
    };
    console.log(payload);

    const submitBtn = document.getElementById("formBtn");

    try {
        submitBtn.disabled = true;

        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });


        if (!response.ok) {
            throw new Error("Submission failed");
        };

        alert("\u2705\u2705 Successfully Submitted");

        selectedItems.length = 0;
        renderItems();

        endwForm.reset();
    } catch (error) {
        console.error(error);
        alert("Network error. Please try again.");
    } finally {
        submitBtn.disabled = false;

    }

});








