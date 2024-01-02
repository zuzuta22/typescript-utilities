const handleDiffDates = (() => {
  const getNow = () => new Date();

  // public API
  return {
    /**
     * Return the difference with today's date.
     * @param date
     * @returns number;
     */
    getDiffDaysFromNow (date: Date): number {
      // getTimeはDate型オブジェクトをmsに変換
      // 1日のミリ秒: 86400000 = 1000(ミリ秒) × 60(秒) × 60(分) × 24(時間)
      // Math.floor: 小数点以下切り捨て
      const now = getNow();
      return Math.floor((now.getTime() - date.getTime()) / 86400000);
    },

    /**
     * 
     * @param date
     * @param _daysToJudge (Optional)
     * @returns boolean
     */
    getIsNew (date: Date, _daysToJudge: number = 7) {
      const diffDays = this.getDiffDaysFromNow(date)
      return this.isNew(diffDays);
    },

    isNew (days: number, _daysToJudge: number = 7): boolean {
      const isNew = days <= _daysToJudge ? true : false;
      return isNew;
    }
  }
})();

export default handleDiffDates;

