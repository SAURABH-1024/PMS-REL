import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'random',
  connector: 'mongodb',
  url: 'mongodb+srv://saurabh:atlas@pms.6ntze.mongodb.net/random?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RandomDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'random';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.random', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
