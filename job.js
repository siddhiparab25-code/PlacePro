let usersData = [];

// Load jobs when the page loads
window.onload = loadJobs;

function loadJobs() {

    fetch("https://www.arbeitnow.com/api/job-board-api")
        .then(response => response.json())
        .then(data => {

            usersData = data.data;   // Jobs are inside data.data
            displayJobs(usersData);

        })
        .catch(error => {

            console.log(error);
            document.getElementById("errorMsg").innerText = "Unable to load jobs.";

        });

}

function searchUser() {

    let search = document.getElementById("search").value.toLowerCase();

    let filteredJobs = usersData.filter(job =>

        job.title.toLowerCase().includes(search) ||
        job.company_name.toLowerCase().includes(search)

    );

    displayJobs(filteredJobs);

}

function displayJobs(jobs) {

    const container = document.getElementById("userData");

    container.innerHTML = "";

    if (jobs.length === 0) {

        container.innerHTML = "<h3>No jobs found.</h3>";
        return;

    }

    jobs.forEach(job => {

        container.innerHTML += `
            <div class="card">

                <h3>${job.title}</h3>

                <p><b>Company:</b> ${job.company_name}</p>

                <p><b>Job Type:</b> ${job.job_types.join(", ")}</p>

                <p><b>Location:</b> ${job.location}</p>

            </div>
        `;

    });

}