const getJobsFiltered = () => {
    
    fetch(`${BASE_URL}/jobs`)
      .then((response) => response.json())
      .then((jobs) => {
        renderJobs(jobsFiltered(jobs));
      });
  };


//Filtrar por Location
const filterLocation = (jobs, location) =>{
    return jobs.filter((job) => job.location === location);
}

//Filtrar por Seniority
const filterSeniority = (jobs, seniority) =>{
    return jobs.filter((job) => job.seniority === seniority);
}

//Filtrar por Seniority
const filterCategory = (jobs, category) =>{
    return jobs.filter((job) => job.category === category);
}

//Ejecutar Filtros
const jobsFiltered = (jobs) =>{
    let locationValue = $("#location-finder-input").value;
    let seniorityValue = $("#seniority-finder-input").value;
    let categoryValue = $("#category-finder-input").value;

    if(locationValue!='Location'){
        jobs = filterLocation (jobs, locationValue);
    }

    if(seniorityValue!='Seniority'){
        jobs = filterSeniority (jobs, seniorityValue);
    }

    if(categoryValue!='Category'){
        jobs = filterCategory (jobs, categoryValue);
    }

    return jobs
} 

