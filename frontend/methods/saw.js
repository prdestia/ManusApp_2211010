export function calculateSAW(data, weights, isBenefit) {
  // Cari min dan max per kolom sekali saja
  const cols = data[0].length;
  const maxValues = Array.from({ length: cols }, (_, idx) => Math.max(...data.map(row => row[idx])));
  const minValues = Array.from({ length: cols }, (_, idx) => Math.min(...data.map(row => row[idx])));

  const normalized = data.map(row =>
    row.map((val, idx) => {
      const normVal = isBenefit[idx]
        ? val / maxValues[idx]
        : minValues[idx] / val;
      return parseFloat(normVal.toFixed(6)); // jaga presisi seperti Excel
    })
  );

  const scores = normalized.map(row => 
    parseFloat(
      row.reduce((acc, val, idx) => acc + val * weights[idx], 0).toFixed(6)
    )
  );

  return scores;
}
