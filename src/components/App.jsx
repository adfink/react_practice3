import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from "./quiz/QuestionList.jsx";
import Scorebox from "./quiz/Scorebox.jsx";
import Results from "./quiz/Results.jsx";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Joe'
                        },
                        {
                            id: 'b',
                            text: 'Drew'
                        },
                        {
                            id: 'c',
                            text: 'Sally'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 2,
                    text: 'What is your favorite color?',
                    choices: [
                        {
                            id: 'a',
                            text: 'blue'
                        },
                        {
                            id: 'b',
                            text: 'yellow'
                        },
                        {
                            id: 'c',
                            text: 'green'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id: 3,
                    text: 'What is your age?',
                    choices: [
                        {
                            id: 'a',
                            text: '14'
                        },
                        {
                            id: 'b',
                            text: '25'
                        },
                        {
                            id: 'c',
                            text: '42'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 4,
                    text: 'Who is the best QB in the NFL?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Aaron Rodgers'
                        },
                        {
                            id: 'b',
                            text: 'Jay Cutler'
                        },
                        {
                            id: 'c',
                            text: 'Tom Brady'
                        }
                    ],
                    correct: 'a'
                }
            ],
            score: 0,
            current: 1
        }
    }

    setCurrent(current){
        this.setState({current});
    }

    setScore(score){
        this.setState({score});
    }

    render(){
        if(this.state.current > this.state.questions.length){
            var scorebox = '';
            var results = <Results {...this.state} />
        } else {
            var scorebox = <Scorebox {...this.state} />
            var results = '';
        }

        return(
            <div>
                {scorebox}
                <QuestionList {...this.state} setCurrent = {this.setCurrent.bind(this)} setScore = {this.setScore.bind(this)} />
                {results}
            </div>
        )
    }
}

export default App
