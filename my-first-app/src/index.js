import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';
import Book from './Book';

const Booklist = () => {
    return (
        <>
            <h1>amazon best sellers</h1>
            <section className='booklist'>
                <EventExamples />
                {books.map((book, index) => {
                    return <Book {...book} key={book.id} number={index} />;
                })}
            </section>;
        </>
    );
};

const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log(e.target)
        console.log('handle form input');
    }
    const handleButtonClick = () => {
        alert('handle button click');
    }
    const handleFormSubmission = (e) => {
        e.preventDefault();
        console.log('handle form submission');

    }
    return (<section>
        <form onSubmit={handleFormSubmission}>
            <h2>Typical Form</h2>
            <input type="text" name="example" onChange={handleFormInput} />
        </form>
        <button onClick={handleButtonClick}>Click</button>
    </section>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />)