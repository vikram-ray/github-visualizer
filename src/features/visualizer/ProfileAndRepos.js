import React from 'react';
import { useSelector } from 'react-redux';

import Profile from './Profile'
import Repositories from './Repositories'

export default function(){

	const repos = useSelector(state=>state.visualizer.repo)
	const profile = useSelector(state=>state.visualizer.profile)

    return (<React.Fragment>
		{profile?<><Profile data={profile} repoData={repos} /><hr/></>:null}
		{Array.isArray(repos)&&repos.length?<Repositories data={repos} />:null}
    </React.Fragment>);
  
};