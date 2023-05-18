//Outputs the following message to the web console if js file is correctly linked
console.log("js file is linked correctly")

//Function implemented into html button which allows user to press it and be taken from the bottom to the top of the page
function toTop() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}