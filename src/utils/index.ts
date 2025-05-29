export const formatNumber = (num: number = 0) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
  return num.toString();
}

export const formatNumberWithSpaces = (num: number = 0) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};