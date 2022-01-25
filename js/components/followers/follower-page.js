import userDetails from './follower-user.js'
import followerItem from './follower-item.js'

const followerComponent = (userData) => {

const followerBtn = document.querySelector('#follower__btn')

	const fetchFollowers = () => {

		const userFollowers = fetch(userData.followers_url)
							.then(res => res)
							.then(data => data.json())

		return userFollowers
	}

	followerBtn.addEventListener('click', async() => {
		const results = await fetchFollowers()
		const followerContainer = document.createElement('div')
		followerContainer.id = 'follower__container'

		const rootElem = document.querySelector('#root')
		rootElem.innerHTML = ''
		rootElem.innerHTML = `<button id="back__btn" onclick="display()"><i class="fas fa-arrow-left"></i></button> ${userDetails(userData, results, 'Followers')}`


		const showFollowers = () => {
			for(let result of results){
				 followerContainer.innerHTML += followerItem(result)
				 console.log(results.length)
			}
		}

		showFollowers()

		rootElem.append(followerContainer)
	})

}

export default followerComponent