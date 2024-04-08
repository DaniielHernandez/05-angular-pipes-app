import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: ['/']
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: ['/numbers']
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: ['/uncommons']
          }
        ]
      },
      {
        label:'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: ['/custom']
          }
        ]
      }
    ];
  }

}
