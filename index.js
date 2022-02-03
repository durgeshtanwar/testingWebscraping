const browserObject = require("./browser");
const scraperController = require("./pageController");

// start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

scraperController(browserInstance);
