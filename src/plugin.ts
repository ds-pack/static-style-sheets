import {
  ImportSpecifier,
  ImportDefaultSpecifier,
  ImportDeclaration,
  CallExpression,
} from '@babel/types'

type AnyImportSpecifier = ImportDefaultSpecifier | ImportSpecifier

interface ImportDeclarationPath {
  node: ImportDeclaration
}

interface CallExpressionPath {
  node: CallExpression
}

export default function StaticStyleSheetsPlugin(babel) {
  const { types: t } = babel

  return {
    name: 'static-style-sheets/plugin',
    visitor: {
      Program() {
        this.stylesImport = null
      },
      // Handle imports...
      // ex:
      // ```tsx
      // import styles from 'static-style-sheets';
      // ```
      ImportDeclaration(path: ImportDeclarationPath) {
        if (path.node.source.value === 'static-style-sheets') {
          this.stylesImport = {
            importedAs: path.node.specifiers.find(
              (spec: AnyImportSpecifier) =>
                spec.type === 'ImportDefaultSpecifier',
            ).local.name,
          }
        }
      },
      // Handle variable declarations, assignment expressions, etc...
      // ex:
      // ```tsx
      // const classes = styles({
      //   color: 'blue',
      // });
      // // ...
      // let style;
      // style = styles({color: 'red'});
      // // ...
      // let element = <button className={styles({color: 'purple'})}>Yo</button>
      // ```
      CallExpression(path: CallExpressionPath) {},
    },
  }
}
