//selecting all required elements
const filterItem = document.querySelector(".co-items");
const filterImg = document.querySelectorAll(".co-gallery .co-image");
const allImages = document.querySelectorAll(".co-image img");
const fullScreenImg = document.querySelector(".co-img img");
// enlarge the image clicked
allImages.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    fullScreenImg.src = e.target.src;
  });
});
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
window.onload = () => {
  //after window loaded
  filterItem.onclick = (selectedItem) => {
    //when clicked on co-items div
    if (selectedItem.target.classList.contains("co-item")) {
      //wehn selected item has .co-item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of selected item and store in filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if selected item data-name value is equal to images data-name value
        //or selected item data-name value is equal to "all"
        if (filterImges == filterName || filterName == "all") {
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        } else {
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  };
};
