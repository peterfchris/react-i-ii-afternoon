import React, { Component } from 'react'
import Navigation from './Navigation';
import data from '../data'

export default class Layout extends Component {
    constructor() {
        super()

        this.state = {

        }
    }



    render() {
       const user = this.props.user.map((user) => {
           return (
               <div>
                   <div className="count">
                       <h2>{user.id}/25</h2>
                   </div>
                    <div className="main-content">
                        <h1 className="user-name">{user.name.first}{' '}{user.name.last}</h1>
                            <p><strong>From:</strong> {user.city}{', '}{user.country}</p>
                            <p><strong>Job Title:</strong> {user.title}</p>
                            <p><strong>Employer:</strong> {user.employer}</p>
                            <br />
                            <p><strong>Favorite Movies:</strong></p>
                                <ol>
                                    <li>{user.favoriteMovies[0]}</li>
                                    <li>{user.favoriteMovies[1]}</li>
                                    <li>{user.favoriteMovies[2]}</li>
                                </ol>
                    </div>
               </div>
           )
       })
        return (
            <div>
                <header className="header">
                    <h3>Home</h3>
                </header>
                <div className="white-container">
                    {user}
                </div>
            </div>
        )
    }
}