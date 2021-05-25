import { Component, OnInit } from "@angular/core";
import { FxRatesService } from "../../fx-rates.service";

@Component({
  selector: "app-trade",
  templateUrl: "./trade.component.html",
  styleUrls: ["./trade.component.css"],
})
export class TradeComponent implements OnInit {
  public buyAmount: number;
  public currentPrice: number;

  constructor(private fxRates: FxRatesService) {}

  ngOnInit() {
    //Method will be exe when the component will be rendered
    this.getFeed();
  }


  public getFeed() {
  this.fxRates.getFeed().subscribe(
      (response) => {
        this.currentPrice = response;

        console.log(response);
      },
      (error) => {
        alert("Error fetching rate feed.");
        console.warn("Error fetching rate feed.", error);
      }
    );
  }

  public submit(amount, rate) {
    alert("You bought £" + amount + " for €" + (rate * amount).toFixed(2));
  }
}
