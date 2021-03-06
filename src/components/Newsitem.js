import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        return (
            <div className="my-3">
                <div className="card d-flex justify-content-center" style={{ "width": "19rem" }}>
                    <img src={this.props.urlToImage} className="card-img-top" alt="..." height="200px" width="200px" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title.slice(0, 40)}...</h5>
                        <p className="card-text">{this.props.description ? this.props.description.slice(0, 100) : ""}...</p>
                        <p style={{textAlign:"right"}}>- By {this.props.author}</p>
                        <p style={{textAlign:"right"}}>{new Date(this.props.date).toLocaleString()}</p>
                        <a href={this.props.url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
