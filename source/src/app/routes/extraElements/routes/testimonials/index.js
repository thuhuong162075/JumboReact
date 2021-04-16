import React from 'react';
import CardBox from 'components/CardBox/index';
import ContainerHeader from 'components/ContainerHeader/index';
import Slider from "react-slick";
import Basic from './Basic'
import Classic from './Classic'
import Standard from './Standard'
import {basicTestimonialsData, testimonialsData} from './testimonialsData'
import IntlMessages from 'util/IntlMessages';


const Testimonials =(props)=> {

    const options = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const options1 = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      marginRight: 10,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false
          }
        }, {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };

    const options2 = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };

    return (
      <div className="animated slideInUpTiny animation-duration-3">
        <ContainerHeader match={props.match}
                         title={<IntlMessages id="extraElements.testimonials"/>}
                         description="In promotion and of advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. "
        />

        <div className="row">
          <CardBox styleName="col-lg-12" heading={<IntlMessages id="testimonials.basic"/>}>
            <Slider  {...options}>
              <Basic testimonial={basicTestimonialsData[0]}/>
              <Basic testimonial={basicTestimonialsData[1]}/>
              <Basic testimonial={basicTestimonialsData[2]}/>
              <Basic testimonial={basicTestimonialsData[3]}/>
              <Basic testimonial={basicTestimonialsData[4]}/>
              <Basic testimonial={basicTestimonialsData[5]}/>
              <Basic testimonial={basicTestimonialsData[6]}/>
            </Slider>
          </CardBox>
          <CardBox styleName="col-lg-12" heading={<IntlMessages id="testimonials.classic"/>}>
            <Slider {...options1}>
              <Classic testimonial={testimonialsData[0]}/>
              <Classic testimonial={testimonialsData[1]}/>
              <Classic testimonial={testimonialsData[2]}/>
              <Classic testimonial={testimonialsData[3]}/>
              <Classic testimonial={testimonialsData[4]}/>
              <Classic testimonial={testimonialsData[5]}/>
              <Classic testimonial={testimonialsData[6]}/>
            </Slider>
          </CardBox>
          <CardBox styleName="col-lg-12" cardStyle='mb-0' heading={<IntlMessages id="testimonials.standard"/>}>
            <Slider {...options2}>
              <Standard testimonial={testimonialsData[0]}/>
              <Standard testimonial={testimonialsData[1]}/>
              <Standard testimonial={testimonialsData[2]}/>
              <Standard testimonial={testimonialsData[3]}/>
              <Standard testimonial={testimonialsData[4]}/>
              <Standard testimonial={testimonialsData[5]}/>
              <Standard testimonial={testimonialsData[6]}/>
            </Slider>
          </CardBox>
        </div>
      </div>
    )
  };

export default Testimonials;
