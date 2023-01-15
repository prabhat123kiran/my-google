Create a react app to login with google account. In this tutorial you will:

save login data in local storage to remember user login
create backend api using node and express to authenticate user
publish on heroku and test it on production
Run it locally
How to implement
frontend:
npx create-react-app react-google-login
npm install react-google-login
edit App.js
create h1 for app name.
define loginData state hook
check loginData and render content
if loginData is null render GoogleLogin component
if loginData isn't null render you are logged in message.
implement handleLogout
implement handleFailure
implement handleLogin
google cloud platform
login to google
go to https://console.cloud.google.com
create a project
go to api credential
accept consent screen
craete oauth client id
craete .env file and save it as REACT_APP_GOOGLE_CLIENT_ID
backend:
create server.js file
npm install express dotenv google-auth-library
config dotenv
create OAuth2Client client
create express server
use express.json()
define app.post('/api/google-login', ...
define app.listen
heroku publish
create Procfile
create app.use(express.static
app.get('*',
commit changes
publish to github
create heroku account and app
connect it to github repo