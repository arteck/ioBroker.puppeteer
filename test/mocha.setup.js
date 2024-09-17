import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import { should, use } from 'chai';

// Makes ts-node ignore warnings, so mocha --watch does work
process.env.TS_NODE_IGNORE_WARNINGS = 'TRUE';
// Sets the correct tsconfig for testing
process.env.TS_NODE_PROJECT = 'tsconfig.json';
// Make ts-node respect the "include" key in tsconfig.json
process.env.TS_NODE_FILES = 'TRUE';

// Don't silently swallow unhandled rejections
process.on('unhandledRejection', e => {
    throw e;
});

should();
use(sinonChai);
use(chaiAsPromised);
