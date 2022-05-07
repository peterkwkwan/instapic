# InstaPic Client by pkwan

### Getting started

`git clone https://github.com/peterkwkwan/instapic.git` from an empty directory.

### `npm i`
>Installs the necessary dependencies

### `npm start` 
 >Runs the server in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


#### **If you wish to run server/back-end locally from localhost**
Navigate to `src/constants/urls.js` and uncomment **line: 4**
`export const SERVERURL = 'http://localhost:5000'`

Then comment out **line:1**
`export const SERVERURL = 'https://instapic-server-pkwan.herokuapp.com/'
`
### Tech
InstaPic Client makes use of a number of tools, including:

- [Axios] - for API requests
- [jwt-decode] - for decoding user application tokens
- [moment] - handy date/time parser
- [react] - front-end framework
- [react-redux] - for state management
- [react-router-dom] - for dynamic routing
- [redux thunk] - middleware that helps with async API requests

### Client deployed on Netlify
[https://instapic.netlify.app/](https://instapic.netlify.app/)
