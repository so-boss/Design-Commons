import React from "react";
import PropTypes from 'prop-types';
import './Thing.pcss';

export default function Thing ({children, ...rest}) {
  return (
    <thing {...rest}>
      {children}
    </thing>
  );
}
Thing.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any
};

// export default class Thing extends Component {
//   render () {
//     const {
//       children,
//       ...rest
//     } = this.props;
//
//     /*
//         <Thing content='Policy Period 12/31...' />
//      */
//     return (
//       <thing {...rest}>
//         {children}
//       </thing>
//     );
//   }
// }
