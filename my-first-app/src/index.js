import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
    {
        img: 'https://m.media-amazon.com/images/I/51F2W3ubWRL._SX342_SY445_.jpg',
        title: 'Atomik Aliskanliklar',
        author: 'James Clear',
        id: 1
    },
    {
        img: 'https://m.media-amazon.com/images/I/61FuKmyTayL._SY522_.jpg',
        title: 'Korluk',
        author: 'Jose Saramago',
        id: 2
    },
    {
        img: 'https://m.media-amazon.com/images/I/61wmcqPz62L._SY522_.jpg',
        title: 'Yuzyillik Yalnizlik',
        author: 'Gabriel Garcia Marquez',
        id: 3
    }
];

const Booklist = () => {
    return <section className='booklist'>
        {books.map((book) => {
            return <Book {...book} key={book.id} />;
        })}
    </section>;
};

const Book = (props) => {
    const {img, title, author} = props;
    return <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h2>{author}</h2>
    </article>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />)