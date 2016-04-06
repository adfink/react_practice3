import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from "./quiz/QuestionList.jsx";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    test: 'What is your name?',
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
                    test: 'What is your favorite color?',
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
                    test: 'What is your age?',
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
                    test: 'Who is the best QB in the NFL?',
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
                            id: 'a',
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
    render(){
        return(
            <div>
                <QuestionList {...this.state} />
            </div>
        )
    }
}

export default App
