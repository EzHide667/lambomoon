const tickers = [
    {
        name: "Binance Coin",
        ticker: "BNB",
        id="binancecoin",
        price: 333,
        tickDOM: "document.querySelector('#BNB')"
    },{
        name: "Pancakeswap Token",
        ticker: "CAKE",
        id="",
        price: 15,
        tickDOM: "document.querySelector('#CAKE')"
    },{
        name: "LamboMoon",
        ticker: "LAMBO",
        id="",
        price: 0,
        tickDOM: "document.querySelector('#LAMBO')"
    }
]
const tickerDiv = document.querySelector('#tickerDiv');
const newTicker = document.createElement('p');

tickers.forEach( () => {
    this.tickDOM.innerText = this.price;
});

