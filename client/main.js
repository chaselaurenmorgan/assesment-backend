
//This gives us access to button element with the id of complimentButton throuhg the DOM
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const saveQuoteBtn = document.getElementById("quoteForm")



//Functions uses axios library to make a get request to the below url. If the response is sucessful it will display i the alert box with the alert method
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const saveQuote = (e) =>{
    //stops the page from reloading 
     e.preventDefault() 

    //get the value of input element
    const quote = document.getElementById("quote").value 

    //more that 2 characters
    if (quote.length < 2) {
        alert("Please enter a quote with at least two characters.");
        return;
      }
      
    axios.post("http://localhost:4000/api/quote/",{quote})
    .then(res =>{
        const data = res.data
        alert(data)
    })
}






//Adds the eventlistner to the button which listens for the click and will call the getCompliment function once it is click 
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
//place the eventlistner on the form instead of the button
saveQuoteBtn.addEventListener('submit', saveQuote)