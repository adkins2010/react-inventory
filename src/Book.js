import React, {Component} from 'react';

class Book extends Component {

    constructor(props) {
        super(props);
        this.labelClass = this.labelClass.bind(this)
        this.inputClass = this.inputClass.bind(this)
    }

    labelClass() {
        return (this.props.label ? 'show' : 'hide')
    }

    inputClass() {

        return (!this.props.label ? 'show' : 'hide')
    }

    render() {
        return (<tr className={`row${this.props.index % 2 ? 0 : 1}`} key={this.props.index}>
            <td>
                <img src={this.props.book.cover} alt={this.props.book.title}/>
            </td>

            <td>
                <div className="title">{this.props.book.title}</div>
                <div>{this.props.book.author}</div>
                <div>Published in {this.props.book.year}</div>
                <div>ISBN {this.props.book.isbn}</div>
            </td>

            <td>
                <input
                    disabled={this.props.isDisabled}
                    type="button"
                    value="-"
                    onClick={() => this.props.decrementBookCount()}
                />
                <label
                    className={this.labelClass()}
                    onDoubleClick={this.props.changeStock}
                >
                    {this.props.book.stock}
                </label>
                <input
                    type="text"
                    className={this.inputClass()}
                    maxLength="4"
                    size="4"
                    value={this.props.book.stock}
                    onChange={() => this.props.updateStock}
                    onKeyDown={() => this.props.checkKey}
                />
                <input
                    disabled={this.props.isDisabled}
                    type="button"
                    value="+"
                    onClick={() => this.props.incrementBookCount()}
                />
            </td>
        </tr>);
    }
}
export default Book;