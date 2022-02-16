import styles from './footer.module.css'; // Import css modules stylesheet as styles
import Typography from '@mui/material/Typography';


// const {Footer } = Layout;

export default function MainFooter(){
return(

      <footer className={styles.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>

);
};
