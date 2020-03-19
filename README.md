In this project i use:

- create-react-app
- Reactstrap
- Formik and Yup (to validate data from the form)
- SweetAlert (to make the alert of the succed register)


----------------------------------------------------------------------------------------------------
ROBERTO CARLOS ZAPATA REYES
WEBDEV Challenge Questions.
1. What is the difference between state and props?
Answer: A prop is a variable that I passed to it by the parent component, and a State is still a variable, but initialized and managed by the component, Also the props are immutable while states are mutable.

2. Props are mutable or immutable properties? Please explain your answer.
Answer: The props are immutable, props is used to pass information or data from de parent to the child component, if we want a variable to be mutable, then we have to stored in the state of the component, States are mutable.

3. What is Redux?
Answer: Redux is a library of JavaScript, also Redux is a data architecture pattern that allows you to manage the state of the application in a predictable way. It is intended to reduce the number of relationships between application components and maintain a simple data flow.

4. How works setState? In what scenario is recommended use?
Answer: setState(), is the way that we can update the state after the initial state setup. We can have an empty string value, and to update the state of that, we can call the setState(). I recommended to used, when we need to update an state, that is already initializated. 

5. What is render()? how works?
Answer: Render is the method for any React component which retunrs a JSX, when the component file is called, it calls the render() method, by default because that component needs to display the HTML markup or we an say JSX syntax.

6. What are the main differences between Virtual DOM and Real DOM?
Answer: DOM stand for Document Object Model, and is an abstraction of a structured text (HTML code), so the DOM is an a in-memory representation of this text. The virtual DOM, is an abstraction of the HTML DOM. Is lightweight, is a copy of the HTML DOM, and it allows React to do it computations skiping the real DOM operations.

7. Please show some differences between React ES5 syntax and ES6.
Answer: the first is are in the index.js, to setup the root container. In JavaScript Es5, we have to use “require” versus syntax of the ES& style, “imports”.
Var React = require(‘react’); vs import React from ‘react’;
Other, is the AppContainer component. Whit ES5 exports the component as a module using module.exports. using Es6, exports the component as a module using the export default.
Module.exports = AppContainer; vs export defaults AppContainer;
another one is: createClass vs class.
Var InputControlES5 = React.createClass({}) vs Class InputControlES6 extends React.component {}

8. What is a component in React and how works?
Answer: the components allow to separate UI(user interfaz) in many independent and reusable pieces and think about each piece independent way. Components come in two types, Class Components and Function Components. 

9. How you can update the state of a component?
Answer: I can update the state of a component using the setState() method, simply call the method and pass in the state variables that need to be updated, which in turn, re-renders the component tree.

10. In your trajectory using React.js, what has been the biggest challenge you have faced? How did you face it?
The biggest challenge that i have been faced, was the first time that i  used ReactJS. the work was to migrated a web page on HTML to REACT, that was the challenge, using my knowledge
to do it. I remember one of many  challenge, it was one icon of FONTAWESOME, it was the social media icons (twitter, facebook, instagram), i used in the code, but when i render, it wouldnt 
 renderer in the webpage. so i have to look was going on. i read de documentation, do i little research, read post and blogs, and there was the solution. i have to install by NPM in the console, the dependencies of social media
 of FONTAWESOME. and doing that , i solve the problem. 



----------------------------------------------------------------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
