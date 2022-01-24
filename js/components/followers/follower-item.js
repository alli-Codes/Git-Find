const followerItem = (data) => {
	const follower = `
				<div id="follower__component">
					<div id="follower__image" style="background-image: url(${data.avatar_url})"></div>
					<p>${data.login}</p>
				</div>
			`

	return follower
}

export default followerItem