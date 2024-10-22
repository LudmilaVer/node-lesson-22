"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance = void 0;
var Finance;
(function (Finance) {
    class LoanCalculator {
        static calculateLoanPayment(principal, rate, term) {
            const monthlyRate = rate / 12 / 100;
            return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
        }
    }
    Finance.LoanCalculator = LoanCalculator;
    class TaxCalculator {
        static calculateTax(income, taxRate) {
            return income * (taxRate / 100);
        }
    }
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (exports.Finance = Finance = {}));
