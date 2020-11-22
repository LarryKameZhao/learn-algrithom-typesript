class ArrayGenerator {
  public static generateRandomArray(n: number, bound: number) {
    const array = [];
    for (let i = 0; i < n; i++) {
      const randomNum = Math.ceil(Math.random() * (bound - n)) + n;
      array.push(randomNum);
    }
    return array;
  }
  public static generateOderedArray(n: number) {
    const array = [];
    for (let i = 0; i < n; i++) {
      array.push[i];
    }
    return array;
  }
}

export { ArrayGenerator };
