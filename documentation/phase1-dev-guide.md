# Phase 1 development guide

## Results:
To sign users in, your application redirects the browser from ```auth/log-in``` component 
to an Okta-hosted sign-in page. After adding username and password, Okta then 
redirects back to your application to ```main/welcome``` component with information about the user.


## Okta documentation
Link: https://developer.okta.com/docs/guides/sign-into-spa/angular/before-you-begin/
Best code source: https://github.com/okta/samples-js-angular
Check latest code source:
- GitHub Okta, Inc: https://github.com/okta
- GitHub Okta Developer: https://github.com/oktadeveloper

## Dev steps

#### Step 1
Define a callback route in ```app-routing.module.ts```

#### Step 2
Create an Okta application in https://dev-XXXXXX-admin.okta.com/admin/apps/active

#### Step 3
Install and configure SDK. Add config info to ```app.module.ts```

#### Step 4
Add a logic for button to ```auth/log-in``` and  handle the callback from Okta in ```app-routing.module.ts```

#### Step 5
Require authentication (```canActivate: [OktaAuthGuard]```) for some components in ```app-routing.module.ts```