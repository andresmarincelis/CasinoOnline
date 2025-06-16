export function formatNumberShort(num: number): string {
  if (num >= 1_000_000_000) {
    return (
      (num / 1_000_000_000).toFixed(num % 1_000_000_000 === 0 ? 0 : 2) + 'MM'
    );
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 2) + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 2) + 'K';
  } else {
    return num.toString();
  }
}
