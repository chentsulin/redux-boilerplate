import test from 'ava';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import CounterPage from '../../src/containers/CounterPage';
import configureStore from '../../src/store/configureStore';


function setup(initialState) {
  const store = configureStore(initialState);
  const app = mount(
    <Provider store={store}>
      <CounterPage />
    </Provider>
  );
  return {
    app,
    buttons: app.find('button'),
    p: app.find('p'),
  };
}


test('should display initial count', t => {
  const { p } = setup();
  t.regex(p.text(), /^Clicked: 0 times/);
});

test('should display updated count after increment button click', t => {
  const { buttons, p } = setup();
  buttons.at(0).simulate('click');
  t.regex(p.text(), /^Clicked: 1 times/);
});

test('should display updated count after descrement button click', t => {
  const { buttons, p } = setup();
  buttons.at(1).simulate('click');
  t.regex(p.text(), /^Clicked: -1 times/);
});

test('shouldnt change if even and if odd button clicked', t => {
  const { buttons, p } = setup();
  buttons.at(2).simulate('click');
  t.regex(p.text(), /^Clicked: 0 times/);
});

test('should change if odd and if odd button clicked', t => {
  const { buttons, p } = setup({ counter: 1 });
  buttons.at(2).simulate('click');
  t.regex(p.text(), /^Clicked: 2 times/);
});
