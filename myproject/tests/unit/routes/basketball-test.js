import { module, test } from 'qunit';
import { setupTest } from 'myproject/tests/helpers';

module('Unit | Route | basketball', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:basketball');
    assert.ok(route);
  });
});
