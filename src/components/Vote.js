import React, { useState } from 'react';
import VoteStyle from '../styles/vote.module.scss'
import { useDispatch } from 'react-redux';
import { upVote, downVote } from '../actions/actions'

const Vote = (props) => {
    const dispatch = useDispatch();
    const [hasVoted, setHasVoted] = useState(false);
    const { counter, id } = props;

    const handlevote = (e) => {
        e.preventDefault();
        setHasVoted(!hasVoted);
        if(hasVoted) {
            dispatch(downVote(id));
        }
        else{
            dispatch(upVote(id));
        }
        
    }
    return (
        <div className={VoteStyle.voteContainer}>
            <span>{counter}</span>
            {hasVoted ? <svg onClick={handlevote} width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z"/></svg>
                :
                <svg onClick={handlevote} width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"/></svg>}
        </div>
    )
}

export default Vote;