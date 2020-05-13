import React from 'react'
import Typography from '@material-ui/core/Typography';



function Lyrics(props) {

    return <div>
            <h1 value={props.title}>{props.title}</h1>
            <h1 value={props.artist}>{props.artist}</h1>
            <Typography variant="h6" color="inherit" paragraph>
              {props.lyrics}
            </Typography>
    </div>
}
export default Lyrics