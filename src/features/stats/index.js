import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTimeout from 'react-timeout';

import { ANIMATION_SPEED } from '../../config/constants';
import calculateModifier from '../../utils/calculate-modifier';
import calculateMaxManapool from '../../utils/calculate-manapool-intelligence';

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
            !this.props.disabled
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
            level,
            exp,
            expToLevel,
            hp,
            maxHp,
            mana,
            maxMana,
            gold,
            start,
        } = stats;
        const { statsBgColor } = this.state;

        let STRbonus = calculateModifier(abilities.strength);
        let CONbonus = calculateModifier(abilities.constitution);
        let DEXbonus = calculateModifier(abilities.dexterity);
        let CHRbonus = calculateModifier(abilities.charisma);
        let INTbonus = calculateModifier(abilities.intelligence);
        let WISbonus = calculateModifier(abilities.wisdom);

        stats.maxMana = calculateMaxManapool(INTbonus);
        if (abilities.intelligence >= 10 && stats.start) {
            stats.mana = stats.maxMana;
            stats.start = false;
        }

        let height = disabled ? 66 : 120;
        if (sideMenu) height = disabled ? 100 : 110;

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
        if (sideMenu) padding = '12px 0 12px 32px';
        else if (largeView) padding = '12px 24px';
        else padding = '12px';

        let width;
        if (sideMenu) width = 340;
        else if (largeView) width = 360;
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
                className={`stats__container
          ${disabled ? '' : 'white-border'}
          ${sideMenu ? 'flex-row' : 'flex-row'}`}
            >
                {!disabled && (
                    <>
                        <div className="flex-column">
                            <div
                                className="flex-row"
                                style={{ paddingBottom: sideMenu ? 0 : 15 }}
                            >
                                <span className="stats__text--spacing">
                                    {'LEVEL: '}
                                </span>
                                <span className="stats__text--level">
                                    {level}
                                </span>
                            </div>

                            <div
                                className="flex-row"
                                style={{
                                    paddingBottom: sideMenu ? 10 : 15,
                                    paddingTop: sideMenu ? 10 : 0,
                                }}
                            >
                                <span className="stats-hp-bar__container">
                                    <span className="flex-row stats-health-bar__text">
                                        {hp + '/' + maxHp}
                                    </span>
                                    <span
                                        className="stats-hp-bar__value"
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
                                    {STRbonus > 0
                                        ? abilities.strength +
                                          ' (+' +
                                          STRbonus +
                                          ')'
                                        : abilities.strength +
                                          ' (' +
                                          STRbonus +
                                          ')'}
                                </span>
                            </div>

                            <div className="flex-row">
                                <span className="stats__text--spacing">
                                    {'CON: '}
                                </span>
                                <span className="stats__text--melee">
                                    {CONbonus > 0
                                        ? abilities.constitution +
                                          ' (+' +
                                          CONbonus +
                                          ')'
                                        : abilities.constitution +
                                          ' (' +
                                          CONbonus +
                                          ')'}
                                </span>
                            </div>
                        </div>

                        <div className={`flex-column ${columnStyle}`}>
                            <div
                                className={`flex-row ${
                                    sideMenu ? '' : 'stats__row--spacing'
                                }`}
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
                                    <span className="stats-mana-bar__container">
                                        <span className="flex-row stats-mana-bar__text">
                                            {mana + '/' + maxMana}
                                        </span>
                                        <span
                                            className="stats-mana-bar__value"
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
                                    {DEXbonus > 0
                                        ? abilities.dexterity +
                                          ' (+' +
                                          DEXbonus +
                                          ')'
                                        : abilities.dexterity +
                                          ' (' +
                                          DEXbonus +
                                          ')'}
                                </span>
                            </div>

                            <div className="flex-row">
                                <span className="stats__text--spacing">
                                    {'CHR: '}
                                </span>
                                <span className="stats__text--ranged">
                                    {CHRbonus > 0
                                        ? abilities.charisma +
                                          ' (+' +
                                          CHRbonus +
                                          ')'
                                        : abilities.charisma +
                                          ' (' +
                                          CHRbonus +
                                          ')'}
                                </span>
                            </div>
                        </div>

                        <div className={`flex-column ${columnStyle}`}>
                            <div
                                className="flex-row"
                                style={{ paddingTop: sideMenu ? 7 : 37 }}
                            >
                                <span className="stats__text--spacing">{}</span>
                                <span
                                    className="stats__text--blank"
                                    style={{
                                        display: sideMenu ? 'inline' : 'none',
                                    }}
                                >
                                    {1}
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
                                    <span className="exp-bar__container">
                                        <span className="flex-row stats-exp-bar__text">
                                            {exp + '/' + expToLevel}
                                        </span>
                                        <span
                                            className="exp-bar__value"
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
                                    {INTbonus > 0
                                        ? abilities.intelligence +
                                          ' (+' +
                                          INTbonus +
                                          ')'
                                        : abilities.intelligence +
                                          ' (' +
                                          INTbonus +
                                          ')'}
                                </span>
                            </div>

                            <div className="flex-row">
                                <span className="stats__text--spacing">
                                    {'WIS: '}
                                </span>
                                <span className="stats__text--magic">
                                    {WISbonus > 0
                                        ? abilities.wisdom +
                                          ' (+' +
                                          WISbonus +
                                          ')'
                                        : abilities.wisdom +
                                          ' (' +
                                          WISbonus +
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
