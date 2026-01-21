let wallet_balance = 1000;
let current_holding = 0;
let stock_price = 0;
let round = 0;

const max = 120,min = 80;

function update_price(){
    const currentStockPrice =  Math.floor(Math.random() * (max - min + 1)) + min;
    return currentStockPrice;
}


function decide_action(currentStockPrice){
    let action = ""
    if(currentStockPrice < 90 ){
        // buy stock
        action  = "Buy";
       
    }else if(currentStockPrice > 110){
        //sell stock
        action = "Sell";
       
    }else{
        action = "Hold"
    }
    return action;
}

function executeTrade(action,stockPrice){
    if(action === "Buy"){
        if(wallet_balance > stockPrice){
            current_holding++;
            wallet_balance = wallet_balance-stockPrice;
        }
    }else if(action == "Sell"){
        if(current_holding > 0){
            wallet_balance+=stockPrice;
             current_holding--;
        }
        
    }
}

while(round<10){
    const stockPrice = update_price();
    const action = decide_action(stockPrice);
    executeTrade(action,stockPrice);
    console.log(`Round ${round+1}: Stock Price = ${stockPrice}  -> Action = ${action}  -> Balance = ${wallet_balance}  -> Holding = ${current_holding} `)
    round++;
}
