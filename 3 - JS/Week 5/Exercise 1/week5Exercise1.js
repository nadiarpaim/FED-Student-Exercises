function largest(a) {
  let num = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= num) {
      num = a[i];
    }
  }
  return num;
}

const arr = [1, 141, 23, 10, 9, 92];
console.log(largest(arr));

