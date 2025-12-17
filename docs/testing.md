# Testing

## Running Tests Locally

Add instructions for running tests locally.

## Test Structure

Describe how tests are organized and what they cover.

## CI/CD

Document any continuous integration or deployment configurations.

# Testing

Visit the deployed site: [Kara Haircare](https://karahaircare.co.uk)
---
## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [JavaScript Validator](#javascript-validator)
* [MANUAL TESTING](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)
---
## AUTOMATED TESTING
### W3C Validator
[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website. It was also used to validate the CSS.
* [index.html](https://validator.w3.org/nu/?showsource=yes&showimagereport=yes&doc=https%3A%2F%2F2ndborn.github.io%2Fmath-game%2F)
* [styles.css](/docs/assets/styles_css.webp)
- - -

### JavaScript Validator

[jshint](https://jshint.com/) was used to validate the JavaScript.

* [script.js](/docs/assets/script_js.webp)
---
## MANUAL TESTING
### Testing User Stories
`Home page section`

| Goals | How are they achieved? | Evidence |
| :--- | :--- | :--- |
| I want a home page with the game name so I understand what the site is about. | An appealing home page with the name of the game on it. | ![Home section]() |
| I want to see game play options so that I can have an idea of where to navigate. | There are 5 buttons +, -, x, / & ? on the home section | See above |

`The Game section`

|  Goals | How are they achieved? | Evidence |
| :--- | :--- | :--- |
| I want the game to generate random math sums so that I can expect a different math question every round. |New numbers are generated every round. | ![Game page section]() |
| I want the game to end after 10 questions so that I don't get bored. | The game ends after 10 questions rendering the game over page. | ![Game over page]() |
|I want to know how many correct answers I got so I can review my performance.|The game over page renders the users final score|See above|
|I want to be able to restart the game so that I can try again if I get distracted.|The restart button is located on the top right of the game page and take the user back to the home section.|See above|
|I want to be able to view my current score, so that I know how well I am doing.|The restart button is located on the top left of the game page and updates with the user get a question correct.|See above|
| I want the questions to be timed so I feel challenged during the game.|Users can see 10 second timer in the center of the page.|See above|
- - -

### Full Testing

Full testing was performed on the following devices:

* Laptop:
  * MSI Summit 13 AI+ Evo A2VMTG
  * HP
  * Google Chromebook
* Mobile Devices:
  * iPhone 13 pro
  * Google Pixel 6 Pro
  * Google Pixel 3

Devices tested the site using the following browsers:

* Google Chrome
* Edge
* Firefox
* Opera 
---
## Responsiveness (px)
| 390 | 768 | 1024 | 1200 |
|-|-|-|-|
|![390](/docs/assets/iphone_home.webp)|![768](/docs/assets/ipadmini_home.webp)|![1024](/docs/assets/ipadpro_home.webp)|![1200](/docs/assets/laptop_home.webp)|
Additional testing was taken by friends and family on a variety of devices and screen sizes.

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
