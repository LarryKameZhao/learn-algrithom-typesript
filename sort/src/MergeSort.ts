class MergeSort {
  public static sorting(arr: Array<any>) {
    this.sort(arr, 0, arr.length - 1);
  }
  private static sort(arr: Array<any>, l: number, r: number) {
    if (l >= r) {
      return;
    }

    const mid = Math.floor((l + r) / 2);
    this.sort(arr, l, mid);
    this.sort(arr, mid + 1, r);
    this.merge(arr, l, mid, r);
  }
  private static merge(arr: Array<any>, l: number, mid: number, r: number) {
    const temp = [...arr];
    let i = l;
    let j = mid + 1;
    for (let k = i; k <= r; k++) {
      if (i > mid) {
        arr[k] = temp[j - l];
        j++;
      } else if (j > r) {
        arr[k] = temp[i - l];
        i++;
      } else if (temp[i - l] < temp[j - l]) {
        arr[k] = temp[i - l];
        i++;
      } else {
        arr[k] = temp[j - l];
        j++;
      }
    }
  }
}

export { MergeSort };
