import React from 'react';
import {mount} from 'enzyme';

import Calendar from '../js/components/calendar/index';

describe('test calendar', () => {

  const page = '2016-11-11';
  const dates = page.split('-').map((str) => parseInt(str, 10));
  const date = {
    year: dates[0],
    month: dates[1],
    date: dates[2]
  };

  describe('test display', () => {

    it('displays with Monday', () => {

      let week = {
        index: 6,
        value: 'Sat'
      };
      const calendar = mount(
        <Calendar page={'2016-10-11'} startWeek={week.index} />
      );
      const firstWrp = calendar.find('th').at(0);

      expect(firstWrp.text()).toBe(week.value);

      //startDay is equal to firstDay
      let week2 = {
        index: 2,
        value: 'Tue'
      };
      const calendar2 = mount(
        <Calendar page={page} startWeek={week2.index} />
      );
      const firstWrp2 = calendar2.find('th').at(0);

      expect(firstWrp2.text()).toBe(week2.value);

    });

    it('displays with specific page(year and month)', () => {

      const calendar = mount(
        <Calendar page={page} />
      );
      const yearNode = calendar.find('li.selected[data-year=' + date.year + ']');
      const monthNode = calendar.find('li.selected[data-month=' + (date.month - 1) + ']');

      expect(yearNode.text()).toBe('' + date.year);
      expect(monthNode.text()).toBe('Nov');

    });

    it('displays with selected date(year, month and date)', () => {

      const calendar = mount(
        <Calendar selectedDate={page} />
      );
      const selectedNode = calendar.find('td.selected');

      expect(selectedNode.text()).toBe('' + date.date);

    });

    it('displays correctly with invalid selected date', () => {

      let value = '2016-01-10';
      let disabled = {
        dates: ['2016-01-10']
      };
      const calendar = mount(
        <Calendar selectedDate={value} disabled={disabled} />
      );
      const d = new Date();
      const yearNode = calendar.find('li.selected[data-year=' + d.getFullYear() + ']');
      const monthNode = calendar.find('li.selected[data-month=' + d.getMonth() + ']');

      expect(yearNode.text()).toBe('' + d.getFullYear());
      expect(monthNode.text()).toBe(d.toDateString().split(' ')[1]);

    });

    it('displays with custom local', () => {

      const local = {
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      };
      const calendar = mount(
        <Calendar local={local} />
      );
      const monthWrps = calendar.find('li[data-month]');
      const weekWrps = calendar.find('tr').at(0).children();

      expect(monthWrps.map((ele) => ele.text())).toEqual(local.months);
      expect(weekWrps.map((ele) => ele.text())).toEqual(local.weeks);

    });

    it('fold and unfold calendar when it has screen', () => {

      const calendar = mount(
        <Calendar hasScreen={true} unfold={false} />
      );
      const screenBox = calendar.find('.calendar-screen');

      expect(screenBox.hasClass('unfold')).toBe(false);

      screenBox.simulate('click');

      expect(screenBox.hasClass('unfold')).toBe(true);

    });

  });


  describe('test disabled date', () => {

    it('does not trigger disabled date', () => {

      const disabled = {
        min: '2016-10-7',
        max: '2016-10-27',
        weeks: [0, 3, 6],
        dates: ['2016-10-10', '2016-10-13', '2016-10-18', '2016-10-21']
      };
      const activeDate = '2016-10-11';
      const enableNum = 6;
      const calendar = mount(
        <Calendar page={disabled.min} disabled={disabled} />
      );

      expect(calendar.find('.default').length).toBe(enableNum);

      const dateNodes = calendar.find('td[data-month=0]');
      const activeNode = dateNodes.at(Number(activeDate.slice(-2)) - 1);
      const disabledNode = dateNodes.at(Number(disabled.dates[0].slice(-2)) - 1);

      activeNode.simulate('click');
      const selectedNode = calendar.find('td.selected');

      expect(selectedNode.text()).toBe(activeDate.slice(-2));

      disabledNode.simulate('click');
      const selectedNode2 = calendar.find('td.selected');

      expect(selectedNode2.text()).toBe(activeDate.slice(-2));

    });

  });

  describe('test event', () => {

    it('triggers beforeChange(), onChange and afterChange()', () => {

      let beforeChange = jest.genMockFunction();
      let onChange = jest.genMockFunction();
      let afterChange = jest.genMockFunction();
      let newDate = {
        year: 2016,
        month: 11,
        date: 11
      };
      const calendar = mount(
        <Calendar page={newDate.year + '-' + newDate.month + '-' + newDate.date}
          beforeChange={beforeChange}
          onChange={onChange}
          afterChange={afterChange} />
      );
      const clickWrp = calendar.find('td[data-month=0]').at(newDate.date - 1);

      clickWrp.simulate('click');

      expect(beforeChange.mock.calls[0][0]).toEqual(newDate);
      expect(onChange.mock.calls[0][0]).toEqual(newDate);
      expect(afterChange.mock.calls[0][0]).toEqual(newDate);

    });

  });

  describe('test header, including years and months', () => {

    const eventTarget = {
      nativeEvent: {
        stopImmediatePropagation() {}
      }
    };

    it('click year', () => {

      const nextYear = '2017';
      const calendar = mount(
        <Calendar page={page} />
      );
      const yearList = calendar.find('.title-left');

      //simulate open years list
      yearList.simulate('click', eventTarget);

      //simulate click next year
      const nextYearNode = calendar.find('li[data-year=' + nextYear + ']');
      nextYearNode.simulate('click', eventTarget);

      expect(yearList.find('.selected').text()).toBe(nextYear);

    });

    it('click month', () => {

      const nextMonth = 11; //Dec
      const calendar = mount(
        <Calendar page={page} />
      );
      const monthList = calendar.find('.title-right');

      //simulate open months list
      monthList.simulate('click', eventTarget);

      //simulate click next month
      const nextMonthNode = calendar.find('li[data-month=' + nextMonth + ']');
      nextMonthNode.simulate('click', eventTarget);

      expect(monthList.find('.selected').props()['data-month']).toBe(nextMonth);

    });

  });

  describe('test screen value', () => {

    it('changes the screen value when date is clicked', () => {

      const calendar = mount(
        <Calendar page={page} hasScreen={true} unfold={true} />
      );
      const clickWrp = calendar.find('td[data-month=0]').at(date.date - 1);
      const screenWrp = calendar.find('input');

      clickWrp.simulate('click');

      expect(screenWrp.props().value).toBe(date.year + '-' + date.month + '-' + date.date);

    });

    it('onChange screen value, press Enter key and recorect error input', () => {

      const page1 = '2016-01-01';
      const page2 = '2016-01-31';
      const disabledPage = '2016-01-02';
      const errorPage = '2016-01-33333';
      const disabled = {
        dates: [disabledPage]
      };
      const calendar = mount(
        <Calendar page={page1} disabled={disabled} hasScreen={true} unfold={false} />
      );
      const input = calendar.find('input');

      //test active date
      input.simulate('change', {target: {value: page2}});
      input.simulate('keyPress', {
        key: 'Enter' //Enter Key
      });
      expect(input.node.value).toBe(page2);

      //test disabled input date
      input.simulate('change', {target: {value: disabledPage}});
      expect(input.node.value).toBe(disabledPage);

      input.simulate('keyPress', {
        key: 'Enter' //Enter Key
      });
      expect(input.node.value).toBe(page2);

      //test error input date
      input.simulate('change', {target: {value: errorPage}});
      expect(input.node.value).toBe(errorPage);

      input.simulate('keyPress', {
        key: 'Enter' //Enter Key
      });
      expect(input.node.value).toBe(page2);

      //noting will happen when enter except Enter Key
      input.simulate('keyPress', {
        key: 'Left'
      });
      expect(input.node.value).toBe(page2);

    });

  });

});
