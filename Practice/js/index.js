
// fibonacci numbers

// var fib = function (n){

//     let arr = [0,1]
   
//     for ( let i = 2 ; i<= n ; i++ ){
//        arr.push(arr[i-1]+ arr[i-2] )
//     }
//     console.log(arr)
//     return arr

// }

// fib(5)

// recursive solution

// const fib = function(n){

//     if(n <= 1) return n;

//     return fib(n-1) + fib(n-2);
// }

// console.log(fib(3));


// anagram 

// 1st approach

// const Anagram = function(s, t){

//      s = s.split('').sort().join('')
//      t= t.split('').sort().join('')

//      return s===t
// }


// find index of values which have sum equal to taget vallue


// const twoSum = function(nums, target){
  
    // for (let i =0; i < nums.length; i++){
    //     for (let j = i+ 1; j < nums.length; j++ ){
    //         if(nums[i] + nums[j] === target) return [i,j] 
    //     }
    // }

// 2nd approach

//     var obj = {}

//     for (let i =0; i <nums.length; i++){
//         var n = nums[i];
//         if(obj[target - n] >=0) {
//             return [obj[target -n], i]
//         }
//         else {
//             obj [n] = i;
//         }
//     }
// }

// console.log(twoSum([2,7,15,11], 26))

// max profit


const maxProfit = function (prices){

// 1st approach

     let globalProfit = 0;
    for (let i = 1; i < prices.length; i++ ){
        for (let j = i+1 ; j<prices.length; j++){
             let currentProfit = prices[j] - prices[i]
              if(currentProfit > globalProfit ) globalProfit = currentProfit;
        }
    }
    return globalProfit;

    // 2nd optimised Solution

    let minStock = prices[0] || 0;
    let profit = 0

    for (let i = 1; i < prices.length; i++) {
         if(prices[i] < minStock ) minStock = prices[i]
   
     
    profit = Math.max(profit, prices[i] - minStock )
}
    return profit
}

console.log(maxProfit([7,1,,4, 6,2]))