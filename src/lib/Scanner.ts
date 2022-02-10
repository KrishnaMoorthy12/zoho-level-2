import { stdin, stdout } from 'process';
import readline, { ReadLine } from 'readline';

export class Scanner {
  #reader: ReadLine;

  constructor() {
    this.#reader = readline.createInterface({
      input: stdin,
      output: stdout,
    });
  }

  async getInput(q: string): Promise<string> {
    return new Promise(resolve => this.#reader.question(q, a => resolve(a)));
  }

  destroy() {
    this.#reader.close();
  }
}
