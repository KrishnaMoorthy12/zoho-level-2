import { Scanner } from './lib/Scanner';

export class Problem4 {
  constructor(private readonly scanner = new Scanner()) {}

  async main() {
    const mathExpr = await this.scanner.getInput('Enter the mathematical expression: ');
    this.scanner.destroy();
    const symbols = mathExpr.split('');

    const OPERATORS = ['+', '-', '*', '/'];
    const VARS = 'abcdefghijklmnopqrstuvwxyz';
    const NUMS = '1234567890';

    const ALPHANUMS = [...VARS.split(''), ...NUMS.split('')];

    const stack = [];

    for (let i = 0; i < symbols.length; i++) {
      const symbol = symbols[i];
      if (symbol === '(') {
        stack.push(symbol);
      } else if (symbol === ')') {
        if (stack.length === 0) {
          console.log('Invalid');
          return;
        }
        stack.pop();
      }

      if (OPERATORS.includes(symbol)) {
        if (!ALPHANUMS.includes(symbols[i - 1]) || !ALPHANUMS.includes(symbols[i + 1])) {
          console.log('Invalid');
          return;
        }
      }
    }

    if (stack.length > 0) {
      console.log('Invalid');
    } else {
      console.log('Valid');
    }
  }
}
