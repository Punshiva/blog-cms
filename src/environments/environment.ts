// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyA5suo91mYFspY1IZ3vqVPbSnFIoqXmafo",
    authDomain: "my-blog-bf16e.firebaseapp.com",
    databaseURL: "https://my-blog-bf16e.firebaseio.com",
    projectId: "my-blog-bf16e",
    storageBucket: "my-blog-bf16e.appspot.com",
    messagingSenderId: "694076320155"
  }
};
