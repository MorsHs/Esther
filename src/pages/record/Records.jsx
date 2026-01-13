import TableView from '../../components/Tables/TableView';


const Records = () => {

    const handleOnClick = (e) => {
        console.log("Button clicked");
    }
    return(
        <div className="flex flex-col items-center">
            <TableView onClick={handleOnClick}/>
        </div>
    )
}

export default Records;