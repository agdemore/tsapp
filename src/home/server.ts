import * as React from 'react';
import { Response, Request } from 'express';

import { getHtml } from '../utils/getHtml';

export function homeController(req: Request, res: Response) {
  // const html = getHtml('Home', 'home', null);
  res.send('hello');
}
