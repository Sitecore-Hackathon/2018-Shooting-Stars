import React from "react";
import PropTypes from "prop-types";
import { Timeline } from 'react-twitter-widgets'


const Twitters = ({fields}) => (
  <Timeline dataSource={{ sourceType: 'profile', screenName: fields.screenName.value }}
    options={{username: fields.username.value, height: '800'}}
    onLoad={() => console.log(fields.username)}
  />
);

Twitters.propTypes = {
  fields: PropTypes.shape({
    screenName: PropTypes.shape({
      value: PropTypes.string
    }),
    username: PropTypes.shape({
      value: PropTypes.string
    })
  })
};

export default Twitters;
