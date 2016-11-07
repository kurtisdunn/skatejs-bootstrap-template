export default function (arr, render, otherwise) {
  return arr && arr.length ? arr.map(render) : otherwise && otherwise(arr);
}
