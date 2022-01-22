const searchComponent = (data) => {
	// let user = {}
	// data.forEach(item => user = item)
	const component = `

			<div id="search__section">
				<div id="search__container">
					<i class="fas fa-search"></i>
					<input id="input__field" type="text" placeholder="Find Developers">
					<button onclick="searchUser()" id="search__btn"><p class="fas fa-search"></p></button>
				</div>
			</div>

			<div id="user__section">
				<div id="user__about">
					<div id="user__image" style="background-image: url(${data.avatar_url})">
					
				</div>

				<div id="user__name">
					<h3 id="user__username">${data.login}</h3>
					<p id="user__fullname">${data.name}</p>
				</div>
				</div>

				<div id="user__others">
					<div id="user__bio">
						<p>${data.bio}</p>
					</div>

					<div id="user__info">
						<button><span id="user__followers">${data.followers}</span> Followers</button>
						<button><span id="user__following">${data.following}</span> Following</button>
						<button id="repo__btn"><span id="user__repos">${data.public_repos}</span> Repos</button>
					</div>

					<div id="user__links">
						<div class="links">
							<i class="fas fa-map-marker-alt"></i>
							<p id="user__location">${data.location}</p>
						</div>

						<div class="links">
							<i class="fas fa-link"></i>
							<p id="user__website">${data.blog}</p>
						</div>

						<div class="links">
							<i class="fab fa-twitter"></i>
							<p id="user__twitter">${data.twitter_username}</p>
						</div>

						<div class="links">
							<i class="fas fa-building"></i>
							<p id="user__company">${data.company}</p>
						</div>
					</div>
				</div>
			</div>
	`

	return component
}

export default searchComponent