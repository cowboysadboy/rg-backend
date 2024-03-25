import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public searchFilter: string = 'первичная';
  public isHelper: boolean = true;
  public avatarUrl: string = '';

  public info: {
    searchFilter: string;
    isHelper: boolean;
    avatarUrl: string;
  } = {
    searchFilter: '',
    isHelper: true,
    avatarUrl: 'https://i.ibb.co/RYTJ1c5/pixel-cowboy.jpg',
  };

  getFilter(): string {
    return this.searchFilter;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
