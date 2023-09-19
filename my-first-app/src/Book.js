const Book = (props) => {
    const {img, title, author, number} = props;

    return <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h2>{author}</h2>
        <span className='number'>#{number + 1}</span>
    </article>
};

export default Book;