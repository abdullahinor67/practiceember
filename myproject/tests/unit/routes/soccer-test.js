import { module, test } from 'qunit';
import { setupTest } from 'myproject/tests/helpers';

module('Unit | Route | soccer', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:soccer');
    assert.ok(route);
  });
});
