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
                        <TableRow>
                            <TableCell>04/18/2021</TableCell>
                            <TableCell>John Doe</TableCell>
                            <TableCell><Button variant="contained" color="primary" onClick={onClick}>View</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>)
    
}
export default TableView;