import React from 'react';
import ChallengeStyle from '../styles/challenge.module.scss'
import Vote from './Vote'
import useToken from '../utils/useToken'
import { useDispatch } from 'react-redux'
import { deleteChallange } from '../actions/actions'

const Challenge = (props) => {
    const dispatch = useDispatch();
    const { id, title, description, tags, voteCount, userId } = props.challenge;
    const { token } = useToken();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteChallange(id));
    }

    return (
        <li className={ChallengeStyle.card}>
            {token === userId ?
                <button className={ChallengeStyle.delete} onClick={(e)=>handleDelete(e)}>Delete</button>
                : null}
            <h1>{title}</h1>
            <h2>{description}</h2>
            <ul>
                {tags.map((tag, index) => {
                    return (
                        <li key={index}>{tag}</li>
                    )
                })}
            </ul>
            <Vote counter={voteCount} id={id} />
        </li>
    )
}

export default Challenge;