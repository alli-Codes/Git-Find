import repoItem from './repo-item.js'
import userDetails from './repo-user.js'
import searchComponent from '../components/search-page.js'

const repoComponent = (userData, methods) => {

	const repo = undefined
	const repoBtn = document.querySelector('#repo__btn')

	const fetchRepos = () => {

		const userRepo = fetch(userData.repos_url)
							.then(res => res)
							.then(data => data.json())

		return userRepo
	}

	repoBtn.addEventListener('click', async() => {
		const results = await fetchRepos()
		const repoContainer = document.createElement('div')
		repoContainer.id = 'repo__container'

		const rootElem = document.querySelector('#root')
		rootElem.innerHTML = ''
		rootElem.innerHTML = `<button id="back__btn" onclick="display()"><i class="fas fa-arrow-left"></i></button> ${userDetails(userData, results)}`


		const showRepos = () => {
			for(let result of results){
				result.language == null ? result.language = 'N/A' : undefined
				 repoContainer.innerHTML += repoItem(result)
				 console.log(results.length)
			}
		}

		showRepos()

		rootElem.append(repoContainer)
	})

	return repoComponent
}

export default repoComponent