import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {InputGroup, FormControl, Container, Button, Spinner, Row} from 'react-bootstrap'

import ProfileAndRepos from './ProfileAndRepos';
import { getAndSetUsername } from './visualizerSlice';

import classes from './Visualizer.module.css'

export default function() {

    const dispatch = useDispatch()
    const loading = useSelector(state=>state.visualizer.loading)

    const [username, setUsername] = useState("")

    const handleChange = event => setUsername(event.target.value)
    const handleSubmit = () => {
        dispatch(getAndSetUsername(username))
    }
    
    let content = null
    let buttonContent = null
    if (loading) {
        content = <Spinner animation="border" variant="primary" />
        buttonContent = ( <Button variant="primary" disabled>
                            <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            />
                            Loading...
                        </Button>)
    }else{
        content = <ProfileAndRepos />
        buttonContent = (<Button variant="primary" type="submit" onClick={handleSubmit} >
                            Submit
                        </Button>)
    }

    return <Container fluid>
            <Row>
                <h3 className={classes.heading} > GitHub Profile Visualizer </h3>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>https://github.com/</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="username" value={username} onChange={handleChange} aria-label="GitHub username" />
                    <InputGroup.Append>
                        {buttonContent}
                    </InputGroup.Append>
                </InputGroup>
            </Row>
            {content}
        </Container>
}