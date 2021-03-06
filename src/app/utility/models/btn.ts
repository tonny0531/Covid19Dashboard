import * as _ from 'lodash';

export enum YesNo {
  Yes = 'Yes',
  No = 'No'
}
export enum AllowOrNot {
  Allowed = 'Allowed',
  NotAllowed = 'Not Allowed'
}

export enum CommunicationStatus {
  Connected = 'Connected',
  Disconnected = 'Disconnected'
}

export function ConvertBoolToCommunicationStatus(isConn: boolean): CommunicationStatus {
  if (isConn) {
    return CommunicationStatus.Connected;
  }
  return CommunicationStatus.Disconnected;
}

export const CommunicationStatusColor: { [key: string]: string } = {
  Connected: 'bg-success',
  Disconnected: 'bg-danger',
};

export function GetDefCommunicationStatusCount(): { [key: string]: number } {
  return {
    Connected: 0,
    Disconnected: 0
  };
}

export const OptionVal: { [key: string]: any } = {
  Yes: true,
  No: false,
  Request: false,
  Allowed: true,
  Connected: true,
  Disconnected: false
};

export enum BtnType {
  Yes = 'Yes',
  No = 'No',
  Close = 'Close',
  Confirm = 'Confirm',
  Agree = 'Agree',
  Cancel = 'Cancel',
  Login = 'Login',
  Logout = 'Logout',
  Enable = 'Enable',
  Disable = 'Disable',
  Disagree = 'Disagree',
  Reject = 'Reject',
  Replace = 'Replace',
  Find = 'Find',
  Search = 'Search',
  Update = 'Update',
  Query = 'Query',
  Insert = 'Insert',
  Change = 'Change',
  Switch = 'Switch',
  Register = 'Register',
  Allow = 'Allow',
  NotAllow = 'NotAllow',
  Create = 'Create',
  Edit = 'Edit',
  Delete = 'Delete',
  View = 'View',
  Copy = 'Copy',
  Enter = 'Enter',
  Terminate = 'Terminate',
  Chat = 'Chat',
  Other = 'Other',
  Report = 'Report',
  Excel = 'Excel',
  Export = 'Export',
  File = 'File',
  Show = 'Show',
  Hide = 'Hide',
  Save = 'Save',
  Submit = 'Submit',
  Recover = 'Recover',
  Add = 'Add',
  List = 'List',
  Home = 'Home',
  Transfer = 'Transfer',
  Admin = 'Admin',
  News = 'News',
  UsersCog = 'UsersCog',
  Users = 'Users',
  UserCog = 'UserCog',
  UserTie = 'UserTie',
  UserCircle = 'UserCircle',
  Comments = 'Comments',
  Download = 'Download',
  Collection = 'Collection',
  Drafting = 'Drafting',
  Setting = 'Setting',
  Monitor = 'Monitor',
  Upload = 'Upload',
  LaptopCode = 'LaptopCode',
  Filter = 'Filter',
  History = 'History',
  Network = 'Network',
  Camera = 'Camera',
  Share = 'Share',
  Minus = 'Minus',
  Height = 'Height',
  Width = 'Width',
  AngleDown = 'AngleDown',
  AngleRight = 'AngleRight',
  EQP = 'EQP',
  SideNav = 'SideNav',
  Clipboard = 'Clipboard',
  Next = 'Next',
  Prev = 'Prev',
  Load = 'Load',
  Move = 'Move',
  Virus = 'Virus',
  Chart='Chart',
  Smile='Smile',
  Frown='Frown',
  Dizzy="Dizzy",
  Flag='Flag',
  Global='Global',
  Covid19='Covid19'
}

export enum Icon {
  Yes = 'check-circle',
  No = 'times-circle',
  Close = 'times-circle',
  Agree = 'check-circle',
  Cancel = 'times-circle',
  Login = 'sign-in-alt',
  Logout = 'sign-out-alt',
  Enable = 'check-circle',
  Disable = 'times-circle',
  Disagree = 'times-circle',
  Reject = 'times-circle',
  Change = 'exchange-alt',
  Replace = 'exchange-alt',
  Switch = 'exchange-alt',
  Find = 'search',
  Search = 'search',
  Update = 'edit',
  Query = 'search',
  Insert = 'plus',
  Register = 'user-plus',
  Allow = 'check-circle',
  NotAllow = 'times-circle',
  Create = 'plus',
  Edit = 'edit',
  Delete = 'trash',
  View = 'eye',
  Copy = 'copy',
  Enter = 'sign-in-alt',
  Terminate = 'pause',
  Chat = 'comments',
  Report = 'file-csv',
  Excel = 'file-csv',
  Export = 'file-csv',
  File = 'file-alt',
  Show = 'envelope-open',
  Hide = 'window-close',
  Save = 'save',
  Submit = 'paper-plane',
  Recover = 'history',
  Add = 'plus',
  List = 'list-alt',
  Home = 'home',
  Transfer = 'map-signs',
  Admin = 'user-secret',
  News = 'newspaper',
  UsersCog = 'users-cog',
  Users = 'users',
  UserCog = 'user-cog',
  UserTie = 'user-tie',
  UserCircle = 'user-circle',
  Comments = 'comments',
  Confirm = 'calendar-check',
  Download = 'cloud-download-alt',
  Collection = 'th-large',
  Drafting = 'drafting-compass',
  Setting = 'cog',
  TV = 'tv',
  Monitor = 'tv',
  LaptopCode = 'laptop-code',
  Upload = 'cloud-upload-alt',
  Filter = 'filter',
  History = 'history',
  Network = 'network-wired',
  Camera = 'camera',
  Share = 'share-alt',
  Minus = 'minus',
  Height = 'arrows-alt-v',
  Width = 'arrows-alt-h',
  AngleDown = 'angle-down',
  AngleRight = 'angle-right',
  EQP = 'laptop-code',
  SideNav = 'bars',
  Clipboard = 'clipboard',
  Next = 'arrow-alt-circle-right',
  Prev = 'arrow-alt-circle-left',
  Load = 'spinner',
  Move = 'arrow-alt-circle-right',
  Virus = 'virus',
  Chart='chart-line',
  Smile='smile',
  Frown='frown',
  Dizzy='dizzy',
  Flag='flag',
  Global='globe-americas',
  Covid19='lungs-virus'
}

export enum IconType {
  Fas = 'fas',
  Far = 'far',
  Fal = 'fal',
  Fad = 'fad',
}
