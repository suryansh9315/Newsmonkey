import React, { Component } from 'react'
import Loader from './Loader';
import Newsitem from './Newsitem'

export default class News extends Component {
    page = 1;
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            load: false,
            Tpage: 0,
            url: `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d0a34fcb2dab414aa01f8d714953fdae&page=${this.page}&pageSize=${this.props.pageSize}`
        }
    }
    async componentDidMount() {
        this.setState({ load: true })
        let data1 = await fetch(this.state.url);
        let data2 = await data1.json();
        await this.setState({ articles: data2.articles, Tpage: data2.totalResults, load: false });
    }
    Previousfun = async () => {
        this.page--;
        await this.setState({
            url: `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d0a34fcb2dab414aa01f8d714953fdae&page=${this.page}&pageSize=${this.props.pageSize}`,
            load: true
        })
        this.componentDidMount();
    }
    Nextfun = async () => {
        this.page++;
        await this.setState({
            url: `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d0a34fcb2dab414aa01f8d714953fdae&page=${this.page}&pageSize=${this.props.pageSize}`,
            load: true
        })
        this.componentDidMount();
    }
    render() {
        return (
            <>
                <div className=" container mt-4 mb-4">
                    <div className="d-flex justify-content-between mt-3 mb-3">
                        <button disabled={this.page <= 1} type="button" className="btn btn-dark" onClick={this.Previousfun}> &larr; Previous</button>
                        <div>
                            {this.state.load && <Loader />}
                        </div>
                        <button disabled={this.page >= (this.state.Tpage / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.Nextfun}>Next &rarr;</button>
                    </div>

                    <h1 style={{ textAlign: "center" }}>Latest News - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h1>
                    <div className="row">
                        {!this.state.load && this.state.articles.map((e) => {
                            return e.url && e.title && e.description && e.urlToImage && e.author && e.publishedAt ?<div className="col d-flex justify-content-center" key={e.url}>
                                <Newsitem title={e.title} description={e.description} url={e.url} urlToImage={e.urlToImage} date={e.publishedAt} author={e.author} />
                            </div>:"";
                        })}
                    </div>
                    <div className="d-flex justify-content-between mt-3 mb-3">
                        <button disabled={this.page <= 1} type="button" className="btn btn-dark" onClick={this.Previousfun}> &larr; Previous</button>
                        <div>
                            {this.state.load && <Loader />}
                        </div>
                        <button disabled={this.page >= (this.state.Tpage / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.Nextfun}>Next &rarr;</button>
                    </div>

                </div>
            </>
        )
    }
}
