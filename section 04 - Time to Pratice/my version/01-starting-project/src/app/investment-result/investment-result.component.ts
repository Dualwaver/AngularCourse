import { Component, Input } from '@angular/core';
import { IInvestementResult } from '../investment/investment.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investement-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.scss',
})
export class InvestmentResultComponent {
  @Input() investmentData!: IInvestementResult[];
}
