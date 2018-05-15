# Is string
![Travis CI](https://travis-ci.org/rojo2/is-string.svg?branch=master)

```javascript
import isString from "@rojo2/is-string"

isString("Hello, World!"); // true
isString(new String("Hola")); // true
isString(null); // false
isString(undefined); // false
isString(1); // false
isString({}); // false
isString([]); // false
```

Made with :heart: by ROJO 2 (http://rojo2.com)
