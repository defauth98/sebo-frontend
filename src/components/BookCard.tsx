import { Card, Button } from 'react-bootstrap'
import { Books } from '../pages';

type BookCardProps = {
  book: Books;
}

const BookCard:React.FC<BookCardProps> = ({book}) => (
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={book.image_path} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
      {book.description.substr(0, 150)}
    </Card.Text>
    <Button variant="primary">Ver detalhes</Button>
  </Card.Body>
</Card>
)

export default BookCard;