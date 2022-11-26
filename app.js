let linkedInArray = ["https://www.linkedin.com/in/amanbisht3368/", "https://www.linkedin.com/in/abhishekcs001/", "https://www.linkedin.com/in/rishabh-thakral-170a89215/", "https://www.linkedin.com/in/srijan-pandey010402/"];
document.getElementById("btn").addEventListener("click", showProfile);

function showProfile() {
    linkedInArray.filter((elm) => {
        let link = elm.concat("overlay/contact-info/")
        window.open(link);
    })
}


