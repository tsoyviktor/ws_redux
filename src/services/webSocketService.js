const URL = 'wss://js-assignment.evolutiongaming.com/ws_api';

export class Fields {
  static TYPE = '$type';
  static USER_NAME = 'username';
  static PASSWORD = 'password';
  static TABLES = 'tables';
}

export class Types {
  static SUBSCRIBE_TABLES = 'subscribe_tables';
  static TABLE_LIST = 'table_list';
  static UNSUBSCRIBE_TABLES = 'unsubscribe_tables';
  static ADD_TABLE = 'add_table';
  static NOT_AUTHORIZED = 'not_authorized';
  static UPDATE_TABLE = 'update_table';
  static REMOVE_TABLE = 'remove_table';


  static REMOVAL_FAILED = 'removal_failed';
  static UPDATE_FAILED = 'update_failed';

  // Expected Types from tables
  static TABLE_ADDED = 'table_added';
  static TABLE_REMOVED = 'table_removed';
  static TABE_UPDATED = 'table_updated';

}

class SocketService {

  socket = null;

  constructor() {
    this.socket = new WebSocket(URL);

    this.socket.onopen = () => {
      this.socket.send(JSON.stringify({
        [Fields.TYPE]: "login",
        [Fields.USER_NAME]: "user1234",
        [Fields.PASSWORD]: "password1234",
      }));
    };
  }

  subscribeTables() {
    this.send({
      [Fields.TYPE]: Types.SUBSCRIBE_TABLES,
    })
  }

  send(data) {
    if (this.socket.readyState === this.socket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      let interval = setInterval(() => {
        if (this.socket.readyState === this.socket.OPEN) {
          this.socket.send(JSON.stringify(data));
          clearInterval(interval);
        }
      }, 1);
    }
  }

  onError(cb) {
    this.socket.onerror = cb;
  }

  onMessage(cb) {
    this.socket.onmessage = cb;
  }
}

export default new SocketService();
