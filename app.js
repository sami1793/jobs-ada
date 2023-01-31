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



