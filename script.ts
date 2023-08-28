import 'chromedriver';
import 'dotenv/config';
import { Builder, By, Key, WebDriver } from 'selenium-webdriver';

const url = process.env.BCS;
const email = process.env.EMAIL_ADDRESS;
const password = process.env.PASSWORD;

async function main() {
	let driver: WebDriver = await new Builder().forBrowser('chrome').build();

	await driver.get(`${url}`);

	let email_input = await driver.findElement(By.id('emailAddress'));
	await email_input.sendKeys(`${email}`);

	let password_input = await driver.findElement(By.id('password'));
	await password_input.sendKeys(`${password}`);

	let sign_in = await driver.findElement(By.id('loginSubmit'));
	await sign_in.click();

	// let currentUrl: string = await driver.getCurrentUrl();
	// console.log(`Current url: ${currentUrl}`);

	await driver.quit();
}

main();
