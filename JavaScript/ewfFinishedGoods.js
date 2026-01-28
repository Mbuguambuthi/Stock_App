const WEBHOOK_URL = "https://default0765532a06c14f0f9f39394689f5f8.fe.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/a28fb2ef059e4f989f2bac723f3dfb59/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=YEXzro55lFLfcnw8KXrKTgmR2k1zIaz0PH4hhcGvhd8";

const routes = [
    { id: "R001", name: "JAFZA" },
    { id: "R002", name: "Al Quoz 1" },
    { id: "R003", name: "Al Quoz 2" },
    { id: "R004", name: "Al Quoz 3" },
    { id: "R005", name: "Al Quoz 4" },
    { id: "R006", name: "Jabel Ali" },
    { id: "R007", name: "DIP 1" },
    { id: "R008", name: "DIP 2" },
    { id: "R009", name: "Sh. Zayed Road" },
    { id: "R010", name: "Jumeirah" },
    { id: "R011", name: "Al Qusais" },
    { id: "R012", name: "Rashidiya" },
    { id: "R013", name: "JLT" },
    { id: "R014", name: "Mirdiff" },
    { id: "R015", name: "Bur Dubai" },
    { id: "R016", name: "Deira 1" },
    { id: "R017", name: "Deira 2" },
    { id: "R018", name: "Karama" },
    { id: "R019", name: "DSO" },
    { id: "R020", name: "JVC" },
    { id: "R021", name: "Sharjah" },
    { id: "R022", name: "Sharjah 1" },
    { id: "R023", name: "Sharjah 2" },
    { id: "R024", name: "Abu Dhabi" },
    { id: "R025", name: "Jabel Ali 2" },
    { id: "R026", name: "DTC" },
    { id: "R027", name: "Ras AL Khor" },
    { id: "R028", name: "Van 1/Mobile App" },
    { id: "R029", name: "Aquanim" },
    { id: "R030", name: "Other" }
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
    { key: "5 G Bottles", label: "5 G Bottles" },
    { key: "Tissue", label: "Tissue" },
    { key: "Hot & Cold Dispenser(New)", label: "Hot & Cold Dispenser(New)" },
    { key: "Hot & Cold Dispenser(Old)", label: "Hot & Cold Dispenser(Old)" },
    { key: "PVC Dispenser/Matungi", label: "PVC Dispenser/Matungi" },
    { key: "Electric Water Pump", label: "Electric Water Pump" },
    { key: "Manual Water Pump", label: "Manual Water Pump" },
    { key: "Cup Holder", label: "Cup Holder" },
    { key: "8 Bottle Stand", label: "8 Bottle Stand" },
    { key: "12 Bottle Stand", label: "12 Bottle Stand" },
    { key: "32 Bottle Stand", label: "32 Bottle Stand" }
];

const deliveryTrips = [
    { key: "Trip", label: "1" },
    { key: "Trip", label: "2" },
    { key: "Trip", label: "3" },
    { key: "Trip", label: "4" },
    { key: "Trip", label: "5" },
    { key: "Trip", label: "6" }
];

const routeSelect = document.getElementById("routeSelect");
routes.forEach(route => {
    const option = document.createElement("option");
    option.value = route.id;
    option.textContent = route.name;
    routeSelect.appendChild(option)
});

const itemSelect = document.getElementById("itemSelect");
items.forEach(item => {
    const itemOptions = document.createElement("option");
    itemOptions.value = item.key.trim();
    itemOptions.textContent = item.label.trim();
    itemSelect.appendChild(itemOptions);

});

const qtyInput = document.getElementById("ewfItemsQty");
const addBtn = document.getElementById("addItemBtn");
const tableBody = document.getElementById("itemsTableBody");

let selectedItems = [];

addBtn.addEventListener("click", () => {

    const item = itemSelect.value.trim();
    const qty = Number(qtyInput.value);

    if (!item || qty <= 0) {
        alert("Please insert item and quantity");
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
    qtyInput.value = "";
});

function renderItems() {
    tableBody.innerHTML = "";

    selectedItems.forEach((row, index) => {
        const tr = document.createElement("tr");

        const tdItem = document.createElement("td");
        tdItem.textContent = row.item;

        const tdQty = document.createElement("td");
        tdQty.textContent = row.qty;
        tdQty.classList.add("text-center");

        const tdAction = document.createElement("td");
        tdAction.classList.add("text-center");

        const btn = document.createElement("button");
        btn.className = "btn btn-danger btn-sm"
        btn.type = "button";
        btn.textContent = "X"
        btn.addEventListener("click", () => {
            selectedItems.splice(index, 1);
            renderItems();
        });

        tdAction.appendChild(btn);

        tr.append(tdItem, tdQty, tdAction);
        tableBody.appendChild(tr);


    });
};


const tripSelect = document.getElementById("tripSelect");
deliveryTrips.forEach(trip => {
    const tripOptions = document.createElement("option");
    tripOptions.value = trip.label;
    tripOptions.textContent = `Trip ${trip.label}`;
    tripSelect.appendChild(tripOptions);
});

const deliveryForm = document.getElementById("deliveryForm");
deliveryForm.addEventListener(
    "submit",
    async (e) => {
        e.preventDefault();

        const selectedOption = routeSelect.options[routeSelect.selectedIndex];

        if (!selectedOption.value) {
            alert("Please Select a route");
            return;
        }

        const driver = document.getElementById("driverName").value.trim();
        const action = document.getElementById("action").value;
        const enteredBy = document.getElementById("user").value.trim();

        if (!driver || !enteredBy) {
            alert("Driver Name and Entered By are required");
            return;
        }

        if (!tripSelect.value) {
            alert("Please Select a trip");
            return;
        }

        if (selectedItems.length === 0) {
            alert("Enter at least one item quantity");
            return;
        }

        const itemsPayload = selectedItems.map(i => ({
            item_key: i.item,
            quantity: i.qty,
        }));


        const payload = {
            timestamp: new Date().toLocaleString("en-GB", { timeZone: "Asia/Dubai" }),
            route_ID: selectedOption.value,
            Trip: tripSelect.value,
            items: itemsPayload,
            driver: driver,
            Action: action,
            Enter_By: enteredBy
        };
        console.log(payload);


        try {
            //const submitBtn = document.querySelectorAll('[type = "submit"]');
            //submitBtn.disabled = true;

            const response = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });


            if (!response.ok) {
                //submitBtn.disabled = false;
                throw new error("Submission FAILED!");

                return;
            };

            alert("\u2705 Successfully Submitted");

            selectedItems.length = 0;
            renderItems();

            deliveryForm.reset();
        } catch (error) {
            console.error(error);
            alert("Network error. Please try again.");
        }

    });

