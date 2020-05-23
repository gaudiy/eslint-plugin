/**
 * @fileoverview forbid to import material-ui
 * @author winor30
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'forbid to import material-ui',
      category: 'material-ui',
      recommended: true,
    },
    fixable: 'code', // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: (context) => {
    // variables should be defined here

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------
    const isIncludesInModuleSource = (importSource) =>  (targetName) => importSource.split('/').includes(targetName);
    const materialUiTargetName = '@material-ui';

    const isIncludesMuiModule = (node) => (targetName) => {
      const importSource = node.source.value;
      const isIncludes = isIncludesInModuleSource(importSource);
      const isMuiModuleSource = isIncludes(materialUiTargetName);
      const isGridModuleSource = isIncludes(targetName);
      const isMuiGridModuleForDefaultImport = isMuiModuleSource && isGridModuleSource;

      const moduleName = node.specifiers.map(({ imported }) => imported && imported.name).find(name => name === targetName);
      const isGridModuleName = !!moduleName;
      const isMuiGridModuleForSelectImport = isGridModuleName && isMuiModuleSource;
      return isMuiGridModuleForDefaultImport || isMuiGridModuleForSelectImport;
    }

    const createErrorMessage = (targetName) => `${targetName} for @material-ui must not be imported.`;

    const checkAndReportForMuiModule = (node) => (targetName) => {
      const isMuiTargetModule = isIncludesMuiModule(node)(targetName);
      if (isMuiTargetModule) {
        context.report({
          node,
          message: createErrorMessage(targetName)
        })
      }

      return isMuiTargetModule;
    }

    // any helper functions should go here or else delete this section

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------

    return {
      ImportDeclaration: (node) => {
        const checkAndReport = checkAndReportForMuiModule(node);
        // パフォーマンスを考慮して、モジュール名が一つでも見つかった場合、returnする
        checkAndReport('Grid');
        checkAndReport('Card');
        checkAndReport('List');
        checkAndReport('ListSubheader');
        checkAndReport('ListItemAvatar');
        checkAndReport('ListItemText');
      }
    };
  },
};
