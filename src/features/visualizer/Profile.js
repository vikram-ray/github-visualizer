import React from 'react'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import DoughnutChart from './charts/DoughnutChart'

import { parseRepoData } from './utils'

const ProfileDetails = ({data}) => {
    const joinedDate = new Date(Date.parse(data.created_at))

    return (<ListGroup variant="flush">
                <ListGroup.Item>{`Joined: ${joinedDate.toDateString()}`}</ListGroup.Item>
                <ListGroup.Item>{`Public repos: ${data.public_repos}`}</ListGroup.Item>
                <ListGroup.Item>{`Public gists: ${data.public_gists}`}</ListGroup.Item>
                <ListGroup.Item>{`Followers: ${data.followers}`}</ListGroup.Item>
            </ListGroup>)
}

export default function({data, repoData}){

    const {parsedRepoData, totalStars} = parseRepoData(repoData)
    return <Row>
            <Col sm={2}>
                <Image src={data.avatar_url} roundedCircle fluid />
                <p className="text-center" >{data.login}</p>
                <p className="text-center" >{`Total stars: ${totalStars}`}</p>
            </Col>
            <Col sm={4} >
                <ProfileDetails data={data} />
            </Col>
            <Col sm={6} >
                <DoughnutChart data={parsedRepoData} title="Projects" />
            </Col>
            <hr></hr>
    </Row>
}