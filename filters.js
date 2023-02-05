const getJobsFiltered = () => {
    let locationValue = $("#location-finder-input").value;
    let seniorityValue = $("#seniority-finder-input").value;
    let categoryValue = $("#category-finder-input").value;
  fetch(`${BASE_URL}/jobs`)
    .then((response) => response.json())
    .then((jobs) => {
      renderJobs(jobFiltered(jobs, locationValue, seniorityValue, categoryValue));
    });
};

const jobFiltered = (jobs, location, seniority, category) => {
    console.log(jobs)
    console.log(location)
  return jobs.filter(
    (job) =>         
        job.location === location// &&
        // job.seniority === seniority &&
        // job.category === category
      
  );
};
