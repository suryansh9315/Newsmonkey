import React, { Component } from 'react'
import Spinner from './ajax-loader.gif'

export default class Loader extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={Spinner} alt="Spinner" />
            </div>
        )
    }
}
