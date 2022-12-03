export default function analyzeArray(arr) {
  const average = () => {
    return arr.reduce((total, num) => total + num, 0) / arr.length;
  };
  const min = () => {
    return Math.min(...arr);
  };
  const max = () => {
    return Math.max(...arr);
  };
  const length = () => {
    return arr.length;
  };
  return { average: average(), min: min(), max: max(), length: length() };
}
