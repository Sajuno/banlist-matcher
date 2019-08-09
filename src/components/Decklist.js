import React, { Component } from 'react'
import {banlist} from '../lib/banlist'

export default class Decklist extends Component {
    state = {
        value: "",
        tierOneMatches: [],
        tierTwoMatches: [],
        tierThreeMatches: [],
        editedMatches: [],
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleClick = () => {
        const deckListArray = this.state.value.split('\n')

        this.setState({
            tierOneMatches: deckListArray.filter(entry => banlist.T1.includes(entry)),
            tierTwoMatches: deckListArray.filter(entry => banlist.T2.includes(entry)),
            tierThreeMatches: deckListArray.filter(entry => banlist.T3.includes(entry)),
            editedMatches: deckListArray.filter(entry => banlist.edited.includes(entry))
        })
    }

    render() {
        return (
            <div className="decklist">
                <textarea id="user-list" value={this.state.value} onChange={this.handleChange}></textarea>
                <button id="match-button" onClick={this.handleClick}>CHECK</button>
                <div className="results">
                    <div className="T1Matches">
                        <h3>Tier One</h3>
                        <ul>
                        {
                            this.state.tierOneMatches.map(el => <li>{el}</li>)
                        }
                        </ul>
                    </div>
                    <div className="T2Matches">
                        <h3>Tier Two</h3>
                        <ul>
                            {
                                this.state.tierTwoMatches.map(el => <li>{el}</li>)
                            }
                        </ul>
                    </div>
                    <div className="T3Matches">
                        <h3>Tier Three</h3>
                        <ul>
                            {
                                this.state.tierThreeMatches.map(el => <li>{el}</li>)
                            }
                        </ul>
                    </div>
                    <div className="edited">
                        <h3>Edited</h3>
                        <ul>
                            {
                                this.state.editedMatches.map(el => <li>{el}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
