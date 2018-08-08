import {Response, Request} from 'express';

export function homeController(req: Request, res: Response) {
  res.end('hello');
}