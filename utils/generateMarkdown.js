// function to generate markdown for README
function generateMarkdown(data) {
  var readmeTemplate = `
  ${data.title}

  Table of Contents: 
  [Description](#description)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Test](#test)
  [Questions](#questions)

  


`
return readmeTemplate;
}

module.exports = generateMarkdown;
