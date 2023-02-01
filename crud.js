const BASE_URL = 'https://63d43b6fc52305feff602c07.mockapi.io/api';

//Obtener todos los trabajos
const getJobs = () =>{
    fetch(`${BASE_URL}/jobs`)
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        renderJobs(data);
    })
}
getJobs();

//Renderizar los trabajos
const renderJobs = (jobs) =>{
    $('#jobs-container').innerHTML ='';
    //Renderizo lista de Jobs
    for (const {name, description, location, category, seniority, id} of jobs) {
        $('#jobs-container').innerHTML += 
        `<div class="card column is-3 m-5">
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
            <button class="button is-info is-small">See details</button>     
          </div>
        </div>
    </div>`
    }
}


const getJobForm = () =>{
    const job = {
        name: $('#job-title-input').value,
        description: $('#job-description-input').value,
        location: $('#job-location-input').value,
        category: $('#job-category-input').value,
        seniority: $('#job-seniority-input').value
    }
    return job;
}

//Crear un trabajo
const createJob = ()=>{
  const job = getJobForm();

  fetch(`${BASE_URL}/jobs`,{
    method: 'POST',
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(job),
  })
  .then((response) => response.json())
  .then((data)=>{
    console.log(data)
  })
  .finally(()=> location.href = "index.html")
  
}
