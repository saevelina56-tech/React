import React, {Component} from "react";

const quotes = [
    { id: 1, text: "Жизнь — это то, что с тобой происходит, пока ты строишь планы."},
    { id: 2, text: "Будь тем изменением, которое хочешь видеть в мире."},
    { id: 3, text: "Не важно, как медленно ты идешь, главное — не останавливаться."}
]

class QuoteViewer extends Component {
    constructor(props) {
        super(props)
        console.log('Конструктор создан')
        this.state = {
            currentIndex: 0
        }
    }
    nextQuote = () => {
        this.setState(prevState => ({
            currentIndex: (prevState.currentIndex + 1) % quotes.length
        }))
    }
    componentDidMount() {
        console.log('componentDidMount смонтирован');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate обновлён');
        if (prevState.currentIndex !== this.state.currentIndex) {
            const currentQuote = quotes[this.state.currentIndex];
            console.log(`Цитата изменена: "${currentQuote.text}"`);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount размонтирован');
    }
    render () {
        const currentQuote = quotes[this.state.currentIndex];
        return (
            <div>
                <p>{currentQuote.text}</p>
                <button 
                    onClick={this.nextQuote}
                >
                    Следующая цитата
                </button>
            </div>
        )
    }
}

export default QuoteViewer;