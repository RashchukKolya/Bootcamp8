/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];
let body = document.querySelector('body');

function createPostCard(el){
  let div = document.createElement('div');
  div.classList.add('post');
  body.append(div);
  
  let postImg = document.createElement('img');
  postImg.classList.add("post__image");
  postImg.setAttribute('src', el.img);
  postImg.setAttribute('alt', 'post image');
  div.prepend(postImg);
  
  let postTitle = document.createElement('h2');
  postTitle.classList.add("post__title");
  postTitle.textContent = el.title;
  div.append(postTitle);
  
  let postText = document.createElement('p');
  postText.classList.add("post__text");
  postText.textContent = el.text;
  div.append(postText);
  
  let postLink = document.createElement('a');
  postLink.classList.add('button');
  postLink.setAttribute('href', `https://${el.link}`);
  postLink.textContent = 'Read more';
  div.append(postLink);
  }

  function createCards(arr) {
    for(let el of arr){
      createPostCard(el)
    }
  }
  createCards(posts);



