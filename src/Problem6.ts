import { Scanner } from './lib/Scanner';

export class Problem6 {
  constructor(private readonly scanner = new Scanner()) {}

  async main() {
    const moneyInHouses = (await this.scanner.getInput(
      'Enter the money in each house (space separated): '
    )).split(' ').map(n=> +n);

    let sumOfOdds = 0;
    let sumOfEvens = 0;

    for (let i = 0, j = 1; i < moneyInHouses.length && j ; )
  }
}
