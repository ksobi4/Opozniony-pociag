import { Express, Request, Response } from "express";

function routes(app:Express) {
  app.get('/', (req:Request, res:Response) => {
    res.send('Opoznienia pociagi api');
  })
}

export default routes;