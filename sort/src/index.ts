import { ArrayGenerator } from './ArrayGenerator';
import { SortingHelper } from './SortingHelper';

function main() {
  const n = 10000;
  const arr = ArrayGenerator.generateRandomArray(n, n);
  SortingHelper.sortTest('mergeSort', arr);
}

main();
