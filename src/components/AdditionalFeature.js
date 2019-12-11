import React from 'react';
import {connect} from 'react-redux';
import {buyItem} from '../actions/Actions';

const AdditionalFeature = props => {
    return (
        <li>
            <button className="button" onClick={() => props.buyItem(props.feature)}>Add</button>
            <p>{props.feature.name}: {props.feature.price}</p>
        </li>
    );
};

export default connect(null, {buyItem})(AdditionalFeature);