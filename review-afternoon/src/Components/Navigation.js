import React, { Component } from 'react'
import data from '../data'

export default class Navigation extends Component {

    render() {
        return (
            <div className="buttons">
                <button className="previous" onClick={this.props.previousPage}>{'< Previous'}</button>
                <button className="next" onClick={this.props.nextPage}>{'Next >'}</button>
            </div>
        )
    }
}