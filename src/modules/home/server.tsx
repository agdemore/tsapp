import { Response, Request } from 'express';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { getHtml } from '../../utils/getHtml';

import { HomeLayout } from './layout';

import {store} from '../common-store';

export function homeController(req: Request, res: Response) {
  const content = renderToStaticMarkup(<HomeLayout/>)
  res.send(getHtml('Home', 'home', content, store));
}
