import React from 'react';
import {shallow} from 'enzyme';

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

    table = shallow(
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

  it('renders table', () => {

    const checkboxNodes = table.find('input');
    const columnNodes = table.find('.table-header').children();
    const rowNodes = table.find('.row');

    expect(checkboxNodes.length).toEqual(data.length + 1);
    expect(columnNodes.length).toEqual(column.length + 1);
    expect(rowNodes.length).toEqual(data.length);
    expect(checkboxInitialize.mock.calls.length).toEqual(data.length);

  });

  it('tests onclick checkbox row', () => {

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
    expect(checkboxOnChange.mock.calls[0][0]).toEqual(checked);
    expect(checkboxOnChange.mock.calls[0][1]).toEqual(data[key]);

  });

});
