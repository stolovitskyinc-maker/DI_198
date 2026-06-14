function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// calling (appears immediately)
// resolved (appears exactly 2 seconds later)
// Here is exactly what happens behind the scenes as JavaScript processes the code line by line:asyncCall() is invoked: The engine jumps into the asynchronous function execution block.First Log: console.log('calling') runs immediately and synchronously, printing 'calling' to your console.The await Pause: The code reaches let result = await resolveAfter2Seconds();.It calls resolveAfter2Seconds(), which fires a setTimeout background timer for 2000 milliseconds (2 seconds).The await keyword pauses the rest of the asyncCall function execution right there, yielding control back to the main JavaScript engine to keep the page responsive.The Promise Resolves: After 2 seconds pass, the timer finishes and triggers resolve('resolved').Second Log: The promise status changes to fulfilled. The string 'resolved' is assigned to your result variable. The function wakes up and executes console.log(result), printing 'resolved' to your console.