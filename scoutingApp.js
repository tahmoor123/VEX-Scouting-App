async function submitForm() {
    const formData = new FormData(document.getElementById("scoutingForm"));
    const data = Object.fromEntries(formData.entries());

    // Handle image upload if there’s a file
    const imageFile = document.getElementById("robotImage").files[0];
    if (imageFile) {
        // Code to upload image to Google Drive or another service and get URL
    }

    // Send data to Google Sheets
    try {
        const response = await fetch(AKfycbz19LHXKnRl0RrBNwupKt3jLZIqGma-iMjfFlsRXMoD, {
            method: 'POST',
            mode: 'no-cors', // Needed for Google Apps Script
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        alert("Scouting data submitted successfully!");
    } catch (error) {
        alert("There was an error submitting the form. Try again.");
        console.error(error);
    }
}
