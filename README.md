# TS-Node-Backend

## Step by step guide to make Typescript+Node+MongoDB+Express Backend CRUD APP

#### All Commands
- Step1
```node
mkdir ts-node-backend && cd ts-node-backend
npm init
```
- step2 installing packages
```
npm i express @types/express
npm i nodemon mongoose
npm i @types/mongoose
npm i typescript ts-node
```
- step3 configuring Typescript and creating folder structure
```bash
create files and folders
mkdir src && cd src
mkdir controllers routes db
touch index.ts

cd ..

touch tsconfig.json nodemon.json
```
- step4 tsconfig.json and nodemon.json configuration
```json
pest this json in `tsconfig.json`
{
 "compilerOptions": {
  "target": "ES6",
  "module": "NodeNext",
  "moduleResolution": "NodeNext",
  "lib": ["ES6"],
  "sourceMap": true,
  "strict": true,
  "noImplicitAny": true,
  "esModuleInterop": true,
  "resolveJsonModule": true,
  "allowJs": true,
  "rootDir": "src",
  "outDir": "dist"
 },
 "include": ["src/**/*"]
}
pest this json in `nodemon.json`
{
    "watch": [
        "src"
    ],
    "ext": ".ts,.js",
    "exec": "ts-node ./src/index.ts"
}
```
If your not able to do this check `config ts` commit

- step5 let's quickly check everything is working or not
In src> index.ts add
```typescript
console.log("Hello App");
```
then open terminal and type
```
npm run start
```
If all things fine. in console you get the message `Hello App`