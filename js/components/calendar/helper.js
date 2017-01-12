const helper = {

  compareDate: function(d1, d2) {
    if (d1.year > d2.year) {
      return 1;
    } else if (d1.year === d2.year) {
      if (d1.month > d2.month) {
        return 1;
      } else if (d1.month === d2.month) {
        if (d1.date > d2.date) {
          return 1;
        } else if (d1.date === d2.date) {
          return 0;
        } else {
          return -1;
        }
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  },

  compareFullDate: function(d1, d2) {
    if (d1.getFullYear() > d2.getFullYear()) {
      return 1;
    } else if (d1.getFullYear() === d2.getFullYear()) {
      if (d1.getMonth() > d2.getMonth()) {
        return 1;
      } else if (d1.getMonth() === d2.getMonth()) {
        if (d1.getDate() > d2.getDate()) {
          return 1;
        } else if (d1.getDate() === d2.getDate()) {
          return 0;
        } else {
          return -1;
        }
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  },

  isValidDate: function(value) {
    return this.getValidDate(value);
  },

  getValidDate: function(value) {
    const dateSplit = value.split('-');

    if (dateSplit.length === 3) {
      const isValidNum = !dateSplit.some((num) => isNaN(num));

      if (isValidNum) {
        const date = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);

        if (date.getFullYear() === parseInt(dateSplit[0], 10)
          && date.getMonth() + 1 === parseInt(dateSplit[1], 10)
          && date.getDate() === parseInt(dateSplit[2], 10)) {
          return {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate()
          };
        }
        return null;
      }
      return null;
    }
    return null;
  },

  formatDate: function(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate()
    };
  }

};

export default helper;
