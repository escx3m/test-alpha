import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { toggleLike, selectLike } from './itemSlice';
import { useSelector, useDispatch } from 'react-redux';

function FilterImage() {

    const unFilter = "bg-secondary";
    const onFilter = "bg-success";

    const likeState = useSelector(selectLike);
    const dispatch = useDispatch();

    function clickFilter(e) {
        if (!likeState) {
            e.target.classList.remove(unFilter);
            e.target.classList.add(onFilter);
        } else {
            e.target.classList.remove(onFilter);
            e.target.classList.add(unFilter);
        }
        dispatch(toggleLike());
    }

    return (
        <div className="blockFilter">
            <Badge pill bg="secondary" className="badgeFilter" onClick={clickFilter}>Liked</Badge>
        </div>
    )
}

export default FilterImage;