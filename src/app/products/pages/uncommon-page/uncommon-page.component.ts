import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Daniel';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  public changeClient(): void {
    if ( this.gender === 'male' ) {
      this.name = 'Melisa';
      this.gender = 'female';
    } else {
      this.name = 'Daniel';
      this.gender = 'male';
    }
  }

  // i18nPlural
  public clients: string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  public deleteClient(): void {
    this.clients.pop();
  }

  // KeyValue Pipe
  public person = {
    name: 'Daniel',
    age: 36,
    address: 'Mexico City'
  };

  // Async Pipe
  public myObserbableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre'
    }, 3500);
  })
}
