/**
 * USkin index
 */

import Breadcrumb from '../js/components/breadcrumb';
import Button from '../js/components/button';
import ButtonGroup from '../js/components/button-group';
import Dropdown from '../js/components/dropdown';
import InputNumber from '../js/components/input-number';
import Menu from '../js/components/menu';
import Modal from '../js/components/modal';
import Notification from '../js/components/notification';
import Pagination from '../js/components/pagination';
import Panel from '../js/components/panel';
import Slider from '../js/components/slider';
import Step from '../js/components/step';
import Switch from '../js/components/switch';
import Tab from '../js/components/tab';
import Table from '../js/components/table';
import Tip from '../js/components/tip';
import Tooltip from '../js/components/tooltip';

var uskin = {
  Breadcrumb,
  Button,
  ButtonGroup,
  Dropdown,
  InputNumber,
  Menu,
  Modal,
  Notification,
  Pagination,
  Panel,
  Slider,
  Step,
  Switch,
  Tab,
  Table,
  Tip,
  Tooltip
};

uskin.version = require('../package.json').version;

module.exports = uskin;
