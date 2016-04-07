import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Results extends Component{

    render(){
        var percent = (this.props.score / this.props.questions.length * 100);
        if(percent>80){
              var message = "Well done, you've passed!";
        } else if(percent < 80 && percent > 60){
              var message = "Hmmm you didn't do so well... maybe try it again";
        } else {
              var message = "Wow that was bad. You should just give up now.";
        }

        return(
              <div className="well">
                  <h4>your score is {this.props.score} out of {this.props.questions.length} </h4>
                  <h1>{percent}% - {message}</h1>
                  <hr />
                  <a href="/app">Take Again</a>
              </div>
              )
    }

}

export default Results
