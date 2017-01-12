import React from 'react';
import { mount } from 'enzyme';

import Calendar from '../js/components/calendar/index';

describe('test calendar', () => {

  describe('test display', () => {

    it('displays with Monday', () => {

      let week = {
        index: 1,
        value: 'Mon'
      };
      const calendar = mount(
        <Calendar startWeek={week.index} />
      );
      const firstWrp = calendar.find('th').at(0);

      expect(firstWrp.text()).toEqual(week.value);

    });

    it('displays with specific page(year and month)', () => {

      let page = '2016-01-10';
      let dates = page.split('-').map((str) => parseInt(str, 10));
      let date = {
        year: dates[0],
        month: dates[1],
        date: dates[2]
      };
      const calendar = mount(
        <Calendar page={page} />
      );
      const yearNode = calendar.find('li.selected[data-year=' + date.year + ']');
      const monthNode = calendar.find('li.selected[data-month=' + (date.month - 1) + ']');

      expect(yearNode.text()).toEqual('' + date.year);
      expect(monthNode.text()).toEqual('Jan');

    });

    it('displays with selected date(year, month and date)', () => {

      let value = '2016-01-10';
      let dates = value.split('-').map((str) => parseInt(str, 10));
      let date = {
        year: dates[0],
        month: dates[1],
        date: dates[2]
      };
      const calendar = mount(
        <Calendar selectedDate={value} />
      );
      const selectedNode = calendar.find('td.selected');

      expect(selectedNode.text()).toEqual('' + date.date);

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

      expect(yearNode.text()).toEqual('' + d.getFullYear());
      expect(monthNode.text()).toEqual(d.toDateString().split(' ')[1]);

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

  });


  describe('test disabled date', () => {

    it('do not trigger disabled ', () => {

      const disabled = {
        min: '2016-10-7',
        max: '2016-10-27',
        weeks: [0, 3, 6],
        dates: ['2016-10-10', '2016-10-13', '2016-10-18', '2016-10-21']
      };
      const enableNum = 6;
      const calendar = mount(
        <Calendar page={disabled.min} disabled={disabled} />
      );

      expect(calendar.find('.default').length).toEqual(enableNum);

    });

  });

  describe('test event', () => {

    it('triggers beforeChange(), onChange and afterChange()', () => {

      let beforeChange = jest.genMockFunction();
      let onChange = jest.genMockFunction();
      let afterChange = jest.genMockFunction();
      let date = {
        year: 2016,
        month: 11,
        date: 11
      };
      const calendar = mount(
        <Calendar page={date.year + '-' + date.month + '-' + date.date}
          beforeChange={beforeChange}
          onChange={onChange}
          afterChange={afterChange} />
      );
      const clickWrp = calendar.find('td[data-month=0]').at(date.date - 1);

      clickWrp.simulate('click');

      expect(beforeChange.mock.calls[0][0]).toEqual(date);
      expect(onChange.mock.calls[0][0]).toEqual(date);
      expect(afterChange.mock.calls[0][0]).toEqual(date);

    });

    it('changes the screen value when date is clicked', () => {

      let page = '2016-11-11';
      let dates = page.split('-').map((str) => parseInt(str, 10));
      let date = {
        year: dates[0],
        month: dates[1],
        date: dates[2]
      };
      const calendar = mount(
        <Calendar page={page} hasScreen={true} unfold={true} />
      );
      const clickWrp = calendar.find('td[data-month=0]').at(date.date - 1);
      const screenWrp = calendar.find('input');

      clickWrp.simulate('click');

      expect(screenWrp.props().value).toEqual(date.year + '-' + date.month + '-' + date.date);

    });

  });

});
