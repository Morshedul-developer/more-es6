# null vs undefined
| Feature         | `undefined`                  | `null`                 |
| --------------- | ---------------------------- | ---------------------- |
| Who sets it     | JavaScript (default)         | Programmer (explicit)  |
| Meaning         | Value not assigned           | No value intentionally |
| Type            | `undefined`                  | `object` *(JS quirk)*  |
| Equality (`==`) | `null == undefined` → true   |                        |
| Strict (`===`)  | `null === undefined` → false |                        |


## Quick Rule of Thumb

Use undefined → “value not yet assigned”

Use null → “value intentionally empty”