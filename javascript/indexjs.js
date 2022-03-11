function navSlide(){
    navbar = document.getElementById("navbar").style
    navbar.display = "flex"
    navbar.flexDirection = "column"
    navbar.zIndex = 1
    navbar.position = "fixed"
    navbar.top = navbar.left = 0
    navbar.backgroundColor = "rgb(0,0,0)"
    navbar.backgroundColor = "rgba(0,0,0, 0.9)"
    navbar.overflowX = "hidden"
    navbar.transition = "0.5s"
    navbar.width = "100%"
    navbar.height = "100vh"
    navbar.alignItems = "center"
}
function closeNav(){
    document.getElementById("navbar").style.display = "none";
}