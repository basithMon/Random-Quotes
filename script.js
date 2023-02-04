const quoteText =document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
copyBtn = document.querySelector(".copy"),
//instaBtn = document.querySelector(".instagram"),
quoteBtn = document.querySelector("button");

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText)
});

quoteBtn.addEventListener("click", randomQuote);