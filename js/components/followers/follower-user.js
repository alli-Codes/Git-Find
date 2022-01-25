const userDetails = (userData, results, type) => {
	const user = `
				<div id="repo__user-container">
					<div id="repo__user-info">
						<div id="repo__user-image" style="background-image: url(${userData.avatar_url})">
							
						</div>

						<div id="repo__user-name">
							<h3>${userData.login}</h3>
							<p>${userData.name}</p>
						</div>
					</div>

					<div id="repo__user-count">
						<p><span>${results.length}</span>${type}</p>
					</div>
				</div>
	`

	return user
}

export default userDetails