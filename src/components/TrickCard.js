import {useState} from 'react';
import Button from './Button';
import { FaTimes, FaEdit } from 'react-icons/fa';
import trickDataService from '../services/trickDB';
import { deleteRiderTrick } from '../../backend/controller/tListCTRL';

const TrickCard = ({trick, loadTrick}) => {
    const [expand, setExpand] = useState(false);
    const onClickOption = () => {
        if (loadTrick != null) {
            loadTrick(trick);
        }
        else {
            setExpand(!expand);
        }
    }

    const edit = () => {
    }

    const erase = () => {
        deleteRiderTrick(trick._id);
    }

    return (
        <div className = "trick-card" onClick={() => onClickOption()}>
            <h3> {trick.name}</h3>
            {expand && <div> <h5 className = "extra-card">
                Comfort Level: {trick.Comfort}
            </h5>
            <h5 className = "extra-card">
                Date Landed: {trick['Date Landed']} <FaTimes size = {25} className = 'edit' style = {{color:'red'}} onClick={()=>edit()}/> <FaEdit size = {25} className = 'edit'  onClick={()=>erase()}/>
            </h5>
            <h5 className = "extra-card">
                Notes: {trick.Notes}
            </h5>

            </div>}
        </div>
    )
}

export default TrickCard
