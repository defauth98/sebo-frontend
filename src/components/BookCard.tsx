import { Card, Button } from 'react-bootstrap'
import { Books } from '../pages';

type BookCardProps = {
  book: Books;
}

const BookCard:React.FC<BookCardProps> = ({book}) => (
  <Card style={{ width: '18rem' }} className="me-4">
    <Card.Img variant="top" src={book.image_path} style={{ width: '16rem', height: '100%'}}  className="mt-4"/>
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>
        {book.description.substr(0, 150) + '...'}
      </Card.Text>
      <Button variant="primary">Ver detalhes</Button>
    </Card.Body>
  </Card>
)

export default BookCard;