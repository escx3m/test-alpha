import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './App.css';
import { HeartFill, TrashFill } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import { remove, liked, selectValue, selectLike } from './itemSlice';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'


function CardGrid() {

    const dogs = useSelector(selectValue);
    const dispatch = useDispatch();
    const likeState = useSelector(selectLike);

    useEffect(() => [dogs]);

    return (
        <Row xs={1} sm={2} lg={4} className="g-4 allCards">
            {(dogs && dogs.length > 0) && dogs.map((item, idx) => {
                const cardRender = (
                    <Col key={idx}>
                        <Card className="cardContent">
                            <Card.Img variant="top" src={item.img} className="cardImg" />
                            <div className="blockIcons">
                                <div>
                                    <OverlayTrigger overlay={<Tooltip>Лайк</Tooltip>}>
                                        <HeartFill className={`iconHeart ${item.isLiked && 'liked'}`} onClick={() => dispatch(liked(idx))} />
                                    </OverlayTrigger>
                                </div>
                                <div>
                                    <OverlayTrigger overlay={<Tooltip>Удалить</Tooltip>}><TrashFill className="iconDelete" onClick={() => dispatch(remove(idx))} />
                                    </OverlayTrigger>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Title className="cardTitle">{item.anime}</Card.Title>
                                <Card.Text className="cardText">{item.quote}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                );
                if (likeState) return (item.isLiked && cardRender);
                return cardRender
            })}
        </Row>
    )
}

export default CardGrid;
