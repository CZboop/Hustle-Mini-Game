import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav'
import Board from './components/Board'
import BetButton from './components/BetButton';
import CashCounter from './components/CashCounter';
import CurrentBet from './components/CurrentBet';
import PlayButton from './components/PlayButton';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            cash: 500,
            currentBet: 0,
            betCard: null,
            betBool: false,
            cardValues: ['0x1F921', '0x1F921', '0x1F478'], 
            contents: ['?','?','?'],
            clickedCard: null,
            roundClicks: 0,
        }
    }
    componentDidMount(){
        const newValues = this.state.cardValues.slice()
        for (let i = newValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newValues[i], newValues[j]] = [newValues[j], newValues[i]];
        }
        this.setState({cardValues: newValues})
    }

    onBet = (event) => {
        this.setState({betBool: true})
        this.setState({currentBet: event.target.innerText.slice(5)})
        console.log(event)
    }

    reset = () => {
        const newValues = this.state.cardValues.slice()
        for (let i = newValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newValues[i], newValues[j]] = [newValues[j], newValues[i]];
        }
        this.setState({contents: ['?', '?', '?']})
        this.setState({cardValues: newValues})
        this.setState({roundClicks: 0})
    }

    onFlip = (event) => {
        if (this.state.currentBet!==0 && this.state.roundClicks===0){
            this.setState({roundClicks: 1})
            const id = event.target.id;
            const contents = this.state.cardValues[id]
            const newContents = this.state.contents.slice()
            newContents[id] = String.fromCodePoint(this.state.cardValues[id])
            this.setState({contents: newContents})
            if (contents!=='0x1F478'){
                console.log('clowned')
                let newCash = this.state.cash-this.state.currentBet;
                this.setState({cash: newCash});
                this.setState({currentBet: 0})

            } else {
                let newCash = parseInt(this.state.cash)+parseInt(this.state.currentBet);
                this.setState({cash: newCash});
                this.setState({currentBet: 0})
            }
        }
    }

    onGo = (event) => {
        console.log('im going already')
    }

    render(){
    return (
        this.state.cash>0?
        <div className="bigDiv">
            
            <Nav />
            <CashCounter cash={this.state.cash}/>
            <Board clickFunc={this.onFlip} contents={this.state.contents}/>
            <CurrentBet currentBet={this.state.currentBet}/>
            <div className="betbuttons">
            <BetButton amount='25' onClick={this.onBet}/>
            <BetButton amount='50' onClick={this.onBet}/>
            <BetButton amount='100' onClick={this.onBet}/>
            </div>
            <PlayButton onClick={this.reset}/>
        </div>
        :
        <div>
        <p className="bigClown">🤡You lose!🤡</p>
        <p className="bigClown">🤡You lose!🤡</p>
        <p className="bigClown">🤡You lose!🤡</p>
        </div>
    )
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
