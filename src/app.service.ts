import { Injectable } from '@nestjs/common';
import type { Request } from 'express';

@Injectable()
export class AppService {
  private readonly urlToViewMap: Record<string, string> = {
    '/': 'index',
  };
  getViewName(req: Request): string {
    return this.urlToViewMap[req.url] || 'not-found';
  }
}
