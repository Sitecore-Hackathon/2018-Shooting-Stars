import React from "react";
import PropTypes from "prop-types";
import { Timeline } from 'react-twitter-widgets'


const Twitters = props => (
  <div class={props.params.size}>
    <Timeline dataSource={{ sourceType: 'profile', screenName: props.fields.screenName.value }}
      options={{username: props.fields.username.value, height: '800'}}
      onLoad={() => console.log("Loaded")}
    />
  </div>
);

Twitters.propTypes = {
  fields: PropTypes.shape({
    screenName: PropTypes.shape({
      value: PropTypes.string
    }),
    username: PropTypes.shape({
      value: PropTypes.string
    })
  }),
  params: PropTypes.shape({
    size: PropTypes.oneOf(['small', 'medium', 'large'])
  })
};

export default Twitters;
