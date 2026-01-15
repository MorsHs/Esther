import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';

function TableView({records,onClick}) { //Tanan masulod data sa records na props then butang ra sa table
    return (
    <TableContainer component={Paper} className="w-3/4 mt-10">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {records.map((record, index) => (
                            <TableRow key={record.child.id || index}>
                                <TableCell>{record.evaluation?.dateOfUpload || 'N/A'}</TableCell>
                                <TableCell>{record.child?.name || 'N/A'}</TableCell>
                                <TableCell><Button variant="contained" color="primary" onClick={() => onClick(record)}>View</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>)
    
}
export default TableView;