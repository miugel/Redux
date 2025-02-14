import React from 'react';
import {connect} from 'react-redux';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
	return (
		<div className="content">
			<h4>Additional Features</h4>
			{props.additionalFeatures.length ? (
				<ol type="1">
					{props.additionalFeatures.map((item, index) => (
						<AdditionalFeature key={index} feature={item} index={index}/>
					))}
				</ol>
			) : (
				<p>Fully loaded!</p>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		additionalFeatures: state.additionalFeatures
	}
};

export default connect(mapStateToProps)(AdditionalFeatures);