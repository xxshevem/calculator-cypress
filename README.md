### Prepare Dev Environment first. You need to have:

- Node.js (download LTS version from nodejs.org website)
- Git (Download GUI client if needed from git-scm.com or package manager homebrew for Mac users)
- IDE (Visual Studio Code) from visualstudio.com website. Then:
    - Open new terminal from VSC and ensure node js is installed:
        - Run `node -v`
    - Check if git is installed:
        - Run `git —version`


### Run the tests:

- Open Visual Studio Code
- Open the folder “Calculator”
- Run `npm init` to set some default parameters - package.json created
- Run `npm install cypress —save-dev —force` in terminal to install cypress
- Open one more terminal and run `npx cypress open` - Cypress opened
- Select E2E Testing, browser => Electron
- Run the tests ==> `cypress/e2e/calculator.js`  

### Scenarios:
#### TC1:
**Given** There is https://www.calculator.net/conversion-calculator.html website  
**When** I select Length  
**And** I convert 10 Meters to Centimeters  
**Then** The result is -  10 Meter = 1000 Centimeter  


#### TC2:
**Given** There is https://www.calculator.net/conversion-calculator.html website    
**When** I select Temperature  
**And** I convert ‘!"№%:,.;()_)(;.’ value  
**Then** Next message appeared “Please provide a valid number!”  
