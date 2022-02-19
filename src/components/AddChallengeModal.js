import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { add_challenge } from '../actions/actions'
import AddChallengeModal from '../styles/addchallengemodal.module.scss';
import ReactDOM from 'react-dom';
import useToken from '../utils/useToken'

const AddChallengeForm = (props) => {
    const { visible } = props;
    const dispatch = useDispatch();
    const tagList = ["feature", "tech", "array"];
    const [checked, setChecked] = useState({
        feature: false,
        tech: false,
        array: false,
    })

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const {token} = useToken();

    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [...tags];
        if (event.target.checked) {
            updatedList = [...tags, event.target.value];
        } else {
            updatedList.splice(tags.indexOf(event.target.value), 1);
        }
        setTags(updatedList);
        setChecked({ ...checked, [event.target.value]: event.target.checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // create new object that we will pass to add a new challenge
        const addChallengeObject = {
            id: Math.random(),
            title,
            description,
            tags,
            voteCount: 0,
            createdAt: new Date(),
            userId: token
        }
        dispatch(add_challenge(addChallengeObject))
        setTitle('');
        setDescription('');
        setTags([]);
        setChecked({
            feature: false,
            tech: false,
            array: false,
        })
        props.handleClose(); // after adding new challenge, close the pop-up
    }

    const showHideClassName = visible ? AddChallengeModal.displayBlock : AddChallengeModal.displayNone;

    return (
        ReactDOM.createPortal(
            <div className={`${showHideClassName} ${AddChallengeModal.modal}`}>
                <div className={AddChallengeModal.modalBody}>
                    <form onSubmit={handleSubmit}>
                        <span className={AddChallengeModal.close} onClick={props.handleClose}>&times;</span>
                        <input type="text" placeholder="Enter the Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" placeholder="Enter the Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <div className={AddChallengeModal.checkboxList}>
                            {tagList.map((item, index) => {
                                return (
                                    <div key={index} className={AddChallengeModal.checkBox}>
                                        <input value={item} type="checkbox" onChange={handleCheck} checked={checked[item]} />
                                        <span>{item}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>, document.body)
    )
}

export default AddChallengeForm;