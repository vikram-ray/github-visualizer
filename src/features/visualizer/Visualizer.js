import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import {InputGroup, FormControl, Container, Button, Spinner, Row} from 'react-bootstrap'

import ProfileAndRepos from './ProfileAndRepos';
import { getAndSetUsername, clearValues } from './visualizerSlice';

import classes from './Visualizer.module.css'

function UsernameForm(props){
    const history = useHistory();
    const dispatch = useDispatch()
    const loading = useSelector(state=>state.visualizer.loading)
    const [username, setUsername] = useState(props.match.params.username)
    const handleChange = event => setUsername(event.target.value)
    const handleSubmit = (username) => {
        history.push(username)
    }
    useEffect(()=>{
        if(!username) dispatch(clearValues())
    },[username, dispatch])
    let buttonContent = null
    if (loading) {
        buttonContent = ( <Button variant="primary" disabled>
                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
                            Loading...
                          </Button>)
    }else{
        buttonContent = (<Button variant="primary" type="submit" onClick={()=>handleSubmit(username)} >
                            Submit
                        </Button>)}

    return (
        <form onSubmit={e=>e.preventDefault()} >
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>https://github.com/</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                    placeholder="username" 
                    value={username} 
                    onChange={handleChange} 
                    aria-label="GitHub username" 
                />
                <InputGroup.Append>
                    {buttonContent}
                </InputGroup.Append>
            </InputGroup>  
        </form>
    )
}



export default function(props) {
    const dispatch = useDispatch()
    const loading = useSelector(state=>state.visualizer.loading)
    useEffect(()=>{
        if (props.match.params.username) dispatch(getAndSetUsername(props.match.params.username))
    }, [props.match.params.username, dispatch])

    let content = null
    if (loading) content = <Spinner animation="border" variant="primary" />
    else content = <ProfileAndRepos />
    return <Container fluid>
            <Row><h3 className={classes.heading} > GitHub Profile Visualizer </h3></Row>
            <UsernameForm {...props} />
            {content}
        </Container>
}