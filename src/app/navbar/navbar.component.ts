import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
// import { ProductCardService } from '../product-card.service';
import { LoaderService } from './../loader-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  counter: number = 0;
  constructor(
    private _counterService: CounterService,
    private _loaderService: LoaderService,
    private http: HttpClient
  ) {
    this._counterService.getCount().subscribe((res: any) => {
      this.counter = res;
      console.log(res);
    });
  }

  callApi() {
    this.http.get('https://reqres.in/api/users?page=2').subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit(): void {}
}
