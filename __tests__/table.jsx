import React from 'react';
import {mount} from 'enzyme';

import Table from '../js/components/table/index';

describe('test table', () => {

  let column;
  let data;
  let checkboxOnChange;
  let checkboxInitialize;
  let table;

  beforeEach(() => {

    column = [{
      title: 'ID',
      key: 'id',
      width: '150px',
      dataIndex: 'id',
      sortBy: 'number',
      filter: [{
        name: 'id大于等于4',
        key: '1',
        filter: function(item) {
          if (item.id >= 4) {
            return true;
          }
          return false;
        }
      }, {
        name: 'id小于4',
        key: '2',
        filter: function(item) {
          if (item.id < 4) {
            return true;
          }
          return false;
        }
      }]
    }, {
      title: 'Category',
      key: 'category',
      width: '120px',
      dataIndex: 'category',
      sortBy: 'string'
    }, {
      title: 'Flavor',
      key: 'flavor',
      width: '70px',
      dataIndex: 'flavor',
      sortBy: 'string'
    }, {
      title: 'Level',
      key: 'level',
      dataIndex: 'level',
      filter: [{
        name: 'level 1',
        key: '1',
        filter: function(item) {
          return item.level.localeCompare('First Level') === 0;
        }
      }, {
        name: 'level 2',
        key: '2',
        filter: function(item) {
          return item.level.localeCompare('Second Level') === 0;
        }
      }, {
        name: 'level 3',
        key: '3',
        filter: function(item) {
          return item.level.localeCompare('Third Level') === 0;
        }
      }, {
        name: 'level 4',
        key: '4',
        filter: function(item) {
          return item.level.localeCompare('Fourth Level') === 0;
        }
      }],
      sortBy: function(item1, item2) {
        let weight = ['First Level', 'Second Level', 'Third Level', 'Fourth Level'];
        if (weight.indexOf(item1.level) > weight.indexOf(item2.level)) {
          return 1;
        } else if (weight.indexOf(item1.level) < weight.indexOf(item2.level)) {
          return -1;
        } else {
          return 0;
        }
      }
    }, {
      title: 'CPU',
      key: 'cpu',
      dataIndex: 'cpu',
      sortBy: 'number',
      width: '50px'
    }, {
      title: 'Price',
      key: 'price',
      dataIndex: 'price',
      sortBy: 'number'
    }, {
      title: 'Double Price',
      key: 'double_price',
      sortBy: function(item1, item2) {
        if (item1.price * 2 > item2.price * 2) {
          return 1;
        } else if (item1.price * 2 < item2.price * 2) {
          return -1;
        } else {
          return 0;
        }
      },
      render: function(col, item, index) {
        return <div style={{color: '#f78913'}}>{item.price * 2}</div>;
      }
    }, {
      title: 'Data Print',
      key: 'data_print',
      printData: function(col, item, e) {
        console.log('event:', e, 'GET COLUMN:', col, ' DATA:', item);
      },
      render: function(col, item, index) {
        if (item.id > 4) {
          return <div>Printing Disabled</div>;
        } else {
          return (
            <div style={{fontWeight: 500, cursor: 'pointer'}}
              onClick={this.printData.bind(this, col, item)}>{'Print ID ' + item.id}
            </div>
          );
        }
      }
    }];

    data = [{
      id: 1,
      category: 'Micro-1',
      flavor: 'Micro',
      level: 'First Level',
      cpu: '1',
      price: '0.056'
    }, {
      id: 2,
      category: 'Standard-3',
      flavor: 'Standard',
      level: 'Second Level',
      cpu: '3',
      price: '0.444'
    }, {
      id: 3,
      category: 'Micro-2',
      flavor: 'Micro',
      level: 'Third Level',
      cpu: '5',
      price: '0.056'
    }, {
      id: 4,
      category: 'Standard-2',
      flavor: 'Standard',
      level: 'Fourth Level',
      cpu: '4',
      price: '0.444'
    }, {
      id: 5,
      category: 'Micro-3',
      flavor: 'Micro',
      level: 'Second Level',
      cpu: '1',
      price: '0.056'
    }, {
      id: 6,
      category: 'Standard-1',
      flavor: 'Standard',
      level: 'Third Level',
      cpu: '7',
      price: '0.444'
    }];

    checkboxOnChange = jest.genMockFunction();
    checkboxInitialize = jest.genMockFunction();

    table = mount(
      <Table column={column}
        data={data}
        dataKey="id"
        checkbox={true}
        checkboxInitialize={checkboxInitialize}
        checkboxOnChange={checkboxOnChange}
        striped={true}
        hover={true} />
    );
    table.instance().resizeCol = () => {};

  });

  describe('test render', () => {

    beforeEach(() => {

      checkboxOnChange = jest.genMockFunction();
      checkboxInitialize = (item) => (item.flavor === 'Micro');
      table = mount(
        <Table column={column}
          data={data}
          dataKey="id"
          checkbox={true}
          checkboxInitialize={checkboxInitialize}
          checkboxOnChange={checkboxOnChange}
          striped={true}
          hover={true} />
      );
      table.instance().resizeCol = () => {};

    });

    it('should render a table', () => {

      const checkboxNodes = table.find('input');
      const columnNodes = table.find('.table-header').children();
      const rowNodes = table.find('.row');
      const selectedRow = table.find('.row.selected');

      expect(checkboxNodes.length).toBe(data.length + 1);
      expect(columnNodes.length).toBe(column.length + 1);
      expect(rowNodes.length).toBe(data.length);
      expect(selectedRow.length).toBe(data.filter(checkboxInitialize).length);

    });

    it('should render a table without listener', () => {

      table = mount(
        <Table column={column}
          data={data}
          dataKey="id"
          checkbox={true} />
      );
      table.instance().resizeCol = () => {};
      const columnNodes = table.find('.table-header').children();
      const rowNodes = table.find('.row');

      let key = 0;
      let checked = true;
      const checkbox = table.find('input').at(key + 1);

      checkbox.simulate('change', {
        target: {
          value: data[key].id,
          checked: checked
        }
      });
      const selectedRow = table.find('.row.selected');

      expect(selectedRow.length).toBe(1);
      expect(columnNodes.length).toBe(column.length + 1);
      expect(rowNodes.length).toBe(data.length);

    });

    it('should update data when receive new props', () => {

      //when table has no filter, sortCol
      let newData = [{
        id: 1,
        category: 'Micro-1',
        flavor: 'Micro',
        level: 'First Level',
        cpu: '4',
        price: '2.3333'
      }];
      table.setProps({
        data: newData,
        dataKey: 'id'
      });
      const rowNodes = table.find('.row');

      expect(rowNodes.length).toBe(newData.length);

      //when table has filter, sortCol

      //test

    });

    it('should unmount the table', () => {

      spyOn(table.node, 'componentWillUnmount').and.callThrough();
      table.unmount();

      expect(table.node.componentWillUnmount).toHaveBeenCalled();

    });

  });

  describe('test provided api', () => {

    it('should be loading', () => {

      let isLoading = true;
      table.node.loading(isLoading);
      const tbody = table.find('.table-body');

      expect(table.state().loading).toBe(isLoading);
      expect(tbody.props().style.display).toBe('none');

    });

    it('should clear state', () => {

      checkboxOnChange = jest.genMockFunction();
      checkboxInitialize = (item) => (item.flavor === 'Micro');
      table = mount(
        <Table column={column}
          data={data}
          dataKey="id"
          checkbox={true}
          checkboxInitialize={checkboxInitialize}
          checkboxOnChange={checkboxOnChange}
          striped={true}
          hover={true} />
      );
      table.instance().resizeCol = () => {};

      expect(table.find('.row.selected').length).toBe(data.filter(checkboxInitialize).length);

      table.node.clearState();

      expect(table.find('.row.selected').length).toBe(0);

    });

  });

  describe('test checkbox', () => {

    it('should check a row', () => {

      let key = 0;
      let checked = true;
      const checkbox = table.find('input').at(key + 1);

      checkbox.simulate('change', {
        target: {
          value: data[key].id,
          checked: checked
        }
      });

      expect(checkboxOnChange).toBeCalled();
      expect(checkboxOnChange.mock.calls[0]).toEqual([checked, data[key], [data[key]]]);

      checkbox.simulate('change', {
        target: {
          value: data[key].id,
          checked: !checked
        }
      });

      expect(checkboxOnChange.mock.calls[1]).toEqual([!checked, data[key], []]);

    });

    it('should check all rows', () => {

      let keyValue = 'null';
      let checked = true;
      const checkbox = table.find('input').at(0);

      checkbox.simulate('change', {
        target: {
          value: keyValue,
          checked: checked
        }
      });
      let checkedRows = table.find('.row.selected');

      expect(checkedRows.length).toBe(data.length);
      expect(checkboxOnChange.mock.calls[0]).toEqual([checked, undefined, data]);

      checkbox.simulate('change', {
        target: {
          value: keyValue,
          checked: !checked
        }
      });
      checkedRows = table.find('.row.selected');

      expect(checkedRows.length).toBe(0);
      expect(checkboxOnChange.mock.calls[1]).toEqual([!checked, undefined, []]);

    });

  });

});
