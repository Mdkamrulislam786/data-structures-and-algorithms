// javascript program for the above approach
function maxProfit(prices, size) {
  // maxProfit adds up the difference between
  // adjacent elements if they are in increasing order
  var maxProfit = 0;

  // The loop starts from 1
  // as its comparing with the previous
  for (i = 1; i < size; i++)
    if (prices[i] > prices[i - 1]) maxProfit += prices[i] - prices[i - 1];
  return maxProfit;
}

// Driver code

// stock prices on consecutive days
var price = [4, 2, 2, 2, 4];
var n = price.length;

// function call
console.log(maxProfit(price, n));

//SOL 2
// JavaScript program for the above approach

// This function finds the buy sell
// schedule for maximum profit

function stockBuySell(price, n) {
  // Prices must be given for at least two days
  if (n == 1) return;
  let maxProfit = 0;

  // Traverse through given price array
  let i = 0;
  while (i < n - 1) {
    // Find Local Minima
    // Note that the limit is (n-2) as we are
    // comparing present element to the next element
    while (i < n - 1 && price[i + 1] <= price[i]) i++;

    // If we reached the end, break
    // as no further solution possible
    if (i == n - 1) break;

    // Store the index of minima
    let buy = i++;

    // Find Local Maxima
    // Note that the limit is (n-1) as we are
    // comparing to previous element
    while (i < n && price[i] >= price[i - 1]) i++;

    // Store the index of maxima
    let sell = i - 1;

    console.log(`Buy on day: ${buy}  
			Sell on day: ${sell}<br>`);
    maxProfit += price[sell] - price[buy];
  }
  return maxProfit;
}

// Driver code

// Stock prices on consecutive days
let price = [100, 180, 260, 310, 40, 535, 695];
let n = price.length;

// Function call
stockBuySell(price, n);
