function getGithub(){
    return fetch(`https://api.github.com/orgs/fac-17/members?access_token=2017e4a6f02ddef92d8c23701428863ee222786a`)
    .then(res => {
        if (!res.ok) throw new Error ("There is an error");
        return res;
    })
    .then(res => res.json()); 
}

module.exports = { getGithub };

