import React from 'react'
import { Table } from 'react-bootstrap'

function dateParser(str){
    let tmp = new Date(str)
    return tmp.toDateString()
}

export default function ({data}) {

    return <div>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Description</th>
      <th>Language</th>
    </tr>
  </thead>
  <tbody>
      {data.map((item, idx)=>{
          const title = `
Stars: ${item.stargazers_count}
Forks: ${item.forks_count}
Open issues: ${item.open_issues_count}
Created: ${dateParser(item.created_at.substring(0,10))}
Last Update: ${dateParser(item.updated_at.substring(0,10))}
`
          return (<tr key={item.name} >
            <td>{idx+1}</td>
          <td>{item.homepage?<a href={item.homepage} >{item.name}</a>:item.name}</td>
          <td><a title={title} href={item.html_url} > {item.description}</a></td>
            <td>{item.language}</td>
        </tr>)
      })}
  </tbody>
</Table>
    </div>
}
