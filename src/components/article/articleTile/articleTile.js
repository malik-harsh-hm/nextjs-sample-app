import MarkdownToHtml from '../../shared/markdownToHtml/index';
import Link from 'next/link';
import Image from 'next/image';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ArticleTile({ articleHeading, articleDate, articleTags, articleDescription, articleLink, articleImage }) {
    return (

      
        <Card  variant="outlined" sx={{ height: 400, overflow: 'auto'}}>
        <CardMedia
          component="img"
          height="140"
          image={articleImage}
          alt={articleHeading}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {articleHeading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {articleDate} - {articleTags}
          </Typography>
          <Typography variant="body2">
          {articleDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><Link href={articleLink}>Read More</Link></Button>
        </CardActions>
      </Card>
    )
}
