/**
 * USkin index
 */

import { Breadcrumb } from '../js/components/breadcrumb';
import { Button } from '../js/components/button';
import { ButtonGroup } from '../js/components/button-group';
import { Dropdown } from '../js/components/dropdown';
import { Menu } from '../js/components/menu';
import { Modal } from '../js/components/modal';
import { Notification } from '../js/components/notification';
import { Pagination } from '../js/components/pagination';
import { Panel } from '../js/components/panel';
import { Slider } from '../js/components/slider';
import { Step } from '../js/components/step';
import { Switch } from '../js/components/switch';
import { Tab } from '../js/components/tab';
import { Table } from '../js/components/table';
import { Tip } from '../js/components/tip';
import { Tooltip } from '../js/components/tooltip';

var uskin = {
  Breadcrumb: Breadcrumb,
  Button: Button,
  ButtonGroup: ButtonGroup,
  Dropdown: Dropdown,
  Menu: Menu,
  Modal: Modal,
  Notification: Notification,
  Pagination: Pagination,
  Panel: Panel,
  Slider: Slider,
  Step: Step,
  Switch: Switch,
  Tab: Tab,
  Table: Table,
  Tip: Tip,
  Tooltip: Tooltip
};

uskin.version = require('../package.json').version;

module.exports = uskin;