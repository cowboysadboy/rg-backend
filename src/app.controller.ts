import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.info;
  }
  @Post('')
  postData(@Body() data: { filter: ''; helper: boolean }): string {
    this.appService.info.searchFilter = data.filter;
    this.appService.info.isHelper = data.helper;
    return data.filter;
  }

  @Get('/avatar')
  getFilter(): string {
    return this.appService.info.avatarUrl;
  }
  @Post('/avatar')
  postAvatar(@Body() data: { url: '' }): string {
    this.appService.info.avatarUrl = data.url;
    return '200';
  }
}
