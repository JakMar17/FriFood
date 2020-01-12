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


        describe("Registration and login of a new user", async function() {
            this.timeout(30000);
            before(async function() {
                await browser.get(appUrl);
            });

            // it("Clean database", async function() {
            //    // go to /db and drop base
            // });

            it("Open dropdown", async function() {
                let url = await browser.findElement(
                    By.id("navbarDropdown")
                );
                await expect(url).to.not.be.empty;
                await url.click();
            });

            it("Go to register page", async function() {
                let url = await browser.findElement(
                    By.xpath("//a[contains(text(), 'REGISTRACIJA')]")
                );
                await expect(url).to.not.be.empty;
                await url.click();
            });

            it("Input data and register", async function() {
                let name = browser.findElement(By.id('name'));
                await expect(name).to.not.be.empty;
                await name.sendKeys("David");

                let surname = browser.findElement(By.id('surname'));
                await expect(surname).to.not.be.empty;
                await surname.sendKeys("Kralj");

                let email = browser.findElement(By.id('email'));
                await expect(email).to.not.be.empty;
                await email.sendKeys("random.email@gmail.com");

                let passwd1 = browser.findElement(By.id('passwd1'));
                await expect(passwd1).to.not.be.empty;
                await passwd1.sendKeys("12345");

                let passwd2 = browser.findElement(By.id('passwd2'));
                await expect(passwd2).to.not.be.empty;
                await passwd2.sendKeys("12345");

                let path = await browser.findElement(
                    By.id('register')
                );
                await expect(path).to.not.be.empty;
                await path.click();
            });

            it("Open dropdown", async function() {
                let url = await browser.findElement(
                    By.id("navbarDropdown")
                );
                await expect(url).to.not.be.empty;
                await url.click();
            });

            it("Go to login page", async function() {
                let url = await browser.findElement(
                    By.xpath("//a[contains(text(), 'PRIJAVA')]")
                );
                await expect(url).to.not.be.empty;
                await url.click();
            });

            it("Input data and login", async function() {
                let email = browser.findElement(By.id('email'));
                await expect(email).to.not.be.empty;
                await email.sendKeys("random.email@gmail.com");

                let passwd = browser.findElement(By.id('passwd'));
                await expect(passwd).to.not.be.empty;
                await passwd.sendKeys("12345");

                let path = await browser.findElement(
                    By.id('signIn')
                );
                await expect(path).to.not.be.empty;
                await path.click();
            });

        });

    } catch (error) { console.log(new Error(error.message));
    } finally {}
})();