'use strict'

const galleryItems = [
  {preview: './IMG/Preview/preview-1.jpeg', fullview: './IMG/Fullview/fullview-1.jpeg', alt: "alt text 1"},
  {preview: './IMG/Preview/preview-2.jpeg', fullview: './IMG/Fullview/fullview-2.jpeg', alt: "alt text 2"},
  {preview: './IMG/Preview/preview-3.jpeg', fullview: './IMG/Fullview/fullview-3.jpeg', alt: "alt text 3"},
  {preview: './IMG/Preview/preview-4.jpeg', fullview: './IMG/Fullview/fullview-4.jpeg', alt: "alt text 4"},
  {preview: './IMG/Preview/preview-5.jpeg', fullview: './IMG/Fullview/fullview-5.jpeg', alt: "alt text 5"},
  {preview: './IMG/Preview/preview-6.jpeg', fullview: './IMG/Fullview/fullview-6.jpeg', alt: "alt text 6"},
  {preview: './IMG/Preview/preview-7.jpeg', fullview: './IMG/Fullview/fullview-7.jpeg', alt: "alt text 7"},
  {preview: './IMG/Preview/preview-8.jpeg', fullview: './IMG/Fullview/fullview-8.jpeg', alt: "alt text 8"},
  {preview: './IMG/Preview/preview-9.jpeg', fullview: './IMG/Fullview/fullview-9.jpeg', alt: "alt text 9"},
  {preview: './IMG/Preview/preview-10.jpeg', fullview: './IMG/Fullview/fullview-10.jpeg', alt: "alt text 10"},
  {preview: './IMG/Preview/preview-11.jpeg', fullview: './IMG/Fullview/fullview-11.jpeg', alt: "alt text 11"},
  {preview: './IMG/Preview/preview-12.jpeg', fullview: './IMG/Fullview/fullview-12.jpeg', alt: "alt text 12"},
  {preview: './IMG/Preview/preview-13.jpeg', fullview: './IMG/Fullview/fullview-13.jpeg', alt: "alt text 13"},
];

const body = document.querySelector('body');
const mainDiv = document.createElement('div');
mainDiv.classList.add('image-gallery', 'js-image-gallery');
body.append(mainDiv);
const div = document.createElement('div');
div.classList.add('fullview');
mainDiv.append(div);
const imgDiv = document.createElement('img');
imgDiv.classList.add('imgFullview');
imgDiv.setAttribute('src', galleryItems[Math.floor(Math.random() * galleryItems.length)].fullview);
div.append(imgDiv);

function getFullview(){
  imgDiv.setAttribute('src', event.target.dataset.fullview)
}

function Gallery(arr) {
  const ul = document.createElement('ul');
  ul.classList.add('preview');
  mainDiv.append(ul);
  for(const el of arr){
    // console.log(el);
    const li = document.createElement('li');
    ul.append(li);
    const imgPreview = document.createElement('img');
    imgPreview.classList.add('active');
    imgPreview.setAttribute('src', el.preview);
    imgPreview.setAttribute('data-fullview', el.fullview);
    imgPreview.setAttribute('alt', el.alt);
    li.append(imgPreview);
  }
  ul.addEventListener('click', getFullview);
  ul.addEventListener('click', activeImg);
}

function activeImg(evn) {
  let imgActive =[...document.querySelectorAll(".active")];
  imgActive.forEach(el => {
    if (evn.target !== el) {
      el.classList.remove("hover");
    } else {
      el.classList.add("hover");
    }
  })

  }
Gallery(galleryItems);