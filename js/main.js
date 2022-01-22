import searchComponent from './components/search-page.js'
import repoComponent from './components/repo-page.js'

const methods = () => {
	document.display = display
	document.searchUser = searchUser
}

const fetchData = async (user) => {
	// const data = await fetch('js/utils/data.json')
	const data = await fetch(`https:api.github.com/users/${user}`)
					.then(res => res)
					.then(data => data.json())
					.catch(err => console.log(err))

	// const searchedUser = data.filter((item) => item.username == user ? item : undefined)

	return data
}

const responsive = () => {
	const searchBtn = document.querySelector('#search__btn')
	if(screen.availWidth >= 600){
		searchBtn.innerText = 'Search'
	}
}

let inputValue = 'slick-codes'

const searchUser = () => {
	const inputData = document.querySelector('#input__field')
	display(inputData.value)
	inputValue = inputData.value
	inputData.value = ''
}

const display = async (user = inputValue) => {
	const rootElem = document.querySelector('#root')
	const userData = await fetchData(user)

	rootElem.innerHTML = searchComponent(userData, display)

	repoComponent(userData)
	responsive()
}

display('slick-codes')


methods()