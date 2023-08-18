import React, {Component} from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
    static defaultProps = { 
        country : 'in',
        pageSize: 9,
        category: 'general'
       
    }
    static propTypes  = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,        
    }

    CapitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
   
   constructor(props){
    super(props);
    this.state = {
        articles: [],
        loading: true,
        page:1,
        totalResults:0,
    }
    document.title = `${this.CapitalizeFirstLetter(this.props.category)} -NewsAppy`;
   }

   async updateNews(){

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6dfa0608d92a40e3b944871e0f94c331&page=1&pageSize=${this.props.pageSize}`;
        let url =    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6dfa0608d92a40e3b944871e0f94c331&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading:false,
        })
   }

  async componentDidMount(){
    this.updateNews();
   }

  fetchMoreData = async() => {
      this.setState({page: this.state.page+1})
      let url =   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6dfa0608d92a40e3b944871e0f94c331&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json()
      this.setState({articles: this.state.articles.concat(parseData.articles), 
          totalResults:parseData.totalResults,
          loading:false
      })
  };




    render(){
        return(
            <>
                <h1 className='text-center mt-3 my-5'>NewsAppy - Top {this.CapitalizeFirstLetter(this.props.category)}  Headlines</h1>
         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          >

          <div className='container'>
          <div className='row'>
          {this.state.articles.map((element)=> {
            return <div className='col-md-4' key = {element.url} >
            <NewsItems  title ={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,100):""}  imageUrl = {element.urlToImage}  newsUrl = {element.url}  author = {element.author}  date={element.publishedAt}/>
            </div>
        })}                   
        </div>
        </div>
        </InfiniteScroll>
            </>
        )
    }
}

export default News;