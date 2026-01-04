
const WEBHOOK_URL = "https://default0765532a06c14f0f9f39394689f5f8.fe.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/70a0835f87bb41b4ad65224f0a1aba93/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=UqEtB3Hxzp4nmF59zXoQG1GTL6kdHGbMvFi9cPpbbnU";

const routes = [
    { id: "R001", name: "JAFZA" },
    { id: "R002", name: "Al Quoz 1" },
    { id: "R003", name: "Al Quoz 2" },
    { id: "R004", name: "Al Quoz 3" },
    { id: "R005", name: "JAl Quoz 3" },
    { id: "R006", name: "Jabel Ali" },
    { id: "R007", name: "DIP 1" },
    { id: "R008", name: "DIP 2" },
    { id: "R009", name: "Sh. Zayed Road" },
    { id: "R010", name: "Jumeirah" },
    { id: "R011", name: "A Qusais" },
    { id: "R013", name: "Rashidiya" },
    { id: "R014", name: "JLT" },
    { id: "R015", name: "Mirdiff" },
    { id: "R016", name: "Bur Dubai" },
    { id: "R017", name: "Deira 1" },
    { id: "R018", name: "Deira 2" },
    { id: "R019", name: "Karama" },
    { id: "R020", name: "DSO" },
    { id: "R021", name: "JVC" },
    { id: "R022", name: "Sharjah" },
    { id: "R024", name: "Sharjah 1" },
    { id: "R025", name: "Sharjah 2" },
    { id: "R026", name: "Abu Dhabi" },
    { id: "R027", name: "Jabel Ali 2" },
    { id: "R028", name: "Ras AL Khor" },
    { id: "R029", name: "Van 1" },
    { id: "R029", name: "Van 1" },
    { id: "R030", name: "Aquanim" },
    { id: "R031", name: "Other" }
];

const items = [
    { key: "1.5_CTN", label: "1.5L Carton" },
    { key: "0.5_CTN", label: "0.5L Carton" },
    { key: "330_CTN", label: "330ml Carton" },
    { key: "250_CTN", label: "250ml Carton" },
    { key: "250ml Cup", label: "250ml Cup" },
    { key: "200(30)_CUP", label: "200ml(30) Cup" },
    { key: "200(36)_CUP", label: "200ml(36) Cup" },
    { key: "150_CUP", label: "150ml Cup" },
    { key: "100_CUP", label: "100ml Cup" },
    { key: "1.5L Cp", label: "1.5L Cp" },
    { key: "0.5L Cp", label: "0.5L Cp" },
    { key: "330ml Cp", label: "330ml Cp" },
    { key: "250ml Cp", label: "250ml Cp" },
    { key: "Cooler", label: "Cooler" },
    { key: "Tissue", label: "Tissue" },
    { key: "Stand", label: "Stand" },
    { key: "Holder", label: "Holder" },
    { key: "Pump", label: "Pump" },
    { key: "Matungi", label: "Matungi" }

];

const routeSelect = document.getElementById("routeSelect");
routes.forEach(route => {
    const option = document.createElement("option");
    option.value = route.id;
    option.textContent = route.name;
    routeSelect.appendChild(option)
});

const container = document.getElementById("itemContainer");
items.forEach(item => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-6";

    col.innerHTML = `
        <div class="card h-100 shadow-sm border-1">
            <div class="card-body p-2">
                <label class="form-label fw-semibold small text-muted">
                    ${item.label}
                </label>
                <input 
                    type="number" 
                    min="0" 
                    value="0" 
                    class="form-control text-center" 
                    data-key="${item.key}">
            </div>
        </div>
    `;

    container.appendChild(col);
});
document.getElementById("deliveryForm").addEventListener(
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

        const inputs = document.querySelectorAll("#itemContainer input[type='number']");
        const itemsPayload = [];

        inputs.forEach(input => {
            const Qty = Number(input.value);
            if (Qty > 0) {
                itemsPayload.push({
                    item_key: input.dataset.key,
                    quantity: Qty
                });
            }
        });

        if (itemsPayload.length === 0) {
            alert("Enter at least one item quantity");
            return;
        }

        const payload = {
            timestamp: new Date().toISOString(),
            route_ID: selectedOption.value,
            items: itemsPayload,
            driver: driver,
            Action: action,
            Enter_By: enteredBy
        };

        await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        alert("Submitted");
        deliveryForm.reset();
    }
);


// REMINDER:
// Finish the script above
// Add script upon the trigger of the Action option, a prompt is sent to the fixed route  mobile phone number with the option of accepting or rejecting the delivery. if accepted the filled values are submitted to the OneDrive Excel sheet if not an error is thrown.