
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { icons } from '../../assets/icons/index';

import useWindowDimensions from '../../utils/useWindowDimensions';

export const Loader = () => {
    const { height, width } = useWindowDimensions();

   
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, height: height, width: width }}>
            <img src={icons.loading} />
        </div>
    )
}
