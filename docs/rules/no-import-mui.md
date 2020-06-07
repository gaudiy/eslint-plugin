# forbid to import material-ui (no-import-mui)

特定の Material UI のモジュールを import することを禁止するルール
他の機能で代替できる  こととバンドルサイズ削減のため

## Rule Details

下記 MUI-Component の使用を禁止する

- Grid
- Card
- List
- ListSubheader
- ListItemAvatar
- ListItemText

Examples of **incorrect** code for this rule:

```js
import Grid from "@material-ui/core/Grid";
import Grid from "@material-ui/core/Card";
```
