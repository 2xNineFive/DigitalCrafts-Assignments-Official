# NodeJS 105
## **package.json** manages third-party modules found at [npm's repository](https://www.npmjs.com/) 


### What is npm?
[Docs]()

- it's an online repo for the the publishing of open-source Node.js projects

- it's a command-line utility for interacting with said repo that aids in package installation, version management, and dependency management


### Open-source software
- free to use as per a specific license
- developers are not compensated
- not guaranteed to work at all times 



### Synonyms
- library
- module 
- package
- dependency



### npm commands 
- `npm -v` (version)
- `npm install -g <someModule>` (global install, not recommended)
- `npm install <someModule>` (local install, preferred)
- `npm init -y` (creates **package.json** w/ default values)



### package.json
- "dependencies" list production libraries
- "devDependencies" list the libraries used to write the code itself
- is created by `npm init -y`
- determines the contents of **node_modules/**



### node_modules/
- contains all 3rd-party modules installed with `npm`
- each module has its own **package.json** so this directory can be quite large
- do not ever modify the code within this directory 


### Executing commands (if applicable) 
using `cowsay` as an example
- node_modules/.bin/cowsay JavaScript FTW!
- npx cowsay JavaScript FTW!
```
 _________________
< JavaScript FTW! >
 -----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```