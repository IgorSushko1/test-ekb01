import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Cars } from '../cars.interface';
import { ProtractorExpectedConditions } from 'protractor';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-credit-menu',
  templateUrl: './credit-menu.component.html',
  styleUrls: ['./credit-menu.component.scss']
})

export class CreditMenuComponent implements OnInit {

  constructor() { }

  math = Math;

  carMinPrice = 2199000;

  firstPayment: string;
  numFirstPayment: number = Math.round(Math.floor(this.carMinPrice / 2) / 1000) * 1000;
  firstPayInPercent: number = Math.floor((this.numFirstPayment / this.carMinPrice) * 100);

  maxMonthLimit: number = 100000;
  minMonthLimit: number = 5000;
  monthLimit: number;
  perMonthLimit: string;

  maxMonth: number = 60;
  minMonth: number = 2;
  termInMonth: number = 30;
  termInYears: number = 5;
  declensionOfYear: string;

  yearBottomLimit: string;
  yearLimit: number = 141230;

  perMonthPayment: string;
  monthPayment: number = 8900;

  percent: number = 11.8;

  total: number;

  creditValue: number;

  payPerMonth: number;

  handlePay() {
    this.creditValue = this.monthLimit * this.termInMonth;

    this.mathMonth(this.creditValue);

    this.mathBodyOfCredit();

    if (this.termInMonth == 60) {
      this.monthLimit = this.payPerMonth;
    }

    this.mathBodyOfCredit();

    this.numberToString(this.numFirstPayment, 'firstPayment');

    this.updateFields();
  }

  handlePrepayment() {
    this.mathBodyOfCredit();
    let monthLimit = this.total / this.termInMonth;

    if (monthLimit < 10000) {
      this.monthLimit = 10000;
      this.handlePay()
    }

    if (monthLimit > 10000) {
      this.monthLimit = Math.round(monthLimit / 100) * 100;
    }

    this.updateFields();
  }

  handleMonth() {
    this.monthLimit = Math.round(this.payPerMonth / 100) * 100;
    this.mathBodyOfCredit();
    this.updateFields();
  }

  mathCredit() {
    this.creditValue = this.monthLimit * this.termInMonth;
  }

  mathBodyOfCredit() {
    let months = this.termInMonth;
    let hadMoney = this.numFirstPayment;
    const percent = this.percent / 100;
    let needToPay = this.carMinPrice - hadMoney;
    let percentUp = Math.floor(needToPay * percent);
    let totalPercent: number = percentUp;
    let monthLeft = months;
    this.termInYears = Math.ceil(months / 12);
    let years = this.termInYears;
    let readyToPayInMonth = needToPay / monthLeft;

    for (let i = 0; i < years; i++) {
      if (monthLeft >= 12) {
        needToPay -= percentUp + (readyToPayInMonth * 12);
      }
      else {
        needToPay -= percentUp + (readyToPayInMonth * monthLeft);
      }
      monthLeft -= 12;
      readyToPayInMonth = Math.floor(needToPay / monthLeft);
      percentUp = Math.floor(needToPay * percent);
      totalPercent += percentUp;
    }

    this.total = this.carMinPrice + totalPercent - hadMoney;
    this.payPerMonth = this.total / months;

  }

  mathMonth(value: number) {
    let month = this.total / value;
    console.log('month AFTER === ' + month);
    month = Math.ceil(month * this.termInMonth);

    if (month <= this.maxMonth && month >= this.minMonth) {
      this.termInMonth = month;
    }
    if (month > this.maxMonth) {
      this.termInMonth = this.maxMonth;

    }
    if (month < this.minMonth) {
      this.termInMonth = this.minMonth;
    }

  }

  mathPay() {
    const pay = Math.round((this.total / this.termInMonth) / 100) * 100;
    if (pay <= this.maxMonthLimit || pay >= this.minMonthLimit) {
      this.monthLimit = pay;
    }
    if (pay > this.maxMonthLimit) {
      this.monthLimit = this.maxMonthLimit;
    }
    if (pay < this.minMonthLimit) {
      this.monthLimit = this.minMonthLimit;
    }
  }



  updateFields() {
    let yearBottomLimit = Math.ceil(this.monthLimit * 12);
    const percent = Math.floor((this.numFirstPayment / this.carMinPrice) * 100);


    this.firstPayment = this.numFirstPayment.toLocaleString('ru-RU');
    this.perMonthLimit = this.monthLimit.toLocaleString('ru-RU');
    this.yearBottomLimit = this.yearLimit.toLocaleString('ru-RU');
    this.perMonthPayment = Math.ceil(this.payPerMonth).toLocaleString('ru-RU');
    this.yearBottomLimit = yearBottomLimit.toLocaleString('ru-RU');
    this.firstPayInPercent = percent;


  }

  numberToString(n: number, toStr?: string) {
    if (toStr) this.findVariable(toStr, n.toLocaleString('ru-Ru'));
  }

  findVariable(someName: string, answer: string) {
    const arrWithVariables: string[] = ['firstPayment', 'perMonthLimit', 'yearBottomLimit', 'perMonthPayment'];
    someName === arrWithVariables[0] ? this.firstPayment = answer :
      someName === arrWithVariables[1] ? this.perMonthLimit = answer :
        someName === arrWithVariables[2] ? this.yearBottomLimit = answer :
          someName === arrWithVariables[3] ? this.perMonthPayment = answer : console.log('this name doesnt exist');
  }

  calcYearsOfCredit(e: number): void {
    this.termInYears = Math.ceil(e / 12);
    this.declensionOfYear =
      this.termInYears > 0 && this.termInYears < 2 ? 'год' :
        this.termInYears > 1 && this.termInYears < 5 ? 'года' :
          this.termInYears > 4 ? 'лет' : 'что-то пошло не так';
  }

  ngOnInit(): void {

    this.mathBodyOfCredit();
    this.mathPay();
    this.updateFields();

    // this.numberToString(this.numFirstPayment, 'firstPayment');
    // this.numberToString(this.monthLimit, 'perMonthLimit');
    // this.numberToString(this.yearLimit, 'yearBottomLimit');
    // this.numberToString(this.monthPayment, 'perMonthPayment');

    // const percent = Math.floor(this.numFirstPayment / this.carMinPrice);
    // this.firstPayInPercent = percent;
  }

}
