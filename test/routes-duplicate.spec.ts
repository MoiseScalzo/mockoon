import { Tests } from './lib/tests';

const tests = new Tests('basic-data');

describe('Duplicate a route', () => {
  tests.runHooks();

  it('Verify three routes', async () => {
    await tests.helpers.countRoutes(3);
  });

  it('Duplicate first route ', async () => {
    const menuTarget = '.routes-menu .menu-list .nav-item:first-of-type';
    await tests.helpers.contextMenuClick(menuTarget, 1)
    await tests.helpers.countRoutes(4);
  });

  it('Verify duplicated environment in second slot', async () => {
    await tests.app.client.waitForExist('.routes-menu .menu-list .nav-item:nth-of-type(2) .text-warning');
  });
});
