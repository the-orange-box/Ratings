import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const wrapper = shallow(
    <App />
  );
  expect(wrapper).toMatchSnapshot();
});

it('calls componentDidMount', () => {
  jest.spyOn(App.prototype, 'componentDidMount')
  const wrapper = shallow(<App />)
  expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
})