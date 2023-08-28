import 'chromedriver';
import 'dotenv/config';
import { Builder, By, Key, WebDriver } from 'selenium-webdriver';

const url = process.env.BCS;

async function main() {
	let driver: WebDriver = await new Builder().forBrowser('chrome').build();

	await driver.get(`${url}`);

	let currentUrl: string = await driver.getCurrentUrl();

	console.log(`Current url: ${currentUrl}`);

	await driver.quit();
}

main();
