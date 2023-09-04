// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseType = data.license; 
  console.log(data.license)
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'Apache') {
    yourLicense = `![Apache license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  }else if (licenseType === 'Eclipse') {
    yourLicense = `![Eclipse license](https://img.shields.io/badge/License-EPL%201.0-red.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else if (licenseType === 'Mozilla') {
    yourLicense = `![Mozilla license](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  } else if (licenseType === 'Perl') {
    yourLicense = `![Perl license](https://img.shields.io/badge/License-Perl-0298c3.svg)`
  } else {
    data.license = "N/A"
    yourLicense = ""
  }
  return yourLicense;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseType = data.license; 
  let licenseLink = ''
  if(licenseType === 'MIT') {
    licenseLink = `(https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'Apache') {
    licenseLink = `(https://opensource.org/licenses/Apache-2.0)`
  }else if (licenseType === 'Eclipse') {
    licenseLink = `(https://opensource.org/licenses/EPL-1.0)`
  } else if (licenseType === 'GPLv3') {
    licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if (licenseType === 'Mozilla') {
    licenseLink = `(https://opensource.org/licenses/MPL-2.0)`
  } else if (licenseType === 'Perl') {
    licenseLink = `(https://opensource.org/licenses/Artistic-2.0)`
  } else {
    data.license = "N/A"
    licenseLink = ""
  }
  return licenseLink;
}

// didn't use this - I wrote it into my markdown function
//TODO: function that returns the license section of README
//function renderLicenseSection(data) {
  //const badge = renderLicenseBadge(data)
 // const link = renderLicenseLink(data)
 // console.log (badge, link)
//}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data)
  const link = renderLicenseLink(data)
  //console.log(data.license)

  //drafting return in markdown of the README file
  markdown=`# ${data.title} 

  ${badge}

  ## Description:
  
  ${data.description}

  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
## Installation:

${data.instructions|| 'N/A'}

## Usage:

${data.usage|| 'See Description'}

## License:

This application is covered under [${data.license}](${link})
${link}

## Contributing:

${data.contributors|| 'Contribution parameters in development.  See contact info below to find out more.'}

## Tests:

${data.tests|| 'None Created Yet'}

## Questions:

We would love to hear from you! Visit Github repository: [${data.github}](https://github.com/${data.github}/)  
or Contact via Email: [${data.email}](mailto:${data.email}) with addition questions.
`;
//removing code testing console.logs to keep terminal clean -- console.log(markdown)
return markdown
}

module.exports = generateMarkdown;
