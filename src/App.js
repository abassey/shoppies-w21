
import React, { Component } from 'react';
import Result from './Result';
import List from './List';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import toast from 'toasted-notes';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toasted-notes/src/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      movie: {
        "title": '',
        "year": null,
        "genre": '',
        "plot": ''
      },
      isNotMovie: false,
      nomList: []
    };
  }

  //resetting all state components when a new search occurs
  onChange = (event) => {
    this.setState({ term: event.target.value })
    this.setState({ isNotMovie: false })
    this.setState({
      movie: 
      {...this.state.movie,
      title: '',
      year: null,
      genre: '',
      plot: ''
      }});
  }
  
  //connecting to the database only returning result if m == movie
  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = 'de4c0dc';
    const url = ` https://www.omdbapi.com/?t=${this.state.term}&apikey=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data =>  {
        if (data.Type === "movie")
        {
          this.setState({
          movie: 
          {...this.state.movie,
          title: data && data.Title,
          year: data && data.Year,
          genre: data && data.Genre,
          plot: data && data.Plot
          }, 
        })
        } else {
            this.setState({isNotMovie: [this.state.isNotMovie, true]})
          }
    })
      .catch(e => console.log('error', e));
  }

  //handling the nominate function. adding the nominated move to the nomiation list
  onClick = (event) => {
    console.log("I clicked!");
    var newEntry = {
      text: this.state.movie.title,
      key: Date.now() //key used for delete function, instead of index
    };

    if(this.state.nomList.length !== 5 && this.state.nomList.some(item => item.text === this.state.movie.title) === false)
    {
      this.setState({
        nomList: [...this.state.nomList, newEntry] 
      })
    } else if(this.state.nomList.length === 5) {
      toast.notify("You can only have 5 Nominations!");
    } else if(this.state.nomList.some(item => item.text === this.state.movie.title) === true) {
      toast.notify("You've already nominated this movie!");
    }
  }

  //removing a nomination from nomination list. can only be up to five, which is 
  //checked when adding to the list
  deleteEntry = (key) => {  
    var filteredEntries = this.state.nomList.filter(function (item) {    
      return (item.key !== key);  
    }); 

    this.setState({    
      nomList:  filteredEntries //replace with mutated array, so as to complete remove selected entry
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Welcome To the Shoppies Nomination Portal!</h1>
        <p>(Brought to you by Anemme Bassey. Not bad for a first-time Reactor, I hope)</p>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter Movie Title" value={this.state.term} onChange={this.onChange} />
          <button>Find</button>
          <p>Please enter a movie to nominate for the Shoppies Award.</p>
        </form>
        <Result isNotMovie={this.state.isNotMovie}/>
        <Container>
          <Row>
            <Col>
                <h3 style={{textAlign: 'left'}}>Results</h3>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{this.state.movie.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{this.state.movie.year}</Card.Subtitle>
                      <Card.Text>
                      {this.state.movie.plot}<br/><br/>
                      {this.state.movie.genre}
                      </Card.Text>
                      <Button onClick={this.onClick}>Nominate</Button>
                    </Card.Body>
                  </Card>
                <br/>
            </Col>
            <Col>
                <h3 style={{textAlign: 'left'}}>Nominations</h3>
                <p style={{textAlign: 'left'}}>If you would like to remove a nomination, please click on it.</p>
                <Jumbotron fluid> 
                  <ul>
                  <List entries={this.state.nomList} delete={this.deleteEntry}/>
                  </ul>
                </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
