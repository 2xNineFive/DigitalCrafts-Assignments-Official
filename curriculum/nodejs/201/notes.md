# NodeJS 201
## Define npm scripts for greater efficiency

### scripts live in package.json
```json
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
```


### we can easily add new scripts 
```json
"scripts": {
"cowsay1": "node_modules/.bin/cowsay JavaScript FTW!",
"cowsay2": "npx cowsay Hello Universes!",
"dev": "nodemon server.js",
"start": "node server.js",
"test": "echo \"Error: no test specified\" && exit 1"
},
```




### execute scripts from the CLI
- `npm run dev`
- `npm run cowsay1`

