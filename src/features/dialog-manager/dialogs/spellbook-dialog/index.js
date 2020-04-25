import React from 'react';
import { connect } from 'react-redux';

import Dialog from '../../../../components/dialog';
import Button from '../../../../components/button';
import spells from '../../../../data/spells';
import setActiveSpell from '../../actions/set-active-spell';
import { B_KEY } from '../../../../config/constants';
import toggleSpellbookDialog from '../../actions/toggle-spellbook-dialog';

const SpellbookDialog = ({ player, setActiveSpell, toggleSpellbookDialog }) => {
    return (
        <Dialog keys={[B_KEY]} onKeyPress={toggleSpellbookDialog}>
            {spells.map(spell => (
                <Button
                    title={spell.name}
                    key={spell.name}
                    onClick={() => setActiveSpell(spell)}
                />
            ))}
        </Dialog>
    );
};

const mapStateToProps = ({ player }) => ({ player });
const actions = { setActiveSpell, toggleSpellbookDialog };

export default connect(mapStateToProps, actions)(SpellbookDialog);
