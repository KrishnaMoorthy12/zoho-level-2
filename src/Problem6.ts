import { Scanner } from './lib/Scanner';

export class Problem6 {
  constructor(private readonly scanner = new Scanner()) {}

  async main() {
    const moneyInHouses = (
      await this.scanner.getInput('Enter the money in each house (space separated): ')
    )
      .split(' ')
      .map(n => +n);

    let sumOfOdds = 0;
    let sumOfEvens = 0;

    for (let i = 0, j = 1; i < moneyInHouses.length && j < moneyInHouses.length; i += 2, j += 2) {
      // since 0 corresponds to door #1 actually
      sumOfOdds += moneyInHouses[i];
      sumOfEvens += moneyInHouses[j];
    }

    if (sumOfEvens > sumOfOdds) {
      console.log('Rob all the doors with even numbers!');
    } else if (sumOfEvens < sumOfOdds) {
      console.log('Rob all the doors with odd numbers!');
    } else {
      console.log('Whatever!!');
    }
  }
}
