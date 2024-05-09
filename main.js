// 'hamburger'
// 'main-nav'

class NavHeader {
    // icon for the menu, and the menu hidden in desktop mode
    constructor(hamburgerMenuIcon, menuItems) {
        this.hamburgerMenuIcon = document.getElementById(hamburgerMenuIcon);
        this.menuItems = document.getElementById(menuItems);
        this.childrenArray = Array.from(this.menuItems.children);
        this.childrenArray.shift()

        // init event listener
        this.hamburgerMenuIcon.addEventListener('click', () => this.resizeArray())
        }


        resizeArray() {
            this.childrenArray.forEach(child => {

                let display = window.getComputedStyle(child).display;
                
                let newDisplay = display === 'none' ? 'flex' : 'none';
                
                child.style.display = newDisplay;
            })}

        }


const menu = new NavHeader('hamburger', 'main-nav-ul');


window.addEventListener('resize', () => {
    if ((window.innerWidth <= 1127) && (menu.childrenArray[1].style.display === 'none')) {
        menu.resizeArray();
    }
})