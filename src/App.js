import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TopBar from './Components/TopBar'

import Button from '@material-ui/core/Button';
import Lyrics from './Components/Lyrics'
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Song from './Model/Song'

import './App.css';

class App extends Component {
  state={
    title:"",
    artist:"",
    lyrics:"Song not found",
    hidden: true
  }

   onClickSearch = (e) => {
     e.preventDefault();
     if(this.state.artist !== "" && this.state.title !== "" ){
      axios.get('https://api.lyrics.ovh/v1/'+ this.state.artist + '/'+ this.state.title)
      .then(res => {
        
          this.setState({ lyrics:res.data.lyrics });
        console.log(this.state.lyrics);
        
      })
      .catch(function (error) {
        // handle error
    
        console.log(error);
      })
      this.setState({hidden: !this.state.hidden});
     }    
  }

  
  render(){

    return (
      <div className="App">
        <TopBar/>

        <Grid container spacing={3}>

          <Grid item xs={6}>

            <Grid item xs={12}>

              <div className="grid-inputs">
                <form action="" onSubmit={this.onClickSearch}>
                  <div><TextField id="standard-basic" label="Title" onChange={e => this.setState({title: e.target.value})} value={this.state.title} required /></div>
                  <div><TextField id="standard-basic" label="Artist" onChange={e => this.setState({artist:e.target.value})} value={this.state.artist} required/></div>
                  <Box mt={5}>
                   <Button type="submit"  color="primary"  variant="contained">Search for Lyrics</Button>
                  </Box>
                  
                </form>
                
               
              </div>
              
              
            
            </Grid>
          
          </Grid>

          <Grid item xs={6}>

            <div className={this.state.hidden ? "grid-outputs hidden" : "grid-outputs"}>
            
                <Lyrics title={this.state.title} artist={this.state.artist} lyrics={this.state.lyrics}/>

            </div>

          </Grid>
  
        </Grid>

      </div>
    );
  }

  
  
}

export default App;
