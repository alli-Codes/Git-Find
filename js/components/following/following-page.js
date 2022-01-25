import followerItem from '../followers/follower-item.js'

import userDetails from '../followers/follower-user.js'
// import followerItem from './follower-item.js'

const followingComponent = (userData) => {

const followingBtn = document.querySelector('#following__btn')

	const fetchFollowings = () => {

		const userFollowings = fetch(`https://api.github.com/users/${userData.login}/following`)
							.then(res => res)
							.then(data => data.json())

		return userFollowings
	}

	followingBtn.addEventListener('click', async() => {
		
		const results = await fetchFollowings()
		const followingContainer = document.createElement('div')
		followingContainer.id = 'follower__container'

		const rootElem = document.querySelector('#root')
		rootElem.innerHTML = ''
		rootElem.innerHTML = `<button id="back__btn" onclick="display()"><i class="fas fa-arrow-left"></i></button> ${userDetails(userData, results, 'Following')}`

		// console.log(results)

		const showFollowing = () => {
			for(let result of results){
				 followingContainer.innerHTML += followerItem(result)
			}
		}

		showFollowing()

		rootElem.append(followingContainer)
	})

}

export default followingComponent