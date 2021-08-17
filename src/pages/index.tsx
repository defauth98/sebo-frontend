import { Container } from 'react-bootstrap'

import BookCard from '../components/BookCard'
import booksApi from '../services/api'

export interface Books {
  title: string;
  description: string;
  price: string;
  publisher: string;
  state_book: string;
  date_edition: string;
  image_path: string;
  id: number;
}

interface AdminProps {
  ServerSideBooks: Array<Books>
}

const Home: React.FC<AdminProps> = ({ServerSideBooks}) => {
  return (
    <Container>
      <h1>Livros</h1>
      {ServerSideBooks.map(book => <BookCard key={String(book.id)} book={book}/>)}
    </Container>
  )
}

export async function getStaticProps() {
  const request = await booksApi.get('/book');

  const ServerSideBooks = request.data;

  return {
    props: {
      ServerSideBooks,
    },
  };
}

export default Home
