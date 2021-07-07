import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';

let symbols: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR','TSLA','MSFT'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';
export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable({ providedIn: 'root' })
export class StockService {

  constructor(private http: HttpClient) { }
  get() {
    return symbols.slice();
  }

  add(symbol) {
    symbols.push(symbol);
    return this.get();
  }

  remove(symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(
        service + '/stocks/snapshot?symbols=' + symbols.join()
      );
    }
  }
}
