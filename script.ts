import 'chromedriver';
import 'dotenv/config';
import { Builder, By, Key, WebDriver } from 'selenium-webdriver';

const url = process.env.BCS;
const email = process.env.EMAIL_ADDRESS;
const password = process.env.PASSWORD;

async function main() {
	const driver: WebDriver = await new Builder().forBrowser('chrome').build();

	await driver.get(`${url}`);

	let email_input = await driver.findElement(By.id('emailAddress'));
	await email_input.sendKeys(`${email}`);

	let password_input = await driver.findElement(By.id('password'));
	await password_input.sendKeys(`${password}`);

	let sign_in = await driver.findElement(By.id('loginSubmit'));
	await sign_in.click();

	driver.manage().setTimeouts({ implicit: 5000 });

	let courses_button = await driver.findElement(
		By.id('global_nav_courses_link')
	);
	await courses_button.click();

	let course = await driver.findElement(
		By.linkText('Bootcamp: UofU-VIRT-FSF-PT-08-2023-U-LOLC-MWTH(A)')
	);
	await course.click();

	let zoom_button = await driver.findElement(
		By.className('context_external_tool_249')
	);
	await zoom_button.click();

	driver.manage().setTimeouts({ implicit: 5000 });

	let parent_container = await driver.findElement(By.css(''));

	let cloud_button = await driver.findElement(By.xpath('./*[last()]'));
	await cloud_button.click();

	// let currentUrl: string = await driver.getCurrentUrl();
	// console.log(`Current url: ${currentUrl}`);

	await driver.quit();
}

main();
