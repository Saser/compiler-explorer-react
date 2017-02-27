import React, { PropTypes } from 'react';

import PresLangTree from './PresLangTree.js'
import TraceSpan from './TraceSpan.js'

const Tdec = ({ trace, dec }) => {
    return () => {
        const decTree = <PresLangTree tree={dec} />;
        return (
            <TraceSpan trace={trace}>Tdec ({decTree})</TraceSpan>
        );
    }
}

Tdec.propTypes = {
    trace: PropTypes.array.isRequired,
    dec: PropTypes.object.isRequired,
};

export default Tdec;
