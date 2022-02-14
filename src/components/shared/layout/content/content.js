
import styles from './content.module.css'; // Import css modules stylesheet as styles

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "left",
  color: theme.palette.text.secondary
}));


export default function MainContent(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={2}>
      </Grid>
      <Grid item xs={8}>
        <Item style={{minHeight:'500px'}}>{props.children}</Item>
      </Grid>
      <Grid item xs={2}>
      </Grid>
    </Grid>
  </Box>
  );
};