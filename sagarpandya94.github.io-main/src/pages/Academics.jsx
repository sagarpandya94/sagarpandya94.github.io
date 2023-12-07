import React from "react";
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LocationOn from '@material-ui/icons/LocationOn';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'initial',
    maxWidth: 600,
    backgroundColor: 'transparent',
  },
  title: {
    marginBottom: 2,
    fontSize: 22,
  },
  smalltitle: {
    fontSize: 20,
  },
  rateValue: {
    fontWeight: 'bold',
    marginTop: 2,
  },
  content: {
    position: 'relative',
    padding: 24,
    margin: '-24% 16px 0',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  favorite: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  locationIcon: {
    marginRight: 4,
    fontSize: 18,
  },
  bigfont: {
      fontSize: 20,
      align: 'left'
  },
  smallerfont: {
      fontSize: 16
  }
}));

const Academics = () => {
    const styles = useStyles();
    const mediaStyles = useWideCardMediaStyles();
    const shadowStyles = useFadedShadowStyles();
    return (
    <div className="container margin-top-2-p cards">
      <Card elevation={0} className={styles.root}>
      <CardMedia
        classes={mediaStyles}
        image={
          'https://www.ge.com/news/sites/default/files/styles/full_header/public/Reports/2020-03/GettyImages-530755444-e1496426370542.jpg?itok=67DfrtvX'
        }
      />
      <CardContent className={cx(shadowStyles.root, styles.content)}>
        <h3 className={styles.title}>San Francisco State University</h3>
        <Box color={'grey.800'} style={{ display:'flex', justifyContent:'center' }} mb={2} >
          <LocationOn className={styles.locationIcon}/>
          <span>San Francisco, USA</span>
        </Box>
        <h4 className={styles.smalltitle}>Master's in Computer Science</h4>
        <Typography className={styles.bigfont}>
          Related Coursework 
        </Typography>
        <Typography className={styles.smallerfont}>
        Software Engineering, Internet Application Design and Development, Algorithms, Cloud Computing, Mobile Application Development, Advanced Operating System
        </Typography>
        <Typography className={styles.bigfont}>
          GPA 
        </Typography>
        <Typography className={styles.smallerfont}>
            3.7/4.0
        </Typography>
      </CardContent>
    </Card>
    <div className="margin-top-2-p">
    <Card elevation={0} className={styles.root}>
      <CardMedia
        classes={mediaStyles}
        image={
          'https://www.collegesearch.in/upload/institute/images/large/170403105812_2.png.jpg'
        }
      />
      <CardContent className={cx(shadowStyles.root, styles.content)}>
        <h3 className={styles.title}>Symbiosis Institute of Technology</h3>
        <Box color={'grey.800'} style={{ display:'flex', justifyContent:'center' }} mb={2}>
          <LocationOn className={styles.locationIcon} />
          <span>Pune, India</span>
        </Box>
        <h4 className={styles.smalltitle}>Bachelor's in Computer Science</h4>
        <Typography className={styles.bigfont}>
          Related Coursework 
        </Typography>
        <Typography className={styles.smallerfont}>
            Data Structures, Java and Web Technologies, Design and Analysis of Algorithms, Advanced Database Management, Distributed Systems, Software Quality and Assurance
        </Typography>
        <Typography className={styles.bigfont}>
          GPA 
        </Typography>
        <Typography className={styles.smallerfont}>
            3.33/4.0
        </Typography>
      </CardContent>
    </Card> 
    </div>
    <div className="margin-top-2-p margin-bottom-5-p">
    <Card elevation={0} className={styles.root}>
      <CardMedia
        classes={mediaStyles}
        image={
          'https://images.static-collegedunia.com/public/college_data/images/appImage/25503_nirmauniversity-campus-admissions-2016-1.jpg'
        }
      />
      <CardContent className={cx(shadowStyles.root, styles.content)}>
        <h3 className={styles.title}>Nirma Institute of Diploma Studies</h3>
        <Box color={'grey.800'} style={{ display:'flex', justifyContent:'center' }} mb={2}>
          <LocationOn className={styles.locationIcon} />
          <span>Ahmedabad, India</span>
        </Box>
        <h4 className={styles.smalltitle}>Diploma in Computer Science</h4>
        <Typography className={styles.bigfont}>
          Related Coursework 
        </Typography>
        <Typography className={styles.smallerfont}>
            Programming Methodology, Object Oriented Concepts and Programming, Internet Programming, Data Security, 
        </Typography>
        <Typography className={styles.smallerfont}>
            Software Engineering
        </Typography>
        <Typography className={styles.bigfont}>
          GPA 
        </Typography>
        <Typography className={styles.smallerfont}>
            3.8/4.0
        </Typography>
      </CardContent>
    </Card> 
    </div>
    </div>
  );
};

export default Academics;