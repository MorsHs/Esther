import { useNavigate } from 'react-router-dom';
import TableView from '../../components/Tables/TableView';
import { useEvaluationStorage } from '../../services/storage.js'

const Records = () => {
    const navigate = useNavigate();
    const { getAll } = useEvaluationStorage();
    const records = getAll();

    console.log(records); // Print records to console

    const handleOnClick = (record) => {
        navigate('/records/child-records', { state: { record } });
    }
    return(
        <div className="flex flex-col items-center">
            <TableView records={records} onClick={handleOnClick}/>
        </div>
    )
}

export default Records;