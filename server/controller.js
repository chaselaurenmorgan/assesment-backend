module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },


    getFortune: (req, res) => {
        const fortunes = ["A fresh start will put you on your way.", "A lifetime friend shall soon be made.", "A pleasant surprise is waiting for you.","All the effort you are making will ultimately pay off.","Believe in yourself and others will too."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    saveQuote: (req,res) =>{
        let quotes = []
        
        const {quote} = req.body
        quotes.push(quote)

        res.status(200).send(`Quote "${quote}" has been saved successfully.`)
    }

}