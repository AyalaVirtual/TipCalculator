// Write your function here:
function tipCalculator(quality, total) {
  if (quality === "bad") {
    return (.05 * total);
    } else if (quality === "ok") {
        return (.15  * total);
    } else if (quality === "good") {
        return (.20 * total);
    } else if (quality === "excellent") {
        return (.30 * total);
    } else {
        return (.18 * total);
    }
};



