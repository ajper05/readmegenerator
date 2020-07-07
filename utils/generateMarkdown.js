// function to generate markdown for README
function generateMarkdown(data) {
  var readmeTemplate = `
  # ${data.title}

  Table of Contents: 
  \n
  [Description](#description)
  \n
  [Usage](#usage)
  \n
  [License](#license)
  \n
  [Contributing](#contributing)
  \n
  [Test](#test)
  \n
  [Questions](#questions)

  ## Description:
  \n
  ${data.desc}

  ## Installation:
  \n 
  ${data.install}

  ## Usage:
  \n
  ${data.usage}

  ## License:
  \n
  ${data.license}

  ## Contributing:
  \n
  ${data.contribute}

  ## Test:
  \n
  ${data.test}

  ## Questions:
  [My Github](https://github.com/${data.github})

  ![Screenshot](${data.screen})

  [![Inquirer Version]https://img.shields.io/node/v/inquirer/latest]

`
return readmeTemplate;
}

module.exports = generateMarkdown;
