import { Injectable, signal } from '@angular/core';
import { IInvestment } from './models/investment-input.model';
import { IInvestmentResult } from './models/investment-result.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  resultData = signal<IInvestmentResult[]>([]);

  calculateInvestmentResults(data: IInvestment) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);

      investmentValue += interestEarnedInYear + annualInvestment;

      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;

      let result: IInvestmentResult = {
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      };

      annualData.push(result);
    }

    console.log('Calculated Investment:');
    console.table(annualData);

    this.resultData.set(annualData);
  }
}
