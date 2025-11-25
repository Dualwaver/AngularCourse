import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultService } from '../investment/investment-result.service';
import { IInvestement } from '../investment/investment.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  investmentResultService = inject(InvestmentResultService);

  enteredIniInvestment = '';
  enteredAnnualInvestment = '';
  enteredExpectedReturn = '';
  enteredDuration = '';

  OnCalculate() {
    let investment: IInvestement = {
      initialInvestment: Number(this.enteredIniInvestment),
      annualInvestment: Number(this.enteredAnnualInvestment),
      expectedReturn: Number(this.enteredExpectedReturn),
      duration: Number(this.enteredDuration),
    };

    let data = this.investmentResultService.CalculateInvestment(investment);
    console.log(data);
    return data;
  }
}
