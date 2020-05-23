/**
 * @fileoverview forbid to import material-ui
 * @author winor30
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-import-mui'),
  RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Configuration
// ------------------------------------------------------------------------------


RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    // ecmaFeatures: {
    //   jsx: true,
    // },
    sourceType: 'module',
  },
});

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('no-import-mui', rule, {
  valid: [
    {
      code: "import CssBaseline from '@material-ui/core/CssBaseline';",
    },
    {
      code: "import { makeStyles, Theme } from '@material-ui/core/styles';",
    },
    {
      code: "import Hoge from 'src/app/Hoge';",
    }
  ],

  invalid: [
    {
      code: "import Grid from '@material-ui/core/Grid';",
      errors: [
        {
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import { Grid } from '@material-ui/core';",
      errors: [
        {
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import Card from '@material-ui/core/Card';",
      errors: [
        {
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import { Card } from '@material-ui/core'",
      errors: [
        {
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import List from '@material-ui/core/List';",
      errors: [
        {
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import { List } from '@material-ui/core'",
      errors: [
        {
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import ListSubheader from '@material-ui/core/ListSubheader';",
      errors: [
        {
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import { ListSubheader } from '@material-ui/core'",
      errors: [
        {
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import ListItemAvatar from '@material-ui/core/ListItemAvatar';",
      errors: [
        {
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import { ListItemAvatar } from '@material-ui/core'",
      errors: [
        {
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import ListItemText from '@material-ui/core/ListItemText';",
      errors: [
        {
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "import { ListItemText } from '@material-ui/core'",
      errors: [
        {
          type: 'ImportDeclaration',
        },
      ],
    },
  ],
});
