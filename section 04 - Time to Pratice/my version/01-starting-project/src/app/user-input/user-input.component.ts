import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultService } from '../investment/investment-result.service';
import {
  IInvestement,
  IInvestementResult,
} from '../investment/investment.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  @Output() calculatedInvestment = new EventEmitter<IInvestementResult[]>();

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
    this.calculatedInvestment.emit(data);

    console.log(data);
  }
}
