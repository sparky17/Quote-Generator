const quoteConatainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes=[];
// loading fun 
function loading(){
    loader.hidden=false;
    quoteConatainer.hidden=true;
}
function complete(){
    quoteConatainer.hidden=false;
    loader.hidden=true;
}



const apiUrl='https://type.fit/api/quotes';
function newQuote(){
    loading();   
    //Pick a randrom quote
    const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];  
    // check if auther field is blank the replace with ours 
    if(!quote.author){
        authorText.textContent= Sparky;
    }else{
        authorText.textContent= quote.author;
    }
    // check the quote lengh 
    if(quote.text.length > 50 ){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent= quote.text  ;
    complete();  
    
}
//  Get quotes from APi
async function getQuotes(){
    try {
        const response = await fetch(apiUrl);
        apiQuotes=await response.json();
        newQuote();
    }catch (error){
// alert(error+ " occured")
    }
}

// tweet code 
function tweetCode(){
    const twitterUrl=`https://twitter.com/intent/tweet?text= ${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, _blank);  
}

// Event listner 
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetCode);

//on load
getQuotes(); 