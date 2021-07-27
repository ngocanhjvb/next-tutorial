import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Layout from '../../components/Layout'
import Link from 'next/link'
import {getBooks} from "../../services/books";

const Book = ({books}) => {
    return (
        <Layout>
            {books.map(book => (
                <Card className='my-3 shadow' key={book.bookName}>
                    <Card.Body>
                        <Card.Title>{book.bookName}</Card.Title>
                        <Card.Text>{book.bookContent}</Card.Text>
                        <Link href='/'>
                            <Button variant='dark'>Back</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </Layout>
    );
};


export async function getStaticProps() {
    const books = await getBooks();
    return {
        props: {
            books
        }
    }

}

Book.propTypes = {};

export default Book;