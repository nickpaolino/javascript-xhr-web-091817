function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  const userValue = getUser();
  const urlValue = `https://api.github.com/${userValue}/octocat/repos`
  console.log(urlValue)
  req.open("GET", urlValue)
  req.send()
}

function getUser(){
  form.addEventListener("submit", function(event){
    event.preventDefault();
    const form = document.querySelector('.user');
    const user = document.querySelector('.user-value').value
  })
  return user
}

function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + '</li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}
function getCommits(el) {
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  req.addEventListener("load", showCommits)
  req.open("GET", 'https://api.github.com/repos/octocat/' + name + '/commits')
  req.send()
}

function showCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("commits").innerHTML = commitsList
}
