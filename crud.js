const BASE_URL = "https://63d43b6fc52305feff602c07.mockapi.io/api";

//Obtener todos los trabajos
const getJobs = () => {
  fetch(`${BASE_URL}/jobs`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderJobs(data);
    });
};
getJobs();

//Renderizar los trabajos
const renderJobs = (jobs) => {
  $("#jobs-container").innerHTML = "";
  //Renderizo lista de Jobs
  for (const { name, description, location, category, seniority, id } of jobs) {
    $("#jobs-container").innerHTML += `<div class="card column is-3 m-5">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${name}</p>
            </div>
          </div>
      
          <div class="content">
            <p>
                <span>${description}</span>
            </p>
            <div class="tags">
                <span class="tag is-warning is-light">${location}</span>
                <span class="tag is-warning is-light">${category}</span>
                <span class="tag is-warning is-light">${seniority}</span>
            </div> 
            <button class="button is-info is-small button-see-datails" data-id="${id}">See details</button>     
          </div>
        </div>
    </div>`;
  }
  //Funcionamiento See Details
  for (const button of $$(".button-see-datails")) {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      console.log(id);
      getJob(id)
    });
  }
};

const getJobForm = () => {
  const job = {
    name: $("#job-title-input").value,
    description: $("#job-description-input").value,
    location: $("#job-location-input").value,
    category: $("#job-category-input").value,
    seniority: $("#job-seniority-input").value,
  };
  return job;
};

//Renderizar UN trabajo
const renderJob = (job) =>{
  $('#job-container').innerHTML = '';

  const { name, description, location, category, seniority, id } = job;

  $('#job-container').innerHTML = 
  `<div class="card column is-4 m-5 has-text-centered">
  <div class="card-content">
      <div class="media">
          <div class="media-content">
              <p class="title is-4">${name}</p>
          </div>
      </div>

      <div class="content">
          <p>${description}
          </p>
          <div class="tags is-centered">
              <span class="tag is-warning is-light">${location}</span>
              <span class="tag is-warning is-light">${category}</span>
              <span class="tag is-warning is-light">${seniority}</span>
          </div>
          <!-- Botones  -->
          <div class="field is-grouped is-grouped-centered mt-6">
              <p class="control">
                  <button class="button is-success" id="edit-job-button" data-id="${id}">
                      Edit Job
                  </button>
              </p>
              <p class="control">
                  <button class="button is-danger" id="delete-job-button" data-id="${id}">
                      Delete Job
                  </button>
              </p>
          </div>
      </div>
  </div>
</div>`

  //Funcionamiento Delete Job
  $('#delete-job-button').addEventListener('click', ()=>{
    deleteJob(id);
  })
}

//CREAR un trabajo
const createJob = () => {
  const job = getJobForm();

  fetch(`${BASE_URL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(job),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .finally(() => (location.href = "index.html"));
};

// ELIMINAR un trabajo
const deleteJob = (id) => {
  fetch(`${BASE_URL}/jobs/${id}`, {
    method: "DELETE",
  })
  .finally(() => (location.href = "index.html"));
};

//OBTENER un trabajo
const getJob = (id) => {
  fetch(`${BASE_URL}/jobs/${id}`)
    .then((response) => response.json())
    .then((job) => {
      console.log(job);
      renderJob(job);
    });
};
