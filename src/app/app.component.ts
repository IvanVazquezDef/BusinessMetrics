import { Component } from '@angular/core';
import { Log } from './interfaces/log.interface';
import { LogService } from './services/log.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['userId'];
  dataSource : any = [];

  constructor(private logService: LogService) {
    this.logService.getLoyalCustomers()
      .subscribe({
        next: (v: any) => {
          this.dataSource = v.loyalCustomers.map((m: any) => ({userId: m}))
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      })
  }


}
