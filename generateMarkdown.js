// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } 
  else if(license == "MIT"){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
  else if (license == "GPL") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license == "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else {
    return `no license provided or license outside of list`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseReadme = renderLicenseSection(data.license)

  return `# ${data.title}

## Installation
${data.installation}

## Instructions
${data.instructions}

## Credits
${data.credits}

## License
${licenseReadme}

## GitHub Name
${data.githubname}

## GitHub Link
${data.githublink}

## E-mail
${data.email}

`;
}

module.exports = generateMarkdown;
