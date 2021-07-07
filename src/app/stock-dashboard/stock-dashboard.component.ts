import { Component, OnInit, Input } from "@angular/core";
import { StockInterface, StockService } from "../stock.service";

@Component({
  selector: "app-stock-dashboard",
  templateUrl: "./stock-dashboard.component.html",
  styleUrls: ["./stock-dashboard.component.scss"]
})
export class StockDashboardComponent implements OnInit {
  @Input() stock: any;
  stocks: Array<StockInterface>;
  symbols: Array<string>;
  constructor(private service: StockService) {
    this.symbols = this.service.get();
  }
  
  ngOnInit() {
    console.log("symbols", this.stocks);
    this.service.load(this.symbols).subscribe(stocks => (this.stocks = stocks));
  }

  isNegative() {
    return this.stock && this.stock.change < 0;
  }

  isPositive() {
    return this.stock && this.stock.change > 0;
  }
}
