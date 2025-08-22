console.log("___Function-1___")

function launchBrowser(browserName) {
    if (browserName == "chrome") {
        console.log("Launched Browser name is Chrome")
    } else if (browserName == "edge") {
        console.log("Launched Browser name is Edge")
    } else {
        console.log("Launched Browser name is Firefox")
    }
}
launchBrowser("chrome")
//launchBrowser("edge")
//launchBrowser()

console.log("___Function-2___")

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Selected testType is " +testType)
            console.log("Critical Feature to Work")
            break
        case "sanity":
            console.log("Selected testType is " +testType)
            console.log("Specific Changes work as Expected")
            break
        case "regression":
            console.log("Selected testType is " +testType)
            console.log("new changes haven’t broken existing functionality")
            break
        default:
            console.log("Testing has been Complete")
    }
}
runTests("smoke")
//runTests("sanity")
//unTests("regression")
//runTests()