import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.scss'
})
export class BasicsPageComponent {

  public nameLower: string = 'daniel';
  public nameUpper: string = 'DANIEL';
  public fullName: string = 'dAniEl HernÁndeZ';

  public customDate: Date = new Date();
}
