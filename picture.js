//Make a number of boxes (defined in the code) appear on the screen -DONE
//Allow the user to specify how many boxes they want on the screen and display that on the screen -DONE
//Allow the user to clear all boxes via a clear boxes button - DONE
//Add images dynamically to boxes using unsplash query -TO DO
// https://source.unsplash.com/random/500x500/?sig=<randomNum>&<query> *bold needs modifying*

//first create some easy names to grab elements from html
const wrapper = document.getElementById('wrapper');
const searchTerm = document.getElementById('input');
const noBoxes = document.getElementById('input2');
const submit = document.getElementById('submit');
const clear = document.getElementById('remove');
let box = document.createElement("div");



submit.addEventListener ('click', () => { // when you click submit, all the below should happen
    console.log("submit button clicked");
    console.log(noBoxes.value); //how many boxes should appeear
    console.log(searchTerm.value); //what the user searched for
    let boxs = parseInt(noBoxes.value); // changing the number to a number value
    let search = (searchTerm.value);

    for (i = 0; i < boxs; i++) { //how ever many numbers were entered, create that many boxes
        let box = document.createElement("div");
        box.classList.add('box'); //naming the div with a class of box
        wrapper.appendChild(box); //put them inside the wrapper div

        let ranNo = Math.ceil(Math.random()*300);
        console.log(ranNo);
        let ranImg = document.createElement("img"); //create an img
        ranImg.classList.add('img'); //call it img
        ranImg.src = `https://source.unsplash.com/random/500x500/?sig=${ranNo}&${search}`; //grabs the src from unsplash linming it to how many images and what you search
        box.appendChild(ranImg); // put the img inside the div. 
    };
});



clear.addEventListener ('click', () => {
    console.log("clear button clicked");
    searchTerm.value = ""; //clear the input fields back to nothing
    noBoxes.value = ""; // same as above

    while (wrapper.hasChildNodes()) { 
        wrapper.removeChild(wrapper.firstChild);
    };
}); 









