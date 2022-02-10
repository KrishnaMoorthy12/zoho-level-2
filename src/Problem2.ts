import { Scanner } from './lib/Scanner';

export class Problem2 {
  constructor(private readonly scanner = new Scanner()) {}

  async main() {
    const sentence = await this.scanner.getInput('Enter the sentence: ');
    this.scanner.destroy();

    const words = sentence.split(' ');

    let smallest: string = words[0];
    let largest: string = words[0];
    for (const word of words) {
      if (word.length < smallest.length) smallest = word;
      if (word.length > largest.length) largest = word;
    }

    console.log(`Smallest: "${smallest}"\n`, `Largest: "${largest}"`);
  }
}
