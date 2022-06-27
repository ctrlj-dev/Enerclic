# Technical test for Enerclic

The test would consist of:

With the Red Eléctrica de España API: https://www.ree.es/es/apidatos create a website with graphics (own web layout): https://www.ree.es/es/datos/aldia.

Requirements: 

Use Material-UI
The charts must be made in the React Apex Chart library.
The design can be your own, care of the design is valued.
Once finished, you can upload it to your GitHub repository.
NOTE: you do not need to use Next.js, TypeScript or include testing.

## Getting started 🚀

To launch the project, simply do npm install.

 Then use the following command to launch the project:
 
    - npm start: Launch the project in a development version.

### Work done 📋

A screen has been made with Material-UI consisting of a layout with header and footer and a component to generate charts.

### Components and structure 🔧

A component has been created that accepts in a generic way some props and allows to work with some of the types of charts
offered by React Apex Chart, such as donut, line, area or bar. 

## Tools ⚙️

For generic functions, I have created a tools file where there are some functions used in the project.

### Styles 🔩

For CSS styling, SCSS has been used, creating nested structures when necessary.

### API ⌨️

For the API call, it has been separated in a separate file, in the services folder. A function has been created 
function has been created to call the REE API that accepts all the parameters of the REE API.


