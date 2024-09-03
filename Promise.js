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