function submitForm() {
    const form = document.getElementById('materialForm');
    const formData = new FormData(form);
    let queryString = '?';

    // Loop through each form input and create a query string with the selected options
    formData.forEach((value, key) => {
        if (value && value !== '') {  // Skip empty or undefined values
            if (Array.isArray(value)) {
                value.forEach(val => {
                    queryString += `${key}=${encodeURIComponent(val)}&`;
                });
            } else {
                queryString += `${key}=${encodeURIComponent(value)}&`;
            }
        }
    });

    // Collect checked checkboxes for field applications
    const fieldApplications = [];
    const checkboxes = document.querySelectorAll('input[name="material3"]:checked');
    checkboxes.forEach(checkbox => {
        fieldApplications.push(checkbox.value);
    });

    // Only append material3 to the query string if there are selected field applications
    if (fieldApplications.length > 0) {
        queryString += `material3=${fieldApplications.join(',')}&`;
    }

    // Remove the last '&' from the query string if it exists
    queryString = queryString.endsWith('&') ? queryString.slice(0, -1) : queryString;

    // Open a new window to display the selected options
    window.open('result.html' + queryString, '_blank');
}
