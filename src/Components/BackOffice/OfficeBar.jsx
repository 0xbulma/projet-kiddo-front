import { AppBar, Button, Toolbar, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const OfficeBar = () => {
    const navigate = useNavigate()
    return ( 
    <>
        <AppBar position='relative'>
            <Toolbar>
            <Typography variant="h5">Back Office</Typography>
            <Button color="warning" onClick={()=>navigate('/BackOffice/Users')}>Users</Button>
            <Button color="warning" onClick={()=>navigate('/BackOffice/Events')}>Events</Button>
            <Button color="warning" onClick={()=>navigate('/BackOffice/Extra')}>Extra</Button>
            <Button color="warning" onClick={()=>navigate('/BackOffice/Signal')}>Signal</Button>
            </Toolbar>
        </AppBar>
    </>)
    
}
export default OfficeBar