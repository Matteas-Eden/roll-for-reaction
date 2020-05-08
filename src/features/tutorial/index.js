import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/button';
import toggleTutorial from '../dialog-manager/actions/toggle-tutorial';

import './styles.scss';

const Tutorial = ({ dialog, toggleTutorial }) => {
    return (
        <div className={'tutorial__container'}>
            <Button
                title=" "
                icon="question-circle"
                onClick={toggleTutorial}
                tiny
            ></Button>
        </div>
    );
};

const mapStateToProps = ({ dialog }) => ({ dialog });
const actions = { toggleTutorial };

export default connect(mapStateToProps, actions)(Tutorial);
