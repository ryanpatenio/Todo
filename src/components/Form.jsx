import React, { useState } from 'react'
import { Box ,TextField, Button, List, ListItem, Typography } from '@mui/material';
import * as Icons from '@mui/icons-material';

const Form = ({items, onAddItem, onRemoveItem}) => {

  const [input, setInput] = useState('');

  const handleAdd = () => {
    if(input.trim()){
      onAddItem(input);
      setInput(''); //clear input field after adding
    }
  }

  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        maxWidth: 400,
        margin: '0 auto',
        mt: 4,
      }}
    >
      <TextField
        label="Enter item"
        variant="outlined"
        fullWidth
         value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ bgcolor: 'blue' }} onClick={handleAdd}
      >
        Add
      </Button>
      <List style={{ marginTop: 16 }}>

        {items.length > 0 ? (
          items.map((item , index) => (
            <ListItem key={index}>
            <Typography variant="body1">{index + 1}. {item} 
              <Button 
                variant='contained' 
                size='small'
                color ='success'
                sx={{
                
                  fontSize: '0.8rem',
                  ml:'30px',
                 
                  
                }}
                startIcon={<Icons.Delete />}
                onClick={() => onRemoveItem(index)}
                >
                Remove
              </Button>
              
              </Typography>
          </ListItem>
          ))
        )
        : (
          <Typography variant="body2">No items added yet.</Typography>
        )}
            
          
       
      </List>

    </Box>

  );
}

export default Form