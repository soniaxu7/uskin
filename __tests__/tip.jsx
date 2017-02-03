import React from 'react';
import {mount} from 'enzyme';

import Tip from '../js/components/tip/index';

describe('test tip', () => {

  describe('test render', () => {

    const title = 'Title';
    const content = 'this is content';

    it('renders with title and content', () => {

      const tip = mount(<Tip title={title} content={content} />);

      expect(tip.text()).toBe(title + content);

    });

    it('renders with type', () => {

      let type = 'info';
      let clsPrefix = 'tip tip-';
      const tip = mount(<Tip content={content} type={type} />);
      const tipNode = tip.find('.tip');

      expect(tip.text()).toBe(content);
      expect(tipNode.props().className).toBe(clsPrefix + type);

    });

    it('renders with width', () => {

      let width = 160;
      const tip = mount(<Tip content={content} width={width} />);
      const tipNode = tip.find('.tip');

      expect(tipNode.props().style.width).toBe(width - 40);

    });

    it('renders with icon', () => {

      let width = 160;
      let icon = 'loading';
      const tip = mount(<Tip content={content} width={width} icon={icon} />);
      const iconNode = tip.find('.' + icon);
      const tipNode = tip.find('.tip');
      const contentNode = tip.find('.tip-content');

      expect(iconNode.length).toBe(1);
      expect(tipNode.props().style.width).toBe(width - 40);
      expect(contentNode.props().style.width).toBe(width - 70);

    });

    it('should hide close icon when !enableClose', () => {

      const tip = mount(<Tip enableClose={false} />);
      const close = tip.find('.icon-close');

      expect(close.hasClass('hide')).toBeTruthy();

    });

    it('renders success tip', () => {

      const tip = mount(<Tip showIcon={true} type="success" />);
      const success = tip.find('.icon-status-active');

      expect(success.length).toBe(1);

    });

    it('renders warning tip', () => {

      const tip = mount(<Tip showIcon={true} type="warning" />);
      const warning = tip.find('.icon-status-warning');

      expect(warning.length).toBe(1);

    });

    it('renders warning tip', () => {

      const tip = mount(<Tip showIcon={true} type="danger" />);
      const danger = tip.find('.icon-status-warning');

      expect(danger.length).toBe(1);

    });

    it('renders loading tip', () => {

      const tip = mount(<Tip showIcon={true} />);
      const loading = tip.find('.loading-tip');

      expect(loading.length).toBe(1);

    });

  });

  describe('test hide tip', () => {

    const content = 'this is content';
    const TICKS = 3001;

    beforeEach(() => {

      jasmine.clock().install();

    });

    afterEach(() => {

      jasmine.clock().uninstall();

    });

    it('tests isAutoHide', () => {

      const tip = mount(<Tip content={content} isAutoHide={true} />);
      const tipNode = tip.find('.tip');

      jasmine.clock().tick(TICKS);

      expect(tipNode.hasClass('hide')).toBeTruthy();

    });

    it('should stop autohide after unmount', () => {

      const tip = mount(<Tip content={content} isAutoHide={true} />);
      const tipNode = tip.find('.tip');

      tip.unmount();

      expect(tipNode.hasClass('hide')).toBeFalsy();

    });

    it('should unmount correctly', () => {

      const tip = mount(<Tip content={content} />);

      jasmine.clock().tick(TICKS);
      tip.unmount();

      expect(tip.children().length).toBe(0);

    });

    it('should close tip when close icon is clicked', () => {

      const tip = mount(<Tip content={content} enableClose={true} />);
      const tipNode = tip.find('.tip');
      const close = tip.find('.icon-close');

      close.simulate('click');

      expect(tipNode.hasClass('hide')).toBeTruthy();

    });

  });

});
