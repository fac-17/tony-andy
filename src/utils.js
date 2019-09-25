require("dotenv")("../.env");

function getGithub(pic, name){
    return window
    .fetch(`https://api.github.com/orgs/fac-17/members?access_token=${process.env.token}`)
    .then(res => {
        if (!res.ok) throw new Error ("There is an error");
        return res;
    })
    .then(res => res.json()); 
}

module.exports = { getGithub };