import React from "react";
import {Container, Card, Typography,CardContent,IconButton,Box} from '@mui/material'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import EditIcon from '@mui/icons-material/Edit';
const Todo = () => {
    return ( 
        <Container>
            <Card variant = 'outlined' sx={{mt: '22px', boxSizing: 'border-box', border: '1px solid rgb(227, 227, 227)', borderRadius:'8px'}}>
                <CardContent>
                <Box sx={{display: "grid", gridTemplateColumns: "1fr auto", alignItems: "start", gap: 2}}>
                    
                    <Box>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Roboto', fontSize: '24px', fontWeight:400}}>
                        Cooking a salmon
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across 
          </Typography>
                    </Box>

          <Box sx={{display: "flex", flexDirection: "row", gap: 1}}>
                <Typography variant="h5" component="h2"> 
                    <IconButton>
                        <EditIcon sx={{margin: "10px"}}/>
                        </IconButton>
                        <IconButton>
                   <MoreHorizOutlinedIcon />
                    </IconButton>
                </Typography>
                </Box>
                </Box>
                </CardContent>
            </Card>
        </Container>
     );
}

export default Todo;