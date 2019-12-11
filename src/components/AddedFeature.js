import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from '../actions/Actions';

const AddedFeature = props => {
	return (
		<li>
			<button className="button" onClick={() => props.removeFeature(props.feature)}>X {props.feature.name}</button>
		</li>
	);
};

export default connect(null, {removeFeature})(AddedFeature);
