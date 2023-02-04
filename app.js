const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


//Ocultar-Mostrar trabajos
let hideJobs = () =>{
    $('#jobs-container').classList.add('is-hidden');
}
let showJobs = () =>{
    $('#jobs-container').classList.remove('is-hidden');
    getJobs();
}

//Ocultar-Mostrar UN trabajo
let hideJob = () =>{
    $('#job-container').classList.add('is-hidden');
}
let showJob = () =>{
    $('#job-container').classList.remove('is-hidden');
}

//Ocultar-Mostrar Finder
let hideFinder = () =>{
    $('#finder-jobs-view').classList.add('is-hidden');
}
let showFinder = () =>{
    $('#finder-jobs-view').classList.remove('is-hidden');
}

let goToCreateJob = () => {
    $('#new-job-modal').classList.remove('is-hidden');
    $('#finder-jobs-view').classList.add('is-hidden');
    hideJobs();
    hideJob();
}

let goToEditJob = () =>{
    $('#new-job-modal').classList.remove('is-hidden');
}

let goToHome = () =>{
    $('#new-job-modal').classList.add('is-hidden');
    $('#finder-jobs-view').classList.remove('is-hidden');
    showJobs();
    hideJob();
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

// Funcionamiento Formulario en Create Job
$('#submit-create-job-button').addEventListener('click', (e) =>{
    e.preventDefault();
    createJob();
})
// $('#form-create-job').addEventListener('submit', (e) =>{
//     e.preventDefault();
//     createJob();
// })



