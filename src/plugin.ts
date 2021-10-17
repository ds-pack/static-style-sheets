export default function StaticStyleSheetsPlugin(babel) {
  const { types: t } = babel

  return {
    name: 'static-style-sheets/plugin',
    visitor: {
      Program() {},
      // Handle imports...
      // ex:
      // ```tsx
      // import styles from 'static-style-sheets';
      // ```
      ImportDeclaration(path) {},
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
      CallExpression(path) {},
    },
  }
}
