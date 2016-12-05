import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Table from '../js/components/table/index';

describe('Test table component', () => {
  let column,
    data,
    checkboxOnChange,
    checkboxInitialize,
    table;
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

    table = TestUtils.renderIntoDocument(
      <Table column={column}
        data={data}
        dataKey="id"
        checkbox={true}
        checkboxInitialize={checkboxInitialize}
        checkboxOnChange={checkboxOnChange}
        striped={true}
        hover={true} />
    );
  });

  it('renders table component', () => {
    let headNum = TestUtils.scryRenderedDOMComponentsWithClass(table, 'table-header').length,
      rowsNum = TestUtils.scryRenderedDOMComponentsWithClass(table, 'row').length;

    expect(headNum).toEqual(1);
    expect(rowsNum).toEqual(data.length);
    expect(checkboxInitialize.mock.calls.length).toEqual(data.length);
  });

  it('clicks checkbox and return checked data', () => {
    let checkIndex = 0,
      clickNode = TestUtils.scryRenderedDOMComponentsWithTag(table, 'INPUT')[checkIndex + 1];

    TestUtils.Simulate.change(clickNode);

    expect(checkboxOnChange).toBeCalled();
    expect(checkboxOnChange.mock.calls[0][0]).toBe(false);
    expect(checkboxOnChange.mock.calls[0][1]).toEqual(data[checkIndex]);
  });

  it('sorts by desc id value', () => {
    let descById = TestUtils.scryRenderedDOMComponentsWithClass(table, 'arrow-down')[0];

    TestUtils.Simulate.click(descById);

    let idValue = TestUtils.scryRenderedDOMComponentsWithClass(table, 'row')[0].childNodes[1].innerHTML;

    expect(idValue).toEqual('6');
  });

});
