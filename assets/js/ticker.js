const tickers = [
    {
        name: "Bitcoin",
        ticker: "BTC",
        tickDOM: document.querySelector('#BNB')
    },
    {
        name: "Ethereum",
        ticker: "ETH",
        tickDOM: document.querySelector('#BNB')
    },
    {
        name: "Binance Coin",
        ticker: "BNB",
        tickDOM: document.querySelector('#BNB')
    },
    {
        name: "Pancakeswap",
        ticker: "CAKE",
        tickDOM: document.querySelector('#CAKE')
    },
    {
        name: "LamboMoon",
        ticker: "LAMBO",
        tickDOM: document.querySelector('#LAMBO')
    }
];

const call = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Cpancakeswap-token&vs_currencies=usd');
    const data = await res.json();
    console.log(data);
    // Console Watch
    console.log(tickers);
    //BTC Call
    tickers[0].price = data.bitcoin.usd;
    //ETH Call
    tickers[1].price = data.ethereum.usd;
    //BNB Call
    tickers[2].price = data.binancecoin.usd;
    //CAKE Call
    tickers[3].price = data['pancakeswap-token'].usd;
    //CAKE Call
    tickers[4].price = 0;
}



const update = async () => {
    await call();
    document.querySelector('#BNB').innerText = tickers[2].price;
    document.querySelector('#CAKE').innerText = tickers[3].price;
    document.querySelector('#LAMBO').innerText = tickers[4].price;
}

update();