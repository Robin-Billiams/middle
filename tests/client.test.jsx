import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import BundleImages from '../client/src/components/BundleImages.jsx';
import BundleSelect from '../client/src/components/BundleSelect.jsx';
import Carousel from '../client/src/components/Carousel.jsx';
import HoverGallery from '../client/src/components/HoverGallery.jsx';
import PerksBanner from '../client/src/components/PerksBanner.jsx';
import ProgressBar from '../client/src/components/ProgressBar.jsx';
import TextSection from '../client/src/components/TextSection.jsx';

var testProduct = {
  productId: 1,
  prices: [1111.11, 2222.22, 3333.33, 4444.44],
  images: ['https://i.imgur.com/GzkL3jA.jpg','https://i.imgur.com/Z0BHUC1.jpg', 'https://i.imgur.com/onllnQA.jpg', 'https://i.imgur.com/C1CFsMJ.jpg', 'https://i.imgur.com/En5loGM.jpg', 'https://i.imgur.com/xb6HmNv.jpg', 'https://i.imgur.com/uWLcPsH.jpg', 'https://i.imgur.com/NXLvw3R.jpg', 'https://i.imgur.com/thmV90m.jpg', 'https://i.imgur.com/vz5zc25.jpg', 'https://i.imgur.com/cNpUgq9.jpg', 'https://i.imgur.com/BmV2FQo.jpg', 'https://i.imgur.com/tVtaQgx.jpg', 'https://i.imgur.com/eBH9pj5.jpg'],
  short_headers: ['a', 'aa aa', 'aaa aaa aaa', 'aaaa aaaa aaaa aaaa'],
  long_headers: ['aaa aaa aaa', 'aaaa aaaa aaaa aaaa', 'aaaaa aaaaa aaaaa aaaaa aaaaa', 'aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa aaaaaa', 'aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa', 'aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa', 'aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa', 'aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa', 'aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaa', 'aaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaa'],
  recc_prod_names: ['a', 'aa aa', 'aaa aaa aaa', 'aaaa aaaa aaaa aaaa'],
  captions: ['aaaaa aaaaa aaaaa aaaaa aaaaa. aaaaa aaaaa aaaaa aaaaa aaaaa', 'aaaaa aaaaa aaaaa aaaaa aaaaa. aaaaa aaaaa aaaaa aaaaa aaaaa', 'aaaaa aaaaa aaaaa aaaaa aaaaa. aaaaa aaaaa aaaaa aaaaa aaaaa', 'aaaaa aaaaa aaaaa aaaaa aaaaa. aaaaa aaaaa aaaaa aaaaa aaaaa', 'aaaaa aaaaa aaaaa aaaaa aaaaa. aaaaa aaaaa aaaaa aaaaa aaaaa', 'aaaaa aaaaa aaaaa aaaaa aaaaa. aaaaa aaaaa aaaaa aaaaa aaaaa', 'aaaaa aaaaa aaaaa aaaaa aaaaa. aaaaa aaaaa aaaaa aaaaa aaaaa', 'aaaaa aaaaa aaaaa aaaaa aaaaa. aaaaa aaaaa aaaaa aaaaa aaaaa', 'aaaaa aaaaa aaaaa aaaaa aaaaa. aaaaa aaaaa aaaaa aaaaa aaaaa', 'aaaaa aaaaa aaaaa aaaaa aaaaa. aaaaa aaaaa aaaaa aaaaa aaaaa', 'aaaaa aaaaa aaaaa aaaaa aaaaa. aaaaa aaaaa aaaaa aaaaa aaaaa', 'aaaaa aaaaa aaaaa aaaaa aaaaa. aaaaa aaaaa aaaaa aaaaa aaaaa', 'aaaaa aaaaa aaaaa aaaaa aaaaa. aaaaa aaaaa aaaaa aaaaa aaaaa']
};
var testDisplay = [true, true, true, true];
var testFunc = x => {};

describe('dummy test to make sure jest is working', () => {
  test('checks if true is true', () => {
    expect(true).toBe(true);
  });
});

describe('dummy test to make sure enzyme is working', () => {
  test('checks if shallowly rendered html is retrieved using .html()', () => {
    const myImage = shallow(<div>test</div>);
    expect(myImage.html()).toEqual('<div>test</div>');
  });
});

describe('it should render the correct components', () => {
  test('should render a component of type BundleImage', () => {
    const myImage = shallow(<BundleImages product={testProduct} productsForDisplay={testDisplay} />);
    const instance = myImage.instance();
    expect(instance).toBeInstanceOf(BundleImages);
  });

  it("should render a component of type BundleSelect", () => {
    shallow(<BundleSelect product={testProduct} productChecked={testFunc} />);
  });

  test('should render a component of type Carousel', () => {
    const myImage = shallow(<Carousel product={testProduct}/>);
    const instance = myImage.instance();
    expect(instance).toBeInstanceOf(Carousel);
  });

  it("should render a component of type HoverGallery", () => {
    shallow(<HoverGallery product={testProduct} />);
  });

  it("should render a component of type PerksBanner", () => {
    shallow(<PerksBanner product={testProduct} />);
  });

  it("should render a component of type ProgressBar", () => {
    shallow(<ProgressBar progress={0} />);
  });

  it("should render a component of type TextSection", () => {
    shallow(<TextSection product={testProduct} />);
  });
});

describe('It should test the carousel buttons', () => {
  it('tests foreward then backward buttons', () => {
    sinon.spy(Carousel.prototype, 'changeSlide');
    const button = shallow(<Carousel product={testProduct} />);
    button.find('.buttonNext').simulate('click');
    button.find('.buttonPrev').simulate('click');
    expect(Carousel.prototype.changeSlide).toHaveProperty('callCount', 2);
    button.find('.buttonPrev').simulate('click');
    button.find('.buttonNext').simulate('click');
    expect(Carousel.prototype.changeSlide).toHaveProperty('callCount', 4);
    Carousel.prototype.changeSlide.restore();
  });
});

describe('It should test the bundle select checkboxes', () => {
  it('tests the 1st checkbox', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<BundleSelect product={testProduct} productChecked={mockCallBack} />);
    var checkbox = () => button.find('#product1');
    checkbox().simulate('change', {target: {checked: false}});
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('tests the 2nd checkbox', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<BundleSelect product={testProduct} productChecked={mockCallBack} />);
    var checkbox = () => button.find('#product2');
    checkbox().simulate('change', {target: {checked: false}});
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('tests the 3rd checkbox', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<BundleSelect product={testProduct} productChecked={mockCallBack} />);
    var checkbox = () => button.find('#product3');
    checkbox().simulate('change', {target: {checked: false}});
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

describe('BundleImage component updates total price accordingly', () => {
  var testDisplay = [true, false, false, false];
  var testDisplay2 = [true, true, false, false];
  test('should call componentWillReceiveProps', () => {
    const myImage = shallow(<BundleImages product={testProduct} productsForDisplay={testDisplay} />);
    expect(myImage.find('#bundleprice').text().includes('$1111.11')).toBe(true);
    myImage.setProps({ productsForDisplay: testDisplay2 });
    expect(myImage.find('#bundleprice').text().includes('$3333.33')).toBe(true);
  });
});

describe('Carousel lifecycle methods', () => {
  it('calls componentDidMount and componentWillUnmount', () => {
    sinon.spy(Carousel.prototype, 'componentDidMount');
    sinon.spy(Carousel.prototype, 'componentWillUnmount');
    const wrapper = mount(<Carousel product={testProduct}/>);
    expect(Carousel.prototype.componentDidMount).toHaveProperty('callCount', 1);
    wrapper.unmount();
    expect(Carousel.prototype.componentWillUnmount).toHaveProperty('callCount', 1);
    Carousel.prototype.componentDidMount.restore();
    Carousel.prototype.componentWillUnmount.restore();
  });

  it('updates slide image after 7 seconds', () => {
    jest.useFakeTimers()
    sinon.spy(Carousel.prototype, 'changeSlide');
    const wrapper = mount(<Carousel product={testProduct}/>);
    expect(wrapper.find("img").prop("src")).toEqual(testProduct.images[4]);
    jest.advanceTimersByTime(8000);
    expect(Carousel.prototype.changeSlide).toHaveProperty('callCount', 1);
    wrapper.update();
    expect(wrapper.find("img").prop("src")).toEqual(testProduct.images[5]);
    wrapper.unmount();
  });

  it('updates slide progress bar after 10 ms', () => {
    jest.useFakeTimers()
    sinon.spy(Carousel.prototype, 'progressBarInterval');
    const wrapper = mount(<Carousel product={testProduct}/>);
    jest.advanceTimersByTime(11);
    expect(Carousel.prototype.progressBarInterval).toHaveProperty('callCount', 1);
    wrapper.unmount();
  });
});
