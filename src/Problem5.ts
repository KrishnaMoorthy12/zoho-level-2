import { Scanner } from './lib/Scanner';

export class Problem5 {
  constructor(private readonly scanner = new Scanner()) {}

  private async getMatrix(size: number): Promise<number[][]> {
    const matrix = [];
    for (let i = 0; i < size; i++) {
      const ip = await this.scanner.getInput('');
      const row = ip.split(' ');
      if (row.length != size) throw new Error('The matrix must be a nxn matrix');
      matrix.push(row.map(n => +n));
    }

    return matrix;
  }

  rotateOnce(matrix: number[][]) {
    const backup = JSON.parse(JSON.stringify(matrix));

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (j === 0) {
          matrix[i][j] = backup[i + 1][j];
        } else if (i !== 0 && j === matrix.length - 1) {
          matrix[i + 1][j] = backup[i][j];
        } else {
          matrix[i][j + 1] = backup[i][j];
        }
      }
    }
  }

  async main() {
    const size = +(await this.scanner.getInput('Enter the size of the matrix: '));
    const matrix: number[][] = await this.getMatrix(size);
    const rotations = +(await this.scanner.getInput('Enter the number of rotations: '));
    this.scanner.destroy();

    for (let i = 0; i < rotations; i++) {
      this.rotateOnce(matrix);
    }

    console.log(matrix);
  }
}
