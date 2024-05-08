// Async function to wait for a delay
async function waitForDelay() {
    console.log("Start");
    // Pause execution for 2 seconds (2000 milliseconds)
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("End");
}

// Call the async function
waitForDelay();
