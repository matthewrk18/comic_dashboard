import React from 'react';
import { colors, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import superhero_costumes from '../../assets/images/superhero_costumes.jpeg';
import herologo from '../../assets/images/herologo.jpeg';
import { Link } from 'react-router-dom';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em',
    },
    logo_a: {
        color: 'rgb(28,24,22)',
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'red',
        textDecoration: 'none',
        fontSize: '1.2rem'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${superhero_costumes});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '3em'
    }
    
})

export const Home = ( props:Props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/*New and Updated HTML Code */}
            <nav>
                <div className={classes.navbar_container}>

                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <Link to='/' href="" className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className={classes.nav_a}>Dashboard</Link>
                        </li>
                    </ul>

                    <h1 className={ `${classes.logo} `}>
                        <a href="#" className={ `${classes.logo_a} ${classes.logo_navigation}` }>
                            <img src="herologo" alt="" />
                        </a>
                    </h1>

                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <Link to="/signin" className={classes.nav_a}>Sign In</Link>
                        </li>
                        <li>
                            <Link to="/signin" className={classes.nav_a}>Sign Up</Link>
                        </li>
                    </ul>

                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <p>A Virtual Collection</p>
                    <Button variant="contained"><img src={herologo} /></Button>
                </div>
            </main>
        </div>
    )
}