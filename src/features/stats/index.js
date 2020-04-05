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
        const { abilities, level, exp, expToLevel, hp, maxHp, gold } = stats;
        const { statsBgColor } = this.state;

        let height = disabled ? 66 : 120;
        if (sideMenu) height = disabled ? 100 : 110;

        let hpPercent = (hp / maxHp) * 100;
        if (hpPercent > 100) hpPercent = 100;

        let hpBorder;
        if (hpPercent >= 99) hpBorder = '5px';
        else if (hpPercent >= 97) hpBorder = '5px 3px 3px 5px';
        else hpBorder = '5px 0 0 5px';

        let columnStyle = 'stats-column__spacing';
        if (!sideMenu && largeView) {
            columnStyle = 'stats-column__spacing--large';
        }

        let padding;
        if (sideMenu) padding = '12px 0 12px 32px';
        else if (largeView) padding = '12px 24px';
        else padding = '12px';

        let width;
        if (sideMenu) width = 330;
        else if (largeView) width = 360;
        else width = 324;

        // let STRbonus = Math.floor((abilities.strength - 10) / 2);
        // let CONbonus = Math.floor((abilities.constitution - 10) / 2);
        // let DEXbonus = Math.floor((abilities.dexterity - 10) / 2);
        // let CHRbonus = Math.floor((abilities.charisma - 10) / 2);
        // let INTbonus = Math.floor((abilities.intelligence - 10) / 2);
        // let WISbonus = Math.floor((abilities.wisdom - 10) / 2);

        let STRbonus = calculateModifier(abilities.strength);
        let CONbonus = calculateModifier(abilities.constitution);
        let DEXbonus = calculateModifier(abilities.dexterity);
        let CHRbonus = calculateModifier(abilities.charisma);
        let INTbonus = calculateModifier(abilities.intelligence);
        let WISbonus = calculateModifier(abilities.wisdom);

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
                            <div className="flex-row">
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
                                <span className="stats__text--spacing">
                                    {'GOLD: '}
                                </span>
                                <span className="stats__text--gold">
                                    {gold}
                                </span>
                            </div>

                            <div className="flex-row">
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
                            <div className="flex-row">
                                <span className="stats__text--spacing">{}</span>
                                <span className="stats__text--blank">
                                    {123123}
                                </span>
                            </div>

                            <div
                                className={`flex-row ${
                                    sideMenu ? '' : 'stats__row--spacing'
                                }`}
                            >
                                <div
                                    className="flex-row"
                                    style={{ paddingBottom: sideMenu ? 32 : 0 }}
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
                            </div>

                            <div
                                className="flex-row"
                                style={{ paddingTop: sideMenu ? 0 : 25 }}
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
                            <div className="flex-row">
                                <span className="stats__text--spacing">{}</span>
                                <span className="stats__text--blank">
                                    {123123}
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
                                    style={{ paddingBottom: sideMenu ? 32 : 0 }}
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
                                style={{ paddingTop: sideMenu ? 0 : 25 }}
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
