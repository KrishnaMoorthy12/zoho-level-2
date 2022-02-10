import { Scanner } from './lib/Scanner';

export class Problem1 {
  constructor(private readonly scanner = new Scanner()) {}

  async main() {
    const ip1 = await this.scanner.getInput('Enter array values of 1, separated by space: ');
    const ip2 = await this.scanner.getInput('Enter array values of 2, separated by space: ');
    this.scanner.destroy();

    const array1 = ip1.split(' ').map(n => +n);
    const array2 = ip2.split(' ').map(n => +n);

    const merged = [...array1, ...array2];

    for (let i = 0; i < merged.length; i++) {
      for (let j = 0; j < merged.length - i - 1; j++) {
        if (merged[j] > merged[j + 1]) {
          [merged[j], merged[j + 1]] = [merged[j + 1], merged[j]];
        }
      }
    }
    // */

    // const merged: number[] = [];
    // let a1 = 0;
    // let a2 = 0;
    // for(let i = 0; i< array1.length + array2)

    // to remove dup

    const result: number[] = [];
    for (let i = 0; i < merged.length; i++) {
      if (!result.includes(merged[i])) {
        result.push(merged[i]);
      }
    }

    console.log(result);
  }
}
