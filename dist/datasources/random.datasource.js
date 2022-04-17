"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
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
let RandomDataSource = class RandomDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
RandomDataSource.dataSourceName = 'random';
RandomDataSource.defaultConfig = config;
RandomDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.random', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], RandomDataSource);
exports.RandomDataSource = RandomDataSource;
//# sourceMappingURL=random.datasource.js.map