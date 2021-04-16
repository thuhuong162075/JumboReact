import React from 'react'
import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SwatchesPicker,
  TwitterPicker,
} from 'react-color';
import CardBox from 'components/CardBox/index';
import Basic from './basic/index';
import BasicToggle from './basicToggle';
import BasicPositioning from './basicPositioning';
import CustomPicker from './customPicker';
import CustomPointer from './customPointer';
import WithRedux from './withRedux';
import IntlMessages from 'util/IntlMessages';

const ColorPicker = () => {
  return (
    <div className="row animated slideInUpTiny animation-duration-3">
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.alpha"/>}>
        <AlphaPicker/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.hue"/>}>
        <HuePicker/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.circle"/>}>
        <CirclePicker/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.compact"/>}>
        <CompactPicker/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.block"/>}>
        <BlockPicker/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.chrome"/>}>
        <ChromePicker/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.github"/>}>
        <GithubPicker/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.twitter"/>}>
        <TwitterPicker/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.withRedux"/>}>
        <WithRedux/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.sketch"/>}>
        <SketchPicker/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.material"/>}>
        <MaterialPicker/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.basic"/>}>
        <Basic/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.basicToggle"/>}>
        <BasicToggle/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.custom"/>}>
        <CustomPicker/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.customPointer"/>}>
        <CustomPointer/>
      </CardBox>
      <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.photoshop"/>}>
        <PhotoshopPicker/>
      </CardBox>
      <CardBox styleName="col-md-6" cardStyle='mb-md-0' childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.swatches"/>}>
        <SwatchesPicker/>
      </CardBox>
        <div className='col-md-6' style={{marginBottom: 195}}>
      <CardBox styleName="w-100" childrenStyle="d-flex justify-content-center"
               heading={<IntlMessages id="picker.color.alpha"/>}>
        <BasicPositioning/>
      </CardBox>
        </div>
    </div>
  )
};

export default ColorPicker;