// what is promise??
// 1. promise are used to handle asynchronous operaiton 
// 2. for example making a call for api, and reading files from the disk, waiting for the user input.

// ***** why use promise ****
// for solve asynchronous operation are common
// avoid blocking the main thread
// simplifying code management..

// ***** what problem solved ****

// how to create a promise..
// 1) promise constructor having a only one parameter, which is call back..
// 2) callback is having a two parameters.
// 3) which is resolve (when promise is in success)
// 4) reject is called (when promise is in fail)

// Promise States
// -> Pending: has not begin operation yet
// -> Fulfilled: when operation resolve after its operation finished.
// -> Rejected: promise fails to complete its operation successfully..

// handled promise data
// 1) Resolve: then
// 2) Reject: catch
// 3) Finally: execute in all condition..like default..



// promise declaration..


const isCashAvailable = false;
const atmPromise = new Promise(function(resolve, reject){
  if(isCashAvailable)
    {
      const response={msg:"Cash is Available"};
      resolve(response);
    }
  else
    {
      const response={msg:"Cash is not available"};
      reject(response);
    }
})

// handled promise data
atmPromise.then(function(successRes){
  console.log(successRes.msg)
}).catch(function(failRes){
  console.log(failRes.msg)
}).finally(function(){
  console.log("promise state handled")
})

// 




// Utility function..
// For Each
// Then 
// Catch
// hasOwn Property
// const num = [3,452,4,2];

// num.forEach((item,index, aretr)=>{
//   arr[index]=item*10
// })

// console.log(num)

// EXAMPLE ONE 
// const isCashAvailable = false;

// const atmPromise = new Promise(function(resolve, reject){
//   if(isCashAvailable)
//     {
//       let response = {
//         message:"Cash widthdraw"
//       }
//       // return "Widthraw cash from bank"
//       // return respconsole.log("Best of luck of the next time");
//       resolve(response)
//     }
//   else
//     {
//       let response = {
//         message:"Cash not widthdrawl"
//       }
//       reject(response)
//     }
// })

// atmPromise.catch(function(successMsg){
//   console.log(successMsg.message)
// }).then(function(failMsg){
//   // throw new Error(failMsg)
//   console.log(failMsg.message) // use custom error like this..
// }).finally(function(){
//   throw new Error("Finally worked")
// })

// EXAMPLE TWO



// const score = 50;

// const gradePromise = new Promise(function(pass, fail){
//   if(score>80){
//     const result = {
//       message:"Pass with Grade A"
//     }
//     pass(result)
//   }
//   else if(score<=80 && score>60)
//     {
//       const result ={
//         message: "Pass with Grade B"
//       }
//       pass(result)
//     }
//   else if(score<=60 && score>40)
//     {
//       const result={
//         message:"Pass with Grade C"
//       }
//       pass(result)
//     }
//   else
//     {
//       const result={
//         message:"Fail with Grade D"
//       }
//       fail(result)
//     }
// })


// gradePromise.then(function(passData){
//   console.log(passData.message)
// }).catch(function(failData){
//   console.log(failData.message)
// }).finally(function(){
//   if(score<=40)
//     {
//       console.log("Best of luck of the next time")
//     }
//   else
//     {
//       console.log("Wow Congratulations :) ")
//     }
  
// })


// what is fetch
// modern and powerful way to make a network request. it allows you to request resources, data from api or file. handle the response asynchronously using promises.

// Fetch is promise which help is to capture data from external resources using endpoint.
// fetch > create promise > promise process.. 


// Promise declaration
function fetchData()
{
  // const rawData=[]
  const postPromise = fetch('https://jsonplaceholder.typicode.com/posts')
const postData = []
// How to handle promise
postPromise.then(function(rawJson){
  // console.log(rawJson.json())
  // second then is convert data into json format
  
  // 1. first promise is get the data
  // 2. second promise is convert the data into json format..
  
  // how many ways to fetch the data
  // best and one way that is fetch
  
  rawJson.json().then(function(data){
    // postData=data
    console.log(data.title)
    // document.getElementById("output").innerText=JSON.stringify(postData, null,2)
  })
}).catch(function(errMsg){
  console.log(errMsg)
})

}

fetchData()

// <html>
// </html>

// console.log(...postData)


























