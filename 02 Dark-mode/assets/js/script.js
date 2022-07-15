changeMode = () => {
    changeClasses();
    changeText();
}

changeClasses = () => {
    //colocar se não existir e se existir vai retirar o 'dark-mode'
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

changeText = () => {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if (body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}


//se eu quiser mudar a classe, mudo só por esta const aqui
const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);