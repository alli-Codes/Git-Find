const repoItem = (repoData) => {
const refinedFetchedData = (user) => {
	let newData = repoData

	for(let props in newData){
		newData[props] == '' || newData[props] == null ? newData[props] = 'N/A' : undefined
	}

	return newData
}

let data = refinedFetchedData()

	const shortDescription = () => {
		let text = data.description.slice(0, 60)
		if(data.description.length <= 60){
			return data.description
		}else{
			return `${text} <strong style="color: black"> ..........</strong>`
		}
	}

	const repo = `
				<div id="repo__component">
					<div id="repo__component-main">
						<h3>${data.name}</h3>
						<p>${shortDescription()}</p>
					</div>

					<div id="repo__component-footer">
						<div id="repo__component-icons">
							<p><i class="fas fa-star"> ${data.stargazers_count}</i></p>
							<p><i class="fas fa-code-branch"> ${data.forks_count}</i></p>
							<p><i class="fas fa-code-branch"> ${data.default_branch}</i></p>
						</div>

						<div id="repo__component-language">
							<p>${data.language}</p>
						</div>
					</div>
				</div>
	`

// console.log(repoItem())
	return repo
}

export default repoItem