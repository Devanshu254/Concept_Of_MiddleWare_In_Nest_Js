import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class BookMiddleWare implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        let protocol = req.protocol; // Http or Https.
        let host = req.get("host"); // localhost.
        let url = req.originalUrl;
        let method = req.method;
        let date = new Date().toDateString();
        console.log(protocol+"://"+ host+ url + "  "+ method + "  "+ date);
        next();
    }

}