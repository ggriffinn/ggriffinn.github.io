var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    status.innerHTML = "Thanks for your submission and we will get back to you shortly! You can also reach out to us directly via email, hei@griffinphotography.no";
    form.reset()
    }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form. Feel free to email us directly at hei@griffinphotography.no"
    });
}
form.addEventListener("submit", handleSubmit)
