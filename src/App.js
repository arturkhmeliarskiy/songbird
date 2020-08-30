import React from 'react';
import './App.css';
import Header from './components/Header';
import Question from './components/Question';
import Answers from './components/Answers';
import Description from './components/Description';
import Button from './components/Button';
import birdsData from './data/birdsData';
import voiseCorrect from './data/correctAnswer.mp3';
import voiseWrong from './data/uncorrectAnswer.mp3';
import voiseWin from './data/win.mp3';
import getRandomInteger from './utils/getRandomInteger';

class App extends React.Component {
    constructor(props){
        super(props);
        this.lastDataItem = birdsData.length-1;
        this.clickedItems = [];
        this.firstStateOfItems = Array(birdsData.length).fill('grey');
        this.state = {
            currentScore: 0,
            scoreIncrement: 5,
            level: '0',
            rightAnswer: String(getRandomInteger(0, this.lastDataItem)),
            chosenOption: null,
            isAnswerVisible: false,
            isActiveButton: false,
            stateOfItems: this.firstStateOfItems
        }
    }
   
    levelUp = () => {
        if ( this.state.isActiveButton ) {
            this.setState({
                level: String(+this.state.level + 1),
                rightAnswer: String(getRandomInteger(0, this.lastDataItem)),
            }, () => {
                this.clickedItems = [];
                this.setState({
                    chosenOption: null,
                    isActiveButton: false,
                    isAnswerVisible: false,
                    scoreIncrement: 5,
                    stateOfItems: this.firstStateOfItems
                })
            })
        }
    }  

    makeColored = (line, color) => {
        const  newStateOfItems = this.state.stateOfItems.map(el => el);
        newStateOfItems[line] = "red";
        (color === 'red') ?  newStateOfItems[line] = "red" : newStateOfItems[line] = "green";
        this.setState({
            stateOfItems: newStateOfItems
        })
    }

    checkCorrectAnswer = (line) => { 
        if ( this.state.chosenOption === this.state.rightAnswer) {
            this.playAudio(voiseCorrect);
            this.makeColored(line, 'green');
            this.setState({
                isActiveButton: true,
                isAnswerVisible: true,
                currentScore: this.state.currentScore + this.state.scoreIncrement,
            })
        } else {
            this.playAudio(voiseWrong);
            this.makeColored(line, 'red');
            this.setState({
                scoreIncrement: this.state.scoreIncrement - 1,
            })
        }
    }

    handleClick = ( line ) => {
        this.setState({ 
            chosenOption: line,
        });
        if (!this.clickedItems.includes(line)){
            this.clickedItems.push(line); 
            this.setState({ 
                chosenOption: line,
            }, () => {
                this.checkCorrectAnswer(line);
            })
        }
    }

    updateApp = ( ) => {
        this.setState({
            currentScore: 0,
            scoreIncrement: 5,
            level: '0',
            rightAnswer: String(getRandomInteger(0, this.lastDataItem)),
            chosenOption: null,
            isAnswerVisible: false,
            isActiveButton: false,
            stateOfItems: this.firstStateOfItems
        })
    }
  
    playAudio = (file) => {
        var audio = new Audio(file);
        audio.play();
    }

    render() {
        console.log( 'Правильный вариант:', +this.state.rightAnswer+1);
        if ( +this.state.level === birdsData.length) {
            return (
                <div className = 'app-container'>
                    <Header
                        level = { this.state.level }
                        currentScore = { this.state.currentScore }
                    />
                   <div>
                        <h1>Поздравляем!</h1>
                        <p>Ты прошел викторину и набрал {this.state.currentScore} из 30 возможных баллов</p>
                   </div>
                    <Button 
                        cb = {this.updateApp}
                        isActive = 'true'
                        message ='Может попробуещь еще раз?:)'
                    />
                </div>
            )
        } else if (+this.state.currentScore === 30) {
            return (
                <div className = 'app-container'>
                    <Header
                        level = { this.state.level }
                        currentScore = { this.state.currentScore }
                    />
                   <div>
                        <h1>Поздравляем!</h1>
                        <p>Ты прошел викторину и набрал максимальное количество баллав</p>
                        <h2>Отличный результат</h2>
                   </div>
                   { this.playAudio(voiseWin)}
                </div>
            )
        } else {
            return (
                <div className = 'app-container'>
                    <Header
                        level = { this.state.level }
                        currentScore = { this.state.currentScore }
                    />
                    <Question
                        level = { this.state.level }
                        visibility = { this.state.isAnswerVisible }
                        rightAnswer = { this.state.rightAnswer }
                    />
                    <Answers 
                        level = { this.state.level } 
                        cb = { this.handleClick }
                        currentState = {this.state.stateOfItems}
                    />
                    <Description 
                        level = { this.state.level } 
                        choise = { this.state.chosenOption }
                    />
                    <Button 
                        cb = { this.levelUp }
                        isActive = {this.state.isActiveButton}
                        message ='Перейти к следующему вопросу'
                    />
                </div>
            )
        }
    } 
}

export default App;