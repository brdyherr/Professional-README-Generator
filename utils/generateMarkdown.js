// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}
<br/>
## Table of Contents
* [Installation](#installation)
<br/>
* [Usage](#usage)
<br/>
* [License](#license)
<br/>
* [Contribution](#contribution)
<br/>
* [Test](#test)
<br/>
* [Questions](#questions)
<br/>
## Installation 
  ${data.installation}
<br/>
## Usage
  ${data.usage}
<br/>
## License
  ${data.license}
<br/>
## Contributing
  ${data.contribution}
<br/>
## Tests
  ${data.test}
<br/>
## Questions
  - If you have any questions, please email me at ${data.email} or see my GitHub at ${data.github}<br/>
`;
}

module.exports = generateMarkdown;
