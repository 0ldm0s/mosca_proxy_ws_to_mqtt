# How to use

## Set mqtt backend

in `mqtt.js` file, you must be change this setting to your owner server setting.

```javascript
var ascoltatore = {
  type: 'mqtt',
  json: false,
  mqtt: require('mqtt'),
  host: 'your cloudamqp server',
  port: 1883,
  clientId: 'momo',
  username: 'your username',
  password: 'your password',
  clean: false,
};
```

If you not run in `1883` port, you must be change to your setting. Don't forget change here.

```javascript
// if your not in 1883 port
var settings = {
  port: 1883,
  backend: ascoltatore,
  http: {
    port: 8083,
    bundle: true,
    static: './',
  },
};
```

## Run it

in first time, you need run it and install dependencies.

```shell
yarn
```

run it

```shell
node mqtt.js
```

if you see like this error

```
# This file path will vary according to the actual situation.
/root/mosca/node_modules/jsonschema/lib/validator.js:110
    throw new SchemaError('Expected `schema` to be an object or boolean');
    ^
SchemaError: Expected `schema` to be an object or boolean
    at Validator.validate (/root/mosca/node_modules/jsonschema/lib/validator.js:110:11)
    at Object.validate (/root/mosca/node_modules/mosca/lib/options.js:264:26)
    at new Server (/root/mosca/node_modules/mosca/lib/server.js:104:34)
    at Object.<anonymous> (/root/mosca/mqtt.js:29:14)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Module._load (node:internal/modules/cjs/loader:827:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47 {
  schema: undefined
}
```

find this in the file

```javascript
if((typeof schema !== 'boolean' && typeof schema !== 'object') || schema === null){
    throw new SchemaError('Expected `schema` to be an object or boolean');
}
```

remove this code, and rerun.

if you see this, is fine.

```
Mosca server is up and running
```

now you can test it.