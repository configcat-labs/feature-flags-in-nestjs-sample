import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  private readonly urlToViewMap: Record<string, string> = {
    '/': 'index',
    '/about': 'about',
  };

  getViewName(req: Request): string {
    return this.urlToViewMap[req.url] || 'not-found';
  }
}
