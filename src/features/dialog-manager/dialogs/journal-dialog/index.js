import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from '../../../../components/dialog';
import toggleJournal from '../../actions/toggle-journal';
import { J_KEY } from '../../../../config/constants';

import './styles.scss';

class JournalDialog extends Component {
    componentDidMount(_prevProps, _prevState) {
        const journal = document.getElementById('journal');
        if (journal !== null) {
            journal.scrollTop = journal.scrollHeight;
        }
    }

    render() {
        return (
            <Dialog
                keys={[J_KEY]}
                onKeyPress={() => this.props.toggleJournal()}
            >
                <div
                    className="flex-column journal-dialog__container"
                    id="journal"
                >
                    {this.props.entries.map(entry => (
                        <div key={entry.key} className="journal-entry flex-row">
                            {entry.entry}
                        </div>
                    ))}
                </div>
            </Dialog>
        );
    }
}

const mapStateToProps = ({ journal }) => ({
    journal,
});

const actions = {
    toggleJournal,
};

export default connect(mapStateToProps, actions)(JournalDialog);
