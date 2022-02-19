import React, { useEffect, useState } from 'react';
import DashboardStyle from '../styles/dashboard.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import Challenge from './Challenge'
import AddChallengeModal from './AddChallengeModal'
import { searchInput, sortBy } from '../actions/actions'
import Navbar from './Navbar';

const Dashboard = (props) => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const totalChallanges = useSelector((state) => state.ChallengeReducer.challenges);
    const searchFieldValue = useSelector((state) => state.ChallengeReducer.searchValue);

    useEffect(() => {
        dispatch(searchInput(searchValue));
    }, [searchValue])

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    const handleSelectChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        dispatch(sortBy(e.target.value));
    }

    let item = null;
    if (searchFieldValue) {
        item = totalChallanges && totalChallanges.filter(challenge => {
            return challenge.title.toLowerCase().includes(searchFieldValue.toLowerCase())
        }).map(challenge => {
            return <Challenge challenge={challenge} key={challenge.id} />
        })
    } else {
        item = totalChallanges && totalChallanges.map(challenge => (
            <Challenge challenge={challenge} key={challenge.id} />
        )
        )
    }

    return (
        <div className={DashboardStyle.wrapper}>
            <Navbar/>
            <div className={DashboardStyle.ButtonWrapper}>
                <button className={DashboardStyle.addButton} onClick={() => { setVisible(true) }}>Add New challenge</button>
                <input className={DashboardStyle.searchButton} type="search" placeholder="Search.." value={searchValue} onChange={handleSearch}></input>
                <select className={DashboardStyle.selectButton} onChange={(e) => handleSelectChange(e)}>
                    <option value="" disabled selected>Sort by</option>
                    <option value="voteCount">Like</option>
                    <option value="date">Date</option>
                </select>
            </div>
            <div>
                <ul>
                    {item}
                </ul>
            </div>
            <AddChallengeModal visible={visible} handleClose={() => { setVisible(false) }} />
        </div>

    )
}

export default Dashboard;