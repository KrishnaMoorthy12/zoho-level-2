import { Scanner } from './lib/Scanner';

export class Problem3 {
  constructor(private readonly scanner = new Scanner()) {}

  async main() {
    const ip = await this.scanner.getInput('Enter the string: ');
    this.scanner.destroy();

    const ipArray = ip.split('');

    const counts: Record<string, number> = {};

    for (const char of ipArray) {
      if (!counts[char]) counts[char] = 1;
      else counts[char]++;
    }

    for (const item of Object.entries(counts)) {
      console.log(`${item[0]} - ${item[1]}`);
    }
  }
}
