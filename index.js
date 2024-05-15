class ECTS {
  constructor(score) {
    this.score = score;
  }

  ectsFromScore() {
    if (this.score >= 0 && this.score < 60) {
      return 'F'
    } else if (this.score >= 60 && this.score < 65) {
      return 'E'
    } else if (this.score >= 65 && this.score < 74) {
      return 'D'
    } else if (this.score >= 74 && this.score < 82) {
      return 'C'
    } else if (this.score >= 82 && this.score < 90) {
      return 'B'
    } else if (this.score >= 90 && this.score < 101) {
      return 'A'
    } else {
      return 'Invalid value'
    }

  }
}

module.exports = ECTS;
