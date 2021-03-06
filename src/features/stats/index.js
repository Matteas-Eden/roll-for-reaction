import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTimeout from 'react-timeout';

import { ANIMATION_SPEED } from '../../config/constants';
import calculateModifier from '../../utils/calculate-modifier';

import './styles.scss';

class Stats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statsBgColor: 'var(--dark-gray)',
        };

        this.stopAnimation = this.stopAnimation.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        // detemine when the stats have been updated and are not disabled
        if (
            JSON.stringify(prevProps.stats) !==
                JSON.stringify(this.props.stats) &&
            !this.props.disabled &&
            prevProps.stats.level !== this.props.stats.level
        ) {
            // animate the container
            this.setState({ statsBgColor: 'var(--gray)' });
            // pause the infinite animation after 1 iteration
            this.props.setTimeout(this.stopAnimation, ANIMATION_SPEED);
        }
    }

    stopAnimation() {
        this.setState({ statsBgColor: 'var(--dark-gray)' });
    }

    render() {
        const { disabled, stats, sideMenu, largeView } = this.props;
        const {
            abilities,
            character,
            level,
            exp,
            expToLevel,
            hp,
            maxHp,
            mana,
            maxMana,
            gold,
            defence,
        } = stats;
        const { statsBgColor } = this.state;

        let strBonus = calculateModifier(abilities.strength);
        let conBonus = calculateModifier(abilities.constitution);
        let dexBonus = calculateModifier(abilities.dexterity);
        let chrBonus = calculateModifier(abilities.charisma);
        let intBonus = calculateModifier(abilities.intelligence);
        let wisBonus = calculateModifier(abilities.wisdom);

        let height = disabled ? 96 : 150;
        if (sideMenu) height = disabled ? 130 : 140;

        let hpPercent = (hp / maxHp) * 100;
        if (hpPercent > 100) hpPercent = 100;

        let hpBorder;
        if (hpPercent >= 99) hpBorder = '5px';
        else if (hpPercent >= 97) hpBorder = '5px 3px 3px 5px';
        else hpBorder = '5px 0 0 5px';

        let manaPercent = (mana / maxMana) * 100;
        if (manaPercent > 100) manaPercent = 100;

        let manaBorder;
        if (manaPercent >= 99) manaBorder = '5px';
        else if (manaPercent >= 97) manaBorder = '5px 3px 3px 5px';
        else manaBorder = '5px 0 0 5px';

        let columnStyle = 'stats-column__spacing';
        if (!sideMenu && largeView) {
            columnStyle = 'stats-column__spacing--large';
        }

        let padding;
        if (sideMenu) padding = '10px 0 12px 10px';
        else if (largeView) padding = '12px 15px';
        else padding = '12px';

        let width;
        if (sideMenu) width = 380;
        else if (largeView) width = 380;
        else width = 324;

        return (
            <div
                style={{
                    alignItems: sideMenu ? 'flex-start' : 'center',
                    padding,
                    backgroundColor: statsBgColor,
                    height,
                    width,
                    lineHeight: sideMenu ? 1.5 : 'unset',
                }}
                className={`stats__container flex-row
          ${disabled ? '' : 'white-border'}`}
            >
                {!disabled && (
                    <>
                        <div
                            className="flex-column"
                            style={{ padding: '0', margin: '0', border: '0' }}
                        >
                            <div
                                className="flex-row"
                                style={{
                                    paddingBottom: sideMenu ? 0 : 5,
                                    borderBottom: 'solid',
                                }}
                            >
                                <span className="stats__text--info">
                                    {character.characterName.length <= 11
                                        ? character.characterName
                                        : character.characterName.substr(0, 9) +
                                          '...'}
                                </span>
                            </div>

                            <div
                                className="flex-row"
                                style={{
                                    paddingBottom: sideMenu ? 0 : 15,
                                    paddingTop: sideMenu ? 0 : 15,
                                }}
                            >
                                <span className="stats__text--spacing">
                                    {'DEFENCE: '}
                                </span>
                                <span className="stats__text--defence">
                                    {defence}
                                </span>
                            </div>

                            <div
                                className="flex-row"
                                style={{
                                    paddingBottom: sideMenu ? 10 : 15,
                                    paddingTop: sideMenu ? 10 : 0,
                                }}
                            >
                                <span className="stats-bar__container stats-hp-bar__container">
                                    <span className="stats-bar__text flex-row stats-health-bar__text">
                                        {hp + '/' + maxHp}
                                    </span>
                                    <span
                                        className="stats-bar__value stats-hp-bar__value"
                                        style={{
                                            width: `${hpPercent}%`,
                                            borderRadius: hpBorder,
                                        }}
                                    ></span>
                                </span>
                            </div>

                            <div
                                className="flex-row"
                                style={{ paddingTop: sideMenu ? 0 : 0 }}
                            >
                                <span className="stats__text--spacing">
                                    {'STR: '}
                                </span>
                                <span className="stats__text--melee">
                                    {strBonus > 0
                                        ? abilities.strength +
                                          ' (+' +
                                          strBonus +
                                          ')'
                                        : abilities.strength +
                                          ' (' +
                                          strBonus +
                                          ')'}
                                </span>
                            </div>

                            <div className="flex-row">
                                <span className="stats__text--spacing">
                                    {'CON: '}
                                </span>
                                <span className="stats__text--melee">
                                    {conBonus > 0
                                        ? abilities.constitution +
                                          ' (+' +
                                          conBonus +
                                          ')'
                                        : abilities.constitution +
                                          ' (' +
                                          conBonus +
                                          ')'}
                                </span>
                            </div>
                        </div>

                        <div className={`flex-column ${columnStyle}`}>
                            <div
                                className="flex-row"
                                style={{
                                    paddingBottom: sideMenu ? 0 : 5,
                                    borderBottom: 'solid',
                                }}
                            >
                                <span className="stats__text--info">
                                    {character.characterRace}
                                </span>
                            </div>

                            <div
                                className={`flex-row ${
                                    sideMenu ? '' : 'stats__row--spacing'
                                }`}
                                style={{
                                    paddingBottom: sideMenu ? 0 : 15,
                                    paddingTop: sideMenu ? 0 : 15,
                                }}
                            >
                                <span className="stats__text--spacing">
                                    {'GOLD: '}
                                </span>
                                <span className="stats__text--gold">
                                    {gold}
                                </span>
                            </div>

                            <div
                                className={`flex-row ${
                                    sideMenu ? '' : 'stats__row--spacing'
                                }`}
                            >
                                <div
                                    className="flex-row"
                                    style={
                                        ({ paddingBottom: sideMenu ? 10 : 0 },
                                        { paddingTop: sideMenu ? 10 : 0 })
                                    }
                                >
                                    <span className="stats-bar__container stats-mana-bar__container">
                                        <span className="stats-bar__text flex-row stats-mana-bar__text">
                                            {mana + '/' + maxMana}
                                        </span>
                                        <span
                                            className="stats-bar__value stats-mana-bar__value"
                                            style={{
                                                width: `${manaPercent}%`,
                                                borderRadius: manaBorder,
                                            }}
                                        ></span>
                                    </span>
                                </div>
                            </div>

                            <div
                                className="flex-row"
                                style={{ paddingTop: sideMenu ? 10 : 0 }}
                            >
                                <span className="stats__text--spacing">
                                    {'DEX: '}
                                </span>
                                <span className="stats__text--ranged">
                                    {dexBonus > 0
                                        ? abilities.dexterity +
                                          ' (+' +
                                          dexBonus +
                                          ')'
                                        : abilities.dexterity +
                                          ' (' +
                                          dexBonus +
                                          ')'}
                                </span>
                            </div>

                            <div className="flex-row">
                                <span className="stats__text--spacing">
                                    {'CHR: '}
                                </span>
                                <span className="stats__text--ranged">
                                    {chrBonus > 0
                                        ? abilities.charisma +
                                          ' (+' +
                                          chrBonus +
                                          ')'
                                        : abilities.charisma +
                                          ' (' +
                                          chrBonus +
                                          ')'}
                                </span>
                            </div>
                        </div>

                        <div className={`flex-column ${columnStyle}`}>
                            <div
                                className="flex-row"
                                style={{
                                    paddingBottom: sideMenu ? 0 : 5,
                                    borderBottom: 'solid',
                                }}
                            >
                                <span className="stats__text--info">
                                    {character.characterClass}
                                </span>
                            </div>

                            <div
                                className={`flex-row ${
                                    sideMenu ? '' : 'stats__row--spacing'
                                }`}
                                style={{
                                    paddingBottom: sideMenu ? 10 : 15,
                                    paddingTop: sideMenu ? 0 : 15,
                                }}
                            >
                                <span className="stats__text--spacing">
                                    {'LEVEL: '}
                                </span>
                                <span className="stats__text--level">
                                    {level}
                                </span>
                            </div>

                            <div
                                className={`flex-row ${
                                    sideMenu ? '' : 'stats__row--spacing'
                                }`}
                            >
                                <div
                                    className={`flex-row ${
                                        sideMenu ? '' : 'flex-1'
                                    }`}
                                    style={
                                        ({ paddingTop: sideMenu ? 0 : 36 },
                                        { paddingRight: sideMenu ? 30 : 0 })
                                    }
                                >
                                    <span className="stats-bar__container exp-bar__container">
                                        <span className="stats-bar__text flex-row stats-exp-bar__text">
                                            {exp + '/' + expToLevel}
                                        </span>
                                        <span
                                            className="stats-bar__value exp-bar__value"
                                            style={{
                                                width: `${(exp / expToLevel) *
                                                    100}%`,
                                            }}
                                        ></span>
                                    </span>
                                </div>
                            </div>

                            <div
                                className="flex-row"
                                style={{ paddingTop: sideMenu ? 9 : 0 }}
                            >
                                <span className="stats__text--spacing">
                                    {'INT: '}
                                </span>
                                <span className="stats__text--magic">
                                    {intBonus > 0
                                        ? abilities.intelligence +
                                          ' (+' +
                                          intBonus +
                                          ')'
                                        : abilities.intelligence +
                                          ' (' +
                                          intBonus +
                                          ')'}
                                </span>
                            </div>

                            <div className="flex-row">
                                <span className="stats__text--spacing">
                                    {'WIS: '}
                                </span>
                                <span className="stats__text--magic">
                                    {wisBonus > 0
                                        ? abilities.wisdom +
                                          ' (+' +
                                          wisBonus +
                                          ')'
                                        : abilities.wisdom +
                                          ' (' +
                                          wisBonus +
                                          ')'}
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ stats }) => ({ stats });

export default connect(mapStateToProps)(ReactTimeout(Stats));
