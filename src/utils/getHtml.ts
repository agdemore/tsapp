import {Store} from 'redux';
import {AppState, AppAction} from '../modules/common-store';

export function getHtml(
  title: string = '',
  componentName: string,
  content: string,
  store: Store<AppState, AppAction>
): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <!-- <link rel="stylesheet" href=${componentName + '-layout.css'} /> -->
      <title>${title}</title>
    </head>
    <body>
      ${content}

      <script>var __state = ${JSON.stringify(store.getState())}</script>
      <!-- <script src="assets/${componentName + '-client.js'}"></script> -->
    </body>
  </html>
  `;
}
