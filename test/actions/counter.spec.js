/* eslint no-unused-expressions: 0 */
import { spy } from 'sinon';
import test from 'ava';
import * as actions from '../../src/actions/counter';


test('increment should create increment action', t => {
  t.deepEqual(actions.increment(), { type: actions.INCREMENT_COUNTER });
});

test('decrement should create decrement action', t => {
  t.deepEqual(actions.decrement(), { type: actions.DECREMENT_COUNTER });
});

test('incrementIfOdd should create increment action', t => {
  const fn = actions.incrementIfOdd();
  t.is(typeof fn, 'function');
  const dispatch = spy();
  const getState = () => ({ counter: 1 });
  fn(dispatch, getState);
  t.true(dispatch.calledWith({ type: actions.INCREMENT_COUNTER }));
});

test('incrementIfOdd shouldnt create increment action if counter is even', t => {
  const fn = actions.incrementIfOdd();
  const dispatch = spy();
  const getState = () => ({ counter: 2 });
  fn(dispatch, getState);
  t.false(dispatch.called);
});

test('incrementAsync', async t => {
  const fn = actions.incrementAsync(1);
  t.is(typeof fn, 'function');
  const dispatch = spy();
  await fn(dispatch);
  t.true(dispatch.calledWith({ type: actions.INCREMENT_COUNTER }));
});
