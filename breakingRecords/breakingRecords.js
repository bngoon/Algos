function breakingRecords(scores) {
  let minCount = 0;
  let maxCount = 0;
  let minScore = scores[0];
  let maxScore = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (minScore < scores[i]) {
      minScore = scores[i];
      minCount++;
    } else if (maxScore > scores[i]) {
      maxScore = scores[i];
      maxCount++;
    }
  }
  return [minCount, maxCount];
}
