/* eslint no-unused-expressions: 0 */
import test from 'ava';
import { spy } from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../../src/components/Counter';


function setup() {
  const actions = {
    increment: spy(),
    incrementIfOdd: spy(),
    incrementAsync: spy(),
    decrement: spy(),
  };
  const component = shallow(
    <Counter counter={1} {...actions} />
  );
  return {
    component,
    actions,
    buttons: component.find('button'),
    p: component.find('p'),
  };
}


test('should display count', t => {
  const { p } = setup();
  t.regex(p.text(), /^Clicked: 1 times/);
});

test('first button should call increment', t => {
  const { buttons, actions } = setup();
  buttons.at(0).simulate('click');
  t.true(actions.increment.called);
});

test('second button should call decrement', t => {
  const { buttons, actions } = setup();
  buttons.at(1).simulate('click');
  t.true(actions.decrement.called);
});

test('third button should call incrementIfOdd', t => {
  const { buttons, actions } = setup();
  buttons.at(2).simulate('click');
  t.true(actions.incrementIfOdd.called);
});

test('fourth button should call incrementAsync', t => {
  const { buttons, actions } = setup();
  buttons.at(3).simulate('click');
  t.true(actions.incrementAsync.called);
});
