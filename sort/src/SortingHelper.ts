import { MergeSort } from './MergeSort';

class SortingHelper {
  public static isSorted(arr: Array<any>): boolean {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        return false;
      }
    }
    return true;
  }
  public static sortTest(sortName: string, arr: Array<any>) {
    const startTime: number = new Date().getTime();
    if (sortName === 'mergeSort') {
      console.log('mergeSort started');
      MergeSort.sorting(arr);
    }
    const endTime: number = new Date().getTime();
    const time = (endTime - startTime) / 1000;
    if (!SortingHelper.isSorted(arr)) {
      throw new Error('sort failed!!!');
    }
    console.log(`${sortName}:  ${time}秒`);
  }
}

export { SortingHelper };
