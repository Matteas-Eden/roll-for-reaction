import React from 'react';
import { connect } from 'react-redux';

const Journal = ({ journal }) => {
    console.log('Hello');
    return (
        <>
            {journal.open && (
                <textarea
                    name="Journal"
                    rows="5"
                    cols="33"
                    readOnly={true}
                    disabled={true}
                    value={journal.entries.map(entry => entry + '\n')}
                ></textarea>
            )}
        </>
    );
};

const mapStateToProps = ({ journal }) => ({
    journal,
});

export default connect(mapStateToProps)(Journal);
