import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
export const Button = ({ backgroundColor, label, buttonClass, size, ...props }) => {
    return (
        <button
            type="button"
            className={['fancy-button', `fancy-button-${buttonClass}`, `fancy-button-${size}`].join(' ')}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    buttonClass: PropTypes.bool,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    buttonClass: null,
    size: 'mall',
    onClick: undefined,
};