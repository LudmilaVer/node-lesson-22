import { capitalize, reverseString } from '../src/utils/stringUtils';

console.log(capitalize('Welcome to Hell')); 
console.log(reverseString('Welcome to Hell')); 


import { Finance } from '../src/finance/finance';

const loanPayment = Finance.LoanCalculator.calculateLoanPayment(700000, 7, 77);
const taxAmount = Finance.TaxCalculator.calculateTax(70000, 10);

console.log(`Ежемесячный платеж по кредиту: ${loanPayment}`);
console.log(`Налог на доход: ${taxAmount}`);


import { UserManagement } from '../src/user/userManagement';

const admin = new UserManagement.Admin.AdminUser('Ludmila Verbitskaya', 'gelmut84@gmail.com', false);
admin.changeAccessLevel(true);
console.log(`Admin is super admin: ${admin.isSuperAdmin}`);

