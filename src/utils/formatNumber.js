export const formatNumber = (number) => {
    const newNumber = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 1,
      notation: "compact",
      compactDisplay: "short",
    }).format(number);
    return newNumber;
  };