import { Component, inject, signal } from '@angular/core';
import { IInvestment } from '../models/investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  investmentService = inject(InvestmentService);

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    console.log('SUBMITTED:');

    let investment: IInvestment = {
      //#Note: + transforms string to number
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    };

    console.log('investment:', investment);
    this.investmentService.calculateInvestmentResults(investment);

    //Reset fields
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn = signal('5');
    this.enteredDuration = signal('10');
  }
}
