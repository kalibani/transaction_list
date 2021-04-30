export const formatDate = (date) => {
  const d = new Date(date);
  const years = new Intl.DateTimeFormat('id', { year: 'numeric' }).format(d);
  const month = new Intl.DateTimeFormat('id', { month: 'long' }).format(d);
  const days = new Intl.DateTimeFormat('id', { day: '2-digit' }).format(d);
  const formatted = `${days} ${month} ${years}`;
  return formatted;
};

export const formatAmount = (amount) => {
  const numberString = amount.toString();
  const formatted = numberString.replace(/(\d)(?=(\d{3})+$)/g, '$&.');

  return `Rp${formatted}`;
};

export const sortAsc = (data, field) => data.sort((a, b) => {
  if (a[field] > b[field]) {
    return 1;
  }
  if (b[field] > a[field]) {
    return -1;
  }
  return 0;
});

export const sortDesc = (data, field) => data.sort((a, b) => {
  if (a[field] > b[field]) {
    return -1;
  }
  if (b[field] > a[field]) {
    return 1;
  }
  return 0;
});
