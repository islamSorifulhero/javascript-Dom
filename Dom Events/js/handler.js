document.getElementById('btn-update-title').addEventListener('click', function () {
    const pageTitleElement = document.getElementById('page-title');
    pageTitleElement.innerText = "Update page title text"
})

const btnLogin = document.getElementById('btn-login');
btnLogin.addEventListener('click', function () {
    const userInfo = document.getElementById('user-info');
    userInfo.innerText = 'User login successfully';
})