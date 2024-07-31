

const KEY = "feedback-form-state";
const feedbackForm = document.querySelector(".feedback-form");

let formData = { email: "", message: "" };


populateFormFromStorage();

feedbackForm.addEventListener('input', inputsHandler);
feedbackForm.addEventListener('submit', submitHandler);

function inputsHandler(event) {
    const { name, value } = event.target;
    formData[name] = value.trim();

    try {
        localStorage.setItem(KEY, JSON.stringify(formData));
    } catch (error) {
        console.log(error);
    }
}

function submitHandler(event) {
    event.preventDefault();
    const userEmail = event.currentTarget.elements.email.value.trim();
    const userMessage = event.currentTarget.elements.message.value.trim();

    if (!userEmail || !userMessage) {
        return alert("Please fill in all fields");
    }

    console.dir(formData);
    localStorage.removeItem(KEY);
    event.currentTarget.reset();
    formData = { email: "", message: "" }; 
}

function populateFormFromStorage() {
    try {
        const dataFromStorage = JSON.parse(localStorage.getItem(KEY));
        if (dataFromStorage) {
            formData = dataFromStorage;
            for (const key in dataFromStorage) {
                if (feedbackForm.elements[key]) {
                    feedbackForm.elements[key].value = dataFromStorage[key];
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}