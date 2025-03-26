/**
 * Fetches a list of cities based on population range.
 * 
 * Yusuf, McMaster University, 2025
 */
window.addEventListener("load", function () {

    /**
     * Converts a city object to an HTML block for display.
     * @param {Object} city 
     */
    function updateTable(cities) {
        let tableBody = document.getElementById("results");
        tableBody.innerHTML = ""; // Clear previous results

        if (cities.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='3'>No cities found</td></tr>";
            return;
        }

        // Populate the table with city data
        for (let city of cities) {
            let row = document.createElement("tr");

            let nameCell = document.createElement("td");
            nameCell.textContent = city.Name;

            let countryCell = document.createElement("td");
            countryCell.textContent = city.CountryCode;

            let populationCell = document.createElement("td");
            populationCell.textContent = city.Population.toLocaleString();

            row.appendChild(nameCell);
            row.appendChild(countryCell);
            row.appendChild(populationCell);

            tableBody.appendChild(row);
        }
    }

    /**
     * Processes the retrieved city list and updates the page.
     * @param {Array} cities 
     */
    function success(cities) {
        updateTable(cities);
        let totalPopulation = 0;

        for (let i = 0; i < cities.length; i++) {
            totalPopulation += parseInt(cities[i].Population);
        }

        let avgPopulation = cities.length > 0 ? (totalPopulation / cities.length).toLocaleString() : "N/A";
        
        document.getElementById("summary").innerHTML = cities.length + 
            " cities found. Average Population: " + avgPopulation + ".";
    }

    document.getElementById("search-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let minPop = document.getElementById("min_population").value;
        let maxPop = document.getElementById("max_population").value;

        if (!minPop || !maxPop || minPop < 0 || parseInt(minPop) > parseInt(maxPop)) {
            document.getElementById("summary").innerHTML = "Please enter a valid population range.";
            return;
        }

        let url = "fetch.php?min_population=" + minPop + "&max_population=" + maxPop;
        console.log("Fetching:", url);  // Debugging

        fetch(url)
            .then(response => response.json())
            .then(success)
            .catch(error => {
                console.error("Error fetching data:", error);
                document.getElementById("summary").innerHTML = "<p style='color: red;'>An error occurred. Please try again.</p>";
            });
    });
});
