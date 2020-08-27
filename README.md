# eslint-plugin-gaudiy

custom rule plugin for gaudiy front application

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn install eslint -D
```

Next, install `@gaudiy/eslint-plugin`:

```
$ yarn install @gaudiy/eslint-plugin -D
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-gaudiy` globally.

## Usage

Add `gaudiy` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@gaudiy"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@gaudiy/rule-name": 2
  }
}
```

## Supported Rules

- no-import-mui
