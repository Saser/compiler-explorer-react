import React, { PropTypes } from 'react';

const PresLangTree = ({ tree, onClickFactory }) => (
    <span>This will be PresLangTree</span>
)

PresLangTree.propTypes = {
    tree: PropTypes.shape({
        cons: PropTypes.string.isRequired,
        tra: PropTypes.object,
    }),
    onClickFactory: PropTypes.func.isRequired,
};

export default PresLangTree;
