const initSlider =() => {
    const imageList =document.querySelector( ".slider .imageList")
    const slideButtons = document.querySelectorAll(".slide .slide-button")
}
slideButtons.forEach(button =>
    button.addEventListener("click", () =>{
        const direction = button.id === "prev-slide" ? -1: 1;
        const scrollAmount =imagList.clientWidth * direction;
        imagList.scrollBy({ left: scrollAmount, behavior: "smooth"})
    })
    )