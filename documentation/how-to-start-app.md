# How to start this project

### Step 1
Clone the app 

### Step 2
Find app-module.ts file in the project. Set your okta data in config object
```
  clientId: 'XXXXXXXXXXXXXX',
  issuer: 'https://dev-XXXXXX.okta.com/oauth2/default',
  redirectUri: 'http://localhost:8080/implicit/callback',
```

### Step 3
Navigate to the app and run command to install node_modules
```
cd angular-with-okta
npm install
```

### Step 4
Run angular app. Change port based on okta config port
```
ng serve --port 8080
```

