import React, { useState } from 'react';
import { connect } from 'react-redux';

import Dialog from '../../../../components/dialog';
import Button from '../../../../components/button';
import spells from '../../../../data/spells';
import { B_KEY } from '../../../../config/constants';
import toggleSpellbookDialog from '../../actions/toggle-spellbook-dialog';
import ViewItem from '../../../../components/view-item';

import './styles.scss';

const SpellbookDialog = ({ player, toggleSpellbookDialog }) => {
    const [viewSpell, setViewSpell] = useState(false);

    return (
        <Dialog keys={[B_KEY]} onKeyPress={toggleSpellbookDialog}>
            <ViewItem
                open={Boolean(viewSpell)}
                data={viewSpell}
                onClose={() => setViewSpell(false)}
            />

            <span className="spellbook-dialog__title">{'Spellbook'}</span>
            {spells.map(spell => (
                <div
                    key={spell.name}
                    className={`spellbook-spell ${
                        player.spell !== null &&
                        player.spell.name === spell.name
                            ? 'selected-spell'
                            : ''
                    }`}
                >
                    <Button
                        title={spell.name}
                        onClick={() => setViewSpell(spell)}
                        image={spell.image}
                    />
                </div>
            ))}
        </Dialog>
    );
};

const mapStateToProps = ({ player }) => ({ player });
const actions = { toggleSpellbookDialog };

export default connect(mapStateToProps, actions)(SpellbookDialog);
