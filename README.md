# Yeoman generator for Electron with React
A simple and clean boilerplate for Electron and react. It includes:

- State management with [Redux]
- Routing with [React-Router v4]
- [React] and [Redux devtools] for debugging
- [Jest] for testing
- .eslint for [ESlint]
- [Webpack 2] for bundling
- [Babel] for compiling

### Use with Yeoman generator
- **If you haven't used Yeoman generator before:** 
Go to this link: [Yeoman]. Trust me it's damn easy to install and helps a lot

- **If you have yeoman installed already**:

    ```bash
    npm install -g generator-electron-react
    yo electron-react
    ```
    
### How to run the project

- To run in production mode:

    ```bash
    npm run prod
    ```

- To run in development with hot reloading, open two terminal.
In the first terminal run 

    ```bash
    npm run hot
    ```
    
    In the second terminal run 
    
    ```bash
    npm run dev
    ```
    
    The first commands creates a webpack dev server which will watch and reload the bundle as you edit and will it available at https://localhost:8080.
    The second command will run the electron app in development mode. So it will open up devtools with React and Redux devtools initialized.
- To run test:

    ```bash
    npm test
    ```

### Ugh, I don't want to use Yeoman
- You can just clone the repo
`git clone https://github.com/tahnik/generator-electron-react.git`
- Create a new folder for your project
- Copy all the contents inside generators/templates to your project folder
- Edit the package.json to change the `<%= name %>` to your project name and `<%= description %>` to your project description
- Run `npm install`
- Then run the project as described in the section above

# Contribute
Awesome! Create a new issue or do a pull request.


[Redux]: <http://redux.js.org/>
[React-Router v4]: <https://reacttraining.com/react-router/>
[React]: <https://github.com/facebook/react-devtools>
[Redux devtools]: <https://github.com/gaearon/redux-devtools>
[Jest]: <https://facebook.github.io/jest/>
[ESlint]: <http://eslint.org/>
[Webpack 2]: <https://webpack.js.org/>
[Babel]: <https://babeljs.io/>
[Yeoman]: <http://yeoman.io/learning/>


