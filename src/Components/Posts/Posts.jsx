import React,{useContext} from 'react'
import Card from '../Cards/Cards';
import {data} from '../../data'
import Locations from '../Locations/Locations';
import Search from '../Search/Search';
import {userContext} from '../../store/Contexts'
import './post.css'
import Groups from '../Groups/Groups';

function Posts() {
	const {User} = useContext(userContext)
	return (
		<>
			<div className='container mt-5' style={{width:'90%'}}>
				<div className="row">
					<div className="col ">
						<Card data={data}/>
					</div>
					<div className="col col-lg-5 col-small">
						<Locations/>
						{User && <Groups/>}
					</div>
				</div>
			</div>
		</>
	)
}

export default Posts;