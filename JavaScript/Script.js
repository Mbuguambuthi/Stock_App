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
    { id: "R029", name: "Mobile App" },
    { id: "R030", name: "Distro Aquanim" },
    { id: "R031", name: "Distro Epic Fresh" },
    { id: "R032", name: "Cash Distro" },
    { id: "R033", name: "Credit Route 1" },
    { id: "R034", name: "Credit Route 2" },
    { id: "R035", name: "Credit Route 3" },
    { id: "R036", name: "Credit Route 4" },
    { id: "R037", name: "Credit Route 5" },
    { id: "R038", name: "Credit Route 6" },
    { id: "R039", name: "Credit Route 7" },
    { id: "R040", name: "Credit Route 8" },
    { id: "R041", name: "Credit Route 9" },
    { id: "R042", name: "Credit Route 10" },
    { id: "R043", name: "ENDW_Al Barsha" },
    { id: "R044", name: "ENDW_Bur Dubai" },
    { id: "R045", name: "ENDW_Airport" },
    { id: "R046", name: "ENDW_Deira 1" },
    { id: "R047", name: "ENDW_Deira 2" },
    { id: "R048", name: "ENDW_Sharjah 1" },
    { id: "R049", name: "ENDW_Sharjah  2" },
    { id: "R050", name: "ENDW_Ajman" },
    { id: "R051", name: "Distro MMGT" },
    { id: "R052", name: "Distro MFGT" },
    { id: "R053", name: "Distro Topspeed" },
    { id: "R054", name: "Distro Dhawaq" },
    { id: "R055", name: "Distro Almayah" },
    { id: "R056", name: "Distro" }
];

const items = [
    { department: "EWF", name: "1.5L Carton" },
    { department: "EWF", name: "0.5L Carton" },
    { department: "EWF", name: "330ml Carton" },
    { department: "EWF", name: "250ml Carton" },
    { department: "EWF", name: "250ml Cup" },
    { department: "EWF", name: "200ml(30) Cup" },
    { department: "EWF", name: "200ml(36) Cup" },
    { department: "EWF", name: "150ml Cup" },
    { department: "EWF", name: "100ml Cup" },
    { department: "EWF", name: "1.5L Cp" },
    { department: "EWF", name: "0.5L Cp" },
    { department: "EWF", name: "330ml Cp" },
    { department: "EWF", name: "250ml Cp" },
    { department: "EWF", name: "5 Gallon Bottles" },
    { department: "EWF", name: "5 Gallon Empty Bottles" },
    { department: "EWF", name: "5 Gallon Damaged Bottles" },
    { department: "EWF", name: "Hot and Cold Dispenser (NEW)" },
    { department: "EWF", name: "Hot and Cold Dispenser (OLD)" },
    { department: "EWF", name: "Tissue" },
    { department: "EWF", name: "Stand" },
    { department: "EWF", name: "Cup Holder" },
    { department: "EWF", name: "Electric Pump" },
    { department: "EWF", name: "Manual Pump" },
    { department: "EWF", name: "Matungi" },
    { department: "ENDW", name: "1.5L Carton" },
    { department: "ENDW", name: "0.5L Carton" },
    { department: "ENDW", name: "330ml Carton" },
    { department: "ENDW", name: "250ml Carton" },
    { department: "ENDW", name: "250ml Cup" },
    { department: "ENDW", name: "200ml(30) Cup" },
    { department: "ENDW", name: "200ml(36) Cup" },
    { department: "ENDW", name: "150ml Cup" },
    { department: "ENDW", name: "100ml Cup" },
    { department: "ENDW", name: "100ml Cup_Tray" },
    { department: "ENDW", name: "1.5L Cp" },
    { department: "ENDW", name: "0.5L Cp" },
    { department: "ENDW", name: "330ml Cp" },
    { department: "ENDW", name: "250ml Cp" },
    { department: "ENDW", name: "Tissue" },
    { department: "ENDW", name: "Cooler" }



];

const brands = [
    { id: "B000", name: "Emirates Water" },
    { id: "B001", name: "Hilton" },
    { id: "B002", name: "Natural" },
    { id: "B003", name: "Al Jaleeb" },
    { id: "B004", name: "Ramee Hotels" },
    { id: "B005", name: "Curio" },
    { id: "B006", name: "Byblos" },
    { id: "B007", name: "Dubai Eco-Friendly" },
    { id: "B008", name: "Eco-Friendly" },
    { id: "B009", name: "Park Regis Hotel" },
    { id: "B010", name: "Taj Exotica" },
    { id: "B011", name: "Taj JLT" },
    { id: "B012", name: "Flora" },
    { id: "B013", name: "Metropolitan" },
    { id: "B014", name: "Moscow" },
    { id: "B015", name: "Sofitel" },
    { id: "B016", name: "Restart Fitness" },
    { id: "B017", name: "Ajmal Perfume" },
    { id: "B018", name: "XO Club" },
    { id: "B019", name: "Burj Club" },
    { id: "B020", name: "DWTC Eco-Friendly" },
    { id: "B021", name: "Petrochemicals" }


];

const deliveryTrips = [
    { key: "Trip", label: "1" },
    { key: "Trip", label: "2" },
    { key: "Trip", label: "3" },
    { key: "Trip", label: "4" },
    { key: "Trip", label: "5" },
    { key: "Trip", label: "6" }
];

const subsidiary = document.getElementById("subSelect");
subsidiary.addEventListener("change", e => {
    const storeEwf = document.getElementById("storeEwf");
    const PET_B = document.getElementById("storeEndw");
    const ewfDamageReturn = document.getElementById("security");
    const endwDamageReturn = document.getElementById("storeDamages");
    //Remember to finalize this code;
    // The idea is on clicking and selecting a subsidiary option a specific item display and curated routes are put on display.
});

const routeSelect = document.getElementById("routeSelect");
routes.forEach(route => {
    const option = document.createElement("option");
    option.value = route.id;
    option.textContent = route.name;
    routeSelect.appendChild(option)
});

const loadOut = document.getElementById("loadOut");

const container = document.getElementById("itemContainer");
items.forEach(item => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-6";

    col.innerHTML = `
        <div class="card col h-100 shadow-sm border-1 d-none">
            <div class="card-body p-2">
                <label class="form-label fw-semibold small text-muted">
                    ${item.name}
                </label>
                <input 
                    type="number" 
                    min="0" 
                    value="0" 
                    class="form-control text-center" 
                    data-key="${item.department}">
            </div>
        </div>
    `;

    container.appendChild(col);
});//NOTE: REMEMBER YOU RENDERED THE DISPLAY NONE.

const brandSelect = document.getElementById("brandSelect");
brands.forEach(brand => {
    const brandOptions = document.createElement("option");
    brandOptions.value = brand.id;
    brandOptions.textContent = brand.name;
    brandSelect.appendChild(brandOptions);

});

const tripSelect = document.getElementById("tripSelect");
deliveryTrips.forEach(trip => {
    const tripOptions = document.createElement("option");
    tripOptions.value = trip.label;
    tripOptions.textContent = `Trip ${trip.label}`;
    tripSelect.appendChild(tripOptions);

});
tripSelect.addEventListener("change", async (e) => {
    if (routeSelect === tripSelect) {

    }

    // How do I approach this part so that if similar entry is made for a specific route, I want to alert the user that such an entry was done and submitted to Excel.

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
            loadOut: loadOut.value,
            trip: tripSelect.value,
            brand_ID: brandSelect.value,
            items: itemsPayload,
            driver: driver,
            Action: action,
            Enter_By: enteredBy,
            signature: actionSelect.dataset.signature,
            status: action === "Accept" ? "Pending Approval" : "Rejected"

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