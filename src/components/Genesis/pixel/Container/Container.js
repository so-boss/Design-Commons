import Wrapper from "../Wrapper/Wrapper";
import Title from "../elements/Title/Title";

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//import './Container.scss';

const isObject = function (value) {
  return typeof value === 'object' && typeof value !== 'function' && value !== undefined;
};
const isNamedSlots = function (children) {
  return isObject(children) && 'body' in children;
};

export default function Container({ children, tag, slots, getContainer, expanded, ...rest}){
  if (!children) {
    throw new Error('children are missing !');
  }

  if (isNamedSlots(children)) {
    const {
      header,
      body,
    } = children;

    let {
      footer,
    } = children;

    // IF no footer child is described
    if (!footer) {
      if (slots.footer.include !== false) {
        footer = <Wrapper type="footer" />;
      } else {
        footer = null;
      }
    } else {
      // OTHERWISE a footer is descibed and should be rendered
      footer = <Wrapper type="footer">{footer}</Wrapper>;
    }

    const ContainerElement = `${tag}`;

    return (
      <ContainerElement
        //getContainer={getCont(containerRef)} // && this.getContainer
        //ref={containerRef}
        {...rest}
      >
        <Wrapper>
          {header
            ? (
              <Wrapper type="header">
                {
                  React.isValidElement(header)
                    ? header
                    : <Title>{header}</Title>
                }
              </Wrapper>
            )
            : null
          }
          <Wrapper type="body">{body}</Wrapper>
          {footer}
        </Wrapper>
      </ContainerElement>
    );
  }

  return null;
}

Container.defaultProps = {
  slots: {
    header: {
      include: false,
    },
    body: {
      include: true,
    },
    footer: {
      include: false,
    },
  },
  tag: "div"
};

// Container.propTypes = {
//   children: PropTypes.object,
//   tag: PropTypes.string,
//   slots: PropTypes.object,
//   // drawer: PropTypes.any,
//   getContainer: PropTypes.element
// };
