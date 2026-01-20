
const WEBHOOK_URL = "https://default0765532a06c14f0f9f39394689f5f8.fe.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/70a0835f87bb41b4ad65224f0a1aba93/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=UqEtB3Hxzp4nmF59zXoQG1GTL6kdHGbMvFi9cPpbbnU";

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
  
    { key: "5 G Bottles", label: "5 G Bottles" },
    { key: "5 G Bottles", label: "5 G Full Bottles" },
    { key: "5 G Empty Bottles", label: "5 G Empty Bottles" },
    { key: "5 G Damaged Bottles", label: "5 G Damaged Bottles" }
   
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

const tripSelect = document.getElementById("tripSelect");
deliveryTrips.forEach(trip =>{
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
            trip: tripSelect.value,
            items: itemsPayload,
            driver: driver,
            Action: action,
            Enter_By: enteredBy
        };

       try{
            const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });


        if(!response.ok){
        alert("Submission FAILED!");
            
            return;
        };
               
        alert("Successfully Submitted");  
        deliveryForm.reset();
       }catch (error) {
    console.error(error);
    alert("Network error. Please try again.");
}
        
    }
);


// REMINDER:
// Finish the script above
// Add script upon the trigger of the Action option, a prompt is sent to the fixed route  mobile phone number with the option of accepting or rejecting the delivery. if accepted the filled values are submitted to the OneDrive Excel sheet if not an error is thrown.
