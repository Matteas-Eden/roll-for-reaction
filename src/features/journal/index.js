import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

const Journal = ({ journal }) => {
    console.log('Hello');
    return (
        <div
            style={{
                alignItems: 'center',
                lineHeight: 'unset',
            }}
        >
            {journal.open && (
                <textarea
                    name="Journal"
                    className="journal-log white-border"
                    rows="5"
                    cols="33"
                    readOnly={true}
                    disabled={true}
                    value={journal.entries.join('\n')}
                />
            )}
        </div>
    );
};

const mapStateToProps = ({ journal }) => ({
    journal,
});

export default connect(mapStateToProps)(Journal);
