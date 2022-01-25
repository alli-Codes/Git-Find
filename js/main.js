import searchComponent from './components/search-page.js'
import followerComponent from './components/followers/follower-page.js'
import followingComponent from './components/following/following-page.js'
import repoComponent from './components/repo/repo-page.js'

const methods = () => {
	document.display = display
	document.searchUser = searchUser
}

const fetchData = async (user) => {
	// const data = await fetch('js/utils/data.json')
	const data = await fetch(`https://api.github.com/users/${user}`)
					.then(res => res)
					.then(data => data.json())
					.catch(err => console.log(err))

	// const searchedUser = data.filter((item) => item.username == user ? item : undefined)

	return data
}

const refinedFetchedData = async (user) => {
	let data = await fetchData(user)

	for(let props in data){
		data[props] == '' || data[props] == null ? data[props] = 'Not Available' : undefined
	}

	return data
}

const toggleSearchBtn = () => {
	const newInputField = document.querySelector('#input__field')
	const searchBtn = document.querySelector('#search__btn')
	if(newInputField.value == '') {
		searchBtn.disabled = true

		if(screen.availWidth >= 600){
			searchBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
		} else{
			searchBtn.style.color = 'rgba(0, 0, 0, 0.3)'
		}

	} else{
		searchBtn.disabled = false
		searchBtn.style.backgroundColor = ''
		searchBtn.style.color = ''
	}
	newInputField.addEventListener('input', toggleSearchBtn)
}

const responsive = () => {
	const searchBtn = document.querySelector('#search__btn')
	if(screen.availWidth >= 600){
		searchBtn.innerText = 'Search'
	}
}

let inputValue = 'octocat'

const searchUser = () => {
	const inputData = document.querySelector('#input__field')
	display(inputData.value)
	inputValue = inputData.value
	inputData.value = ''
}

const display = async (user = inputValue) => {
	const rootElem = document.querySelector('#root')
	const userData = await refinedFetchedData(user)

	rootElem.innerHTML = searchComponent(userData, display)

	followerComponent(userData)
	followingComponent(userData)
	repoComponent(userData)
	toggleSearchBtn()
	responsive()
}

display('octocat')

methods()