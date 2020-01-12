const { exec } = require("child_process");
const { describe, it, after, before } = require("mocha");
const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const expect = require("chai").expect;

/**
 * URL adresses
 */
let appUrl = "http://localhost:8081/";
//let appUrl = "https://frifood-2019.herokuapp.com/";
let seleniumUrl = "http://localhost:4445/wd/hub";

/**
 * Error handling
 */
process.on("unhandledRejection", (error) => {
    console.log(error);
});

(async function FriFood() {
    let browser, jwtToken;

    let waitForLoad = async (browser, casVS, xpath) => {
        await browser.wait(function() {
            return browser.findElements(By.xpath(xpath)).then(elements => {
                return elements[0];
            });
        }, casVS * 1000, `The page did not load in ${casVS} seconds.`);
    };

    try {
        browser = new Builder()
            .forBrowser("chrome")
            .setChromeOptions(new chrome.Options()
                .addArguments("start-maximized")
                .addArguments("disable-infobars")
                .addArguments("allow-insecure-localhost")
                .addArguments("allow-running-insecure-content")
            )
            .usingServer(seleniumUrl)
            .build();

        describe("Registration of a new user", async function() {
            this.timeout(30000);
            before(async function() {
                await browser.get(appUrl);
            });

            // it("Clean database", async function() {
            //    // go to /db and drop base
            // });

            it("User login", async function() {
               let url = await browser.findElement(
                   By.xpath("//a[contains(text(), 'prijava')]")
               );
               await expect(url).to.not.be.empty;
               await url.click();
            });
            it("User register", async function() {
                await waitForLoad(browser, 5,
                    "//button[contains(text(), 'prijava')]");
                let povezava = await brskalnik.findElement(
                    By.xpath("//a[contains(text(), 'registrirajte')]"));
                await expect(povezava).to.not.be.empty;
                await povezava.click();
            });
        });

    } catch (error) { console.log(new Error(error.message));
    } finally {}
})();