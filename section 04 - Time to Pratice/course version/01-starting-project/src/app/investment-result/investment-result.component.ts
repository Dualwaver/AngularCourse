import { Component, computed, inject, input } from '@angular/core';
import { IInvestmentResult } from '../models/investment-result.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.scss',
})
export class InvestmentResultComponent {
  investmentResult = inject(InvestmentService);

  //Only way
  // get results() {
  //   return this.investmentResult.resultData();
  // }

  // results = computed(() => this.investmentResult.resultData());
  results = this.investmentResult.resultData.asReadonly();
}
