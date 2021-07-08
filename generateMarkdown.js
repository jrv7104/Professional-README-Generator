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
  } else if(license == "MIT"){
    return `something`
  }else {
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

## Github Name
${data.githubname}

## E-mail
${data.email}

`;
}

module.exports = generateMarkdown;
