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
               <div className="main-content">
                   <h1>{user.name.first}{' '}{user.name.last}</h1>
                   
                    From: {user.city}{', '}{user.country}
                    Job Title: {user.title}
                    Employer: {user.employer}
                    <br />
                    Favorite Movies:
                        <ol>
                            <li>{user.favoriteMovies[0]}</li>
                            <li>{user.favoriteMovies[1]}</li>
                            <li>{user.favoriteMovies[2]}</li>
                        </ol>
                    
                  
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