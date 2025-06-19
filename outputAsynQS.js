async function fetchData() {
    console.log("1: Start");
 
    const result = await new Promise((resolve) => {
        console.log("2: Inside Promise");
        resolve("3: Promise Resolved");
    });
 
    console.log(result);
    console.log("4: End");
}
 
fetchData();
console.log("5: Outside async");

//////////////////////-------------------------////////////////////////////////---------------------------------////////////////////////////////////////

Promise.resolve().then(() => {
    console.log("1");
    setTimeout(() => console.log("2"), 0);
  }).then(() => {
    console.log("3");
  });
  
  console.log("4");
  
  ////////////////////-----------------------------------------///////////////////////////------------------------------------////////////////////////////////