import React from 'react';
import PropTypes from 'prop-types';
import styles from './Launches.scss';

const Launches = props => (
	<div>This is a component called Launches.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Launches extends React.Component {
//   render() {
//     return <div>This is a component called Launches.</div>;
//   }
// }

const LaunchesPropTypes = {
	// always use prop types!
};

Launches.propTypes = LaunchesPropTypes;

export default Launches;
