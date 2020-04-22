import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

class Journal extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        const journal = document.getElementById('journal');
        if (journal !== null) {
            journal.scrollTop = journal.scrollHeight;
        }
    }

    render() {
        return (
            <div
                style={{
                    alignItems: 'center',
                    lineHeight: 'unset',
                    margin: 'auto',
                }}
                className="flex-row"
            >
                {this.props.journal.open && (
                    <textarea
                        id="journal"
                        name="Journal"
                        className="journal-log white-border"
                        rows="5"
                        cols="33"
                        readOnly={true}
                        disabled={true}
                        value={this.props.journal.entries.join('\n')}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ journal }) => ({
    journal,
});

export default connect(mapStateToProps)(Journal);
