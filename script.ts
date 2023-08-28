import 'chromedriver';
import { Builder, By, Key, WebDriver } from 'selenium-webdriver';

async function main() {
	let driver: WebDriver = await new Builder().forBrowser('chrome').build();

	await driver.get('http://www.google.com/');

	let currentUrl: string = await driver.getCurrentUrl();

	console.log(currentUrl);

	await driver.quit();
}

main();
