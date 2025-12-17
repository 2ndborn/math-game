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
| I want a home page with the game name so I understand what the site is about. | An appealing home page with the name of the game on it. | ![Home section](/docs/assets/laptop_home.webp) |
| I want to see game play options so that I can have an idea of where to navigate. | There are 5 buttons +, -, x, / & ? on the home section | See above |

`The Game section`

|  Goals | How are they achieved? | Evidence |
| :--- | :--- | :--- |
| I want the game to generate random math sums so that I can expect a different math question every round. |New numbers are generated every round. | ![Game page section](/docs/assets/laptop_game.webp) |
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
|| 390 | 768 | 1024 | 1200 |
|-|-|-|-|-|
|Home|![390](/docs/assets/iphone_home.webp)|![768](/docs/assets/ipadmini_home.webp)|![1024](/docs/assets/ipadpro_home.webp)|![1200](/docs/assets/laptop_home.webp)|
|Game|![390](/docs/assets/iphone_game.webp)|![768](/docs/assets/ipadmin_game.webp)|![1024](/docs/assets/ipadpro_game.webp)|![1200](/docs/assets/laptop_game.webp)|

Additional testing was taken by friends and family on a variety of devices and screen sizes.

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| - | - | - | - | - |
| `Home page` |
| Description of games on the home page | When the user hovers over the operators, a description of the game is shown below. | Hovered over each operator. | A message appeared when hovering over each operator. | ✅ |
| Ready, Steady, Go!!! | When the user clicks an operator on the home page, the words "Ready, Steady, Go!!!" are displayed before the game starts. | Clicked each operator. | The words "Ready, Steady, Go!!!" were rendered. | ✅ |
| `Game page` |
| Countdown | When the game starts, the timer decreases from 10 to 0. | Let the clock run to zero. | The timer decreased from 10 to 0. | ✅ |
| Correct answer | When the user answers correctly, the background turns green, the score increases by 1, and the message "Correct" is displayed. | Answered correctly. | The background turned green, the score increased by 1, and the message "Correct" was rendered. | ✅ |
| Incorrect answer | When the user answers incorrectly, the background turns red and the message "The correct answer is x" is displayed. | Answered incorrectly. | The background turned red and the message "The correct answer is x" was rendered. | ✅ |
| Game over | When the game ends, the Game Over screen is displayed with the number of correct answers and a "Play Again" button. | Answered 10 questions. | The Game Over screen was rendered with the final score and the "Play Again" button. | ✅ |
| Game over perfect score | When the game ends and the user answers all 10 questions correctly, the Game Over screen is displayed with "Perfect score," the number of correct answers, and a "Play Again" button. | Answered 10 questions correctly. | The Game Over screen was rendered with "Perfect score," the number of correct answers, and a "Play Again" button. | ✅ |