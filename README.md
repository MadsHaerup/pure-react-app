# pure-react-app

use: `npx pure-react-app`

> pure-react-app makes you ready to code instantly by providing you with a clean app with a basic directory structure.

[Inspiration for directory structure](https://www.taniarascia.com/react-architecture-directory-structure/)

## The Directory Structure
Src/
  * assets - global static assets such as images, svgs, company logo, etc.
  * components - global shared/reusable components, such as layout (wrappers, navigation), form components,buttons
  * services - JavaScript modules
  * store - Global Redux store
  * utils - Utilities, helpers, constants, and the like
  * views - Can also be called "pages", the majority of the app would be contained here

  #### Removed documents: 
  * ~~App.css~~
  * ~~reportWebVitals.js~~
  * ~~App.test.js~~

  Before with npm create-react-app
  ![create-react-app structure](./img/cra.png)

  After with npx pure-react-app
  ![pure-react-app structure](./img/pure-react-app.png)