import React, {Component} from 'react';
import Book from './Book'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {books: props.books};
        this.renderBooks = this.renderBooks.bind(this)
        // this.disableSiblings = this.disableSiblings.bind(this)
        this.incrementBookCount = this.incrementBookCount.bind(this)
        this.decrementBookCount = this.decrementBookCount.bind(this)
        this.changeStock = this.changeStock.bind(this);
        this.updateStock = this.updateStock.bind(this);
        this.checkKey = this.checkKey.bind(this);
    }

    renderBooks() {
        // return this.state.books.map((book, index) => this.renderBook(book, index))
        return this.state.books.map((book, index) => <Book
            book={book}
            limit="true"
            label={true}
            index={index}
            key={index}
            isDisabled=""
            decrementBookCount={() => this.decrementBookCount(index)}
            incrementBookCount={() => this.incrementBookCount(index)}
            changeStock={() => this.changeStock(index)}
            updateStock={(event) => this.updateStock(index, event)}
            checkKey={(event) => this.checkKey(index, event)}
        />)
        ;
    }

    disableSiblings() {
        console.log('I ran')
        for(let i = 0; i < this.state.books.length; i++) {
            let book = this.state.books[i];
            if (book.label === false) {
                this.state.books.forEach((book2, index2) => {
                    if (i !== index2) {
                        book2.props.isDisabled = 'true'
                    }
                })
                break;
            }
        }
        // this.bookMap = this.state.books.map((book, i) => {
        //     if (index !== i) {
        //         return <Book book={book} key={index} isDisabled="true" disableSiblings={this.disableSiblings}/>
        //     }
        //     return <Book book={book} key={index} isDisabled="" disableSiblings={this.disableSiblings}/>
        //
        // });
        this.setState({books: this.state.books})
    }

    incrementBookCount(index) {
        let books = this.state.books
        let book = books[index]
        let count = book.stock;
        book.stock = count >= 999 ? count : count + 1;
        books[index] = book
        this.setState({books: books});
    }

    decrementBookCount(index) {
        let books = this.state.books
        let book = books[index]
        let count = book.stock;
        book.stock = count > 0 ? count - 1 : count;
        books[index] = book
        this.setState({books: books});
    }

    changeStock(index) {
        let books = this.state.books
        let book = books[index]
        debugger
        if (book.isDisabled === '') {
            book.label = false;
            let count = book.stock;
            if (count > 0 && count < 1000) {
                book.stock = count;
            }
            books[index] = book
            this.setState({books: books});
        }
    }

    updateStock(index, event) {
        let books = <this className="state books"></this>
        let book = books[index]
        let count = event.target.value;
        if (count > 0 && count < 1000) {
            book.stock = count;
        } else if (count === '') {
            book.stock = ''
        }
        books[index] = book
        this.setState({books: books});
        // this.label =!this.label;
    }

    checkKey(index, event) {
        let books = this.state.books
        let book = books[index]
        if (event.keyCode === 13 && book.stock !== '') {
            book.label = true;
            books[index] = book
            this.setState({books: books});
        }
    }


    render() {
        return (
            <div className="App">
                <div className="inventory">
                    <h1>Inventory</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>Cover</th>
                            <th>Description</th>
                            <th>Stock</th>
                        </tr>
                        </thead>

                        <tbody>{this.renderBooks()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
