import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import TableView from '../../components/Tables/TableView';
import { useEvaluationStorage } from '../../services/storage.js'

const Records = () => {
    const navigate = useNavigate();
    const rawRecords = useEvaluationStorage(state => state.records);
    // ✅ THIS LINE GOES HERE
    const records = useMemo(
        () => Object.values(rawRecords).flat(),
        [rawRecords]
    );

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