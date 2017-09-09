# ElectronJS + ReactJS boilerplate

A simple and clean boilerplate for Electron and react. It includes:

- State management with [Redux]
- Routing with [React-Router v4]
- [React] and [Redux devtools] for debugging
- .eslint for [ESlint]
- [Webpack 3] for bundling
- [Babel] for compiling

## Usage

NodeJS v8.3.0

- Clone the repo
`git clone https://github.com/tahnik/electron-react.git`
- Edit the package.json to change the `name` to your project name and `description` to your project description. Change the `author` as well.
- Run `npm i`
- Then run the project as described in the section below

## How to
- To run in development mode with hot reloading, open a terminal inside your project and run
    ```bash
    npm run dev
    ```
    
    This commands creates a webpack dev server which will watch and reload the bundle as you edit and will it available at https://localhost:8080.
    The command will also run the electron app in development mode. So it will open up devtools with React and Redux devtools initialized.
- To build the app and test if it is working:

    ```bash
    npm start
    ```

    This command will compile the app in production mode and start the app. Here is you still toggle the developer tools from the menu and see if there is any errors

- To package the app and create a distributable:

    ```bash
    npm run dist
    ```

    This will create a relevant distributable file. For example, if you are on Windows, it will create a .exe file in the release folder.


# Contribute
Awesome! Create a new issue or do a pull request.


[Redux]: <http://redux.js.org/>
[React-Router v4]: <https://reacttraining.com/react-router/>
[React]: <https://github.com/facebook/react-devtools>
[Redux devtools]: <https://github.com/gaearon/redux-devtools>
[Jest]: <https://facebook.github.io/jest/>
[ESlint]: <http://eslint.org/>
[Webpack 3]: <https://webpack.js.org/>
[Babel]: <https://babeljs.io/>
[Yeoman]: <http://yeoman.io/learning/>


