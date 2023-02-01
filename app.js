const $ = (selector) => document.querySelector(selector);



let goToCreateJob = () => {
    $('#new-job-modal').classList.remove('is-hidden');
    $('#finder-jobs-view').classList.add('is-hidden');
}

let goToHome = () =>{
    $('#new-job-modal').classList.add('is-hidden');
    $('#finder-jobs-view').classList.remove('is-hidden');
}

//Funcionamiento link Create Job
$('#create-job-link').addEventListener('click', goToCreateJob)

//Volver a Home
$('#home-link').addEventListener('click', goToHome)


// Funcionamiento menú burguer
$("#navbar-burguer").addEventListener("click", () => {
    $("#navbar-burguer").classList.toggle("is-active");
    $("#navbar").classList.toggle("is-active");
  });


//Funcionamiento de Search
$('#search-button').addEventListener('click', getJobs);

//Funcionamiento ENVIAR en Create Job
$('#submit-create-job-button').addEventListener('click', (e) =>{
    e.preventDefault();
    createJob();
})