jest.autoMockOff();

import React from 'react';
import TestUtils from 'react-addons-test-utils';

const Calendar = require('../js/components/calendar/index.jsx').default;

describe('Test calendar component', () => {

  describe('Test render', () => {

    it('renders a calendar', () => {

      let calendar = TestUtils.renderIntoDocument(
        <Calendar />
      );
      let calendarNode = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'calendar');

      expect(calendarNode.length).toBe(1);

    });

    it('render with screen', () => {

      let calendar = TestUtils.renderIntoDocument(
        <Calendar hasScreen={true}/>
      );
      let calendarNode = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'calendar hide');
      let screenNode = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'calendar-screen');

      expect(calendarNode.length).toBe(1);
      expect(screenNode.length).toBe(1);

    });

    it('render with screen and unfold calendar', () => {

      let calendar = TestUtils.renderIntoDocument(
        <Calendar hasScreen={true} unfold={true}/>
      );
      let calendarNode = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'calendar');
      let screenNode = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'calendar-screen unfold');

      expect(calendarNode.length).toBe(1);
      expect(screenNode.length).toBe(1);

    });

  });

  describe('Test display', () => {

    it('displays with Monday', () => {
      let week = {
        index: 1,
        value: 'Mon'
      };

      let calendar = TestUtils.renderIntoDocument(
        <Calendar startWeek={week.index}/>
      );
      let firstThNode = TestUtils.scryRenderedDOMComponentsWithTag(calendar, 'th')[0];

      expect(firstThNode.innerHTML).toBe(week.value);

    });

    it('displays with specific page(year and month)', () => {

      let page = '2016-01-10';
      let dates = page.split('-').map((str) => parseInt(str, 10));
      let date = {
        year: dates[0],
        month: dates[1],
        date: dates[2]
      };
      let onChange = jest.genMockFunction();

      let calendar = TestUtils.renderIntoDocument(
        <Calendar page={page} onChange={onChange} />
      );

      let clickNode = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'default')[date.date - 1];
      TestUtils.Simulate.click(clickNode);

      expect(onChange.mock.calls[0][0]).toEqual(date);

    });

    it('displays with selected date(year, month and date)', () => {

      let value = '2016-01-10';
      let dates = value.split('-').map((str) => parseInt(str, 10));
      let date = {
        year: dates[0],
        month: dates[1],
        date: dates[2]
      };
      let onChange = jest.genMockFunction();

      let calendar = TestUtils.renderIntoDocument(
        <Calendar selectedDate={value} onChange={onChange} />
      );

      let selectedNode = TestUtils.scryRenderedDOMComponentsWithTag(calendar, 'td').filter((dom) => dom.className === 'selected')[0];

      expect(selectedNode.innerHTML).toBe('' + date.date);

      let clickDate = {
        year: dates[0],
        month: dates[1],
        date: 1
      };
      let clickNode = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'default')[clickDate.date - 1];
      TestUtils.Simulate.click(clickNode);

      expect(onChange.mock.calls[0][0]).toEqual(clickDate);

    });

  });

  describe('Test local', () => {

    it('displays with chinese weeks and months', () => {

      const local = {
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
      };

      let calendar = TestUtils.renderIntoDocument(
        <Calendar local={local} />
      );

      let weekLineNode = TestUtils.scryRenderedDOMComponentsWithTag(calendar, 'tr')[0];
      let monthLineNode = TestUtils.scryRenderedDOMComponentsWithTag(calendar, 'ul')[1];

      expect(weekLineNode.textContent).toBe(local.weeks.join(''));
      expect(monthLineNode.textContent).toBe(local.months.join(''));

    });

  });

  describe('Test disabled date', () => {

    it('do not trigger disabled ', () => {

      const disabled = {
        min: '2016-10-7',
        max: '2016-10-27',
        weeks: [0, 3, 6],
        dates: ['2016-10-10', '2016-10-13', '2016-10-18', '2016-10-21']
      };
      let enableNum = 6;

      let calendar = TestUtils.renderIntoDocument(
        <Calendar page={disabled.min} disabled={disabled} />
      );

      let clickableNum = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'default').length;

      expect(clickableNum).toBe(enableNum);

    });

  });

  describe('Test event', () => {

    it('triggers beforeChange(), onChange and afterChange()', () => {

      let beforeChange = jest.genMockFunction();
      let onChange = jest.genMockFunction();
      let afterChange = jest.genMockFunction();

      let date = {
        year: 2016,
        month: 11,
        date: 11
      };

      let calendar = TestUtils.renderIntoDocument(
        <Calendar beforeChange={beforeChange} onChange={onChange} afterChange={afterChange}/>
      );

      let clickNode = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'default')[date.date - 1];
      TestUtils.Simulate.click(clickNode);

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

      let calendar = TestUtils.renderIntoDocument(
        <Calendar page={page} hasScreen={true} unfold={true} />
      );

      let clickNode = TestUtils.scryRenderedDOMComponentsWithClass(calendar, 'default')[date.date - 1];
      TestUtils.Simulate.click(clickNode);

      let screenNode = TestUtils.findRenderedDOMComponentWithTag(calendar, 'input');

      expect(screenNode.value).toEqual(date.year + '-' + date.month + '-' + date.date);

    });

  });

});
