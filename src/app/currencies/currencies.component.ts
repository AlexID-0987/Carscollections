import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../Currency';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  currencies: Currency[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.http.get<Currency[]>(this.url)
              .subscribe(result => this.currencies = result);
  }

}
