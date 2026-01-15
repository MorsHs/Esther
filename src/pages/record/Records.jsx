import { useNavigate } from 'react-router-dom';
import TableView from '../../components/Tables/TableView';


const Records = () => {
    const navigate = useNavigate();

    const handleOnClick = (e) => {
        navigate('/records/child-records');
    }
    return(
        <div className="flex flex-col items-center">
            <TableView onClick={handleOnClick}/>
        </div>
    )
}

export default Records;