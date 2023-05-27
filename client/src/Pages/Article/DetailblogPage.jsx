import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import "./detailblog.css"
import axios from 'axios';
export default function DetailblogPage() {
    const { id } = useParams();
    const [blogs, setblogs] = useState(
        {images:"https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-s…",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text co…",
        title:"Blog Title",
        authername:"Vishal Sharma",
        date:"27 May, 2023",
        like:0});
      const apicall=async ()=>{
          await axios.get(`/blog/singleblog/${id}`).then((res) => { setblogs(res.data) }).catch((err)=>{console.log(err)});
        }
      
        useEffect(() => {
          apicall();
        }, [])
    
  return (
    <div style={{marginTop:"10vh"}}>
        <article className="ad5-padding-y-lg">
  <header className="ad5-container ad5-max-width-xs ad5-margin-bottom-lg">
    <div className="ad5-text-component ad5-text-center ad5-line-height-lg ad5-text-gap-md ad5-margin-bottom-md">
      <h1>{blogs.title}</h1>
      <p className="ad5-color-contrast-medium ad5-text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum
        rerum amet.
      </p>
    </div>
    <div className="ad5-flex ad5-justify-center">
      <div className="author author--meta">
        <a href="#0" className="author__img-wrapper">
          <img
            src={blogs.images}
            alt="Author picture"
          />
        </a>
        <div className="author__content ad5-text-component ad5-text-gap-2xs">
          <h4 className="ad5-text-base">
            <a href="#0" rel="author">
             {blogs.authername}
            </a>
          </h4>
          <p className="ad5-text-sm ad5-color-contrast-medium">
            <time>{blogs.date}</time> - 5 min read
          </p>
        </div>
      </div>
    </div>
  </header>
  <figure className="ad5-container ad5-max-width-lg ad5-margin-bottom-lg">
    <img
      className="ad5-block ad5-width-100% ad5-radius-lg"
      src={blogs.images}
      alt="Image description"
    />
  </figure>
  <div className="ad5-container ad5-max-width-adaptive-sm">
    <div className="ad5-text-component ad5-line-height-lg ad5-text-gap-md">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
        temporibus, aut officia minus sequi quae{" "}
        <a href="#0">molestias beatae</a>, qui ipsa mollitia alias accusamus
        voluptate ratione provident numquam iure quia aliquam tempore possimus
        consequatur vel. Iure atque enim in? Magnam quis cupiditate quia labore
        quaerat, eligendi nobis, ab similique harum nostrum nulla aliquam dolore
        adipisci ut. Eaque doloremque iure veniam nobis asperiores!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        architecto doloribus perspiciatis.
      </p>
      <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, animi.{" "}
        <mark>
          Praesentium esse magnam sequi aut, repellat pariatur beatae quis
        </mark>
        . Quidem harum dolores ab velit neque suscipit vitae pariatur,
        perspiciatis voluptatum molestiae facere ad tempora. Non omnis fugiat
        libero magnam sapiente vel. Optio a, enim explicabo totam amet omnis
        accusantium! Quod.
      </p>
      <blockquote>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta
        similique quia.
      </blockquote>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat fuga
        architecto accusamus?
      </p>
      <ul className="list list--ul">
        <li>Lorem, ipsum</li>
        <li>
          Lorem ipsum dolor sit amet
          <ul className="list list--ul">
            <li>Lorem, ipsum</li>
            <li>Lorem, ipsum</li>
          </ul>
        </li>
        <li>Lorem, ipsum</li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas unde nihil
        alias culpa voluptas quibusdam aliquam, veniam nostrum. Vitae molestiae
        quia minima aut eligendi quidem expedita consequuntur recusandae ad
        itaque.
      </p>
      <ol className="list list--ol">
        <li>Lorem, ipsum</li>
        <li>
          Lorem ipsum dolor sit amet
          <ol className="list list--ol">
            <li>Lorem, ipsum</li>
            <li>Lorem, ipsum</li>
          </ol>
        </li>
        <li>Lorem, ipsum</li>
      </ol>
      <hr />
      <div className="ad5-text-component__block ad5-text-component__block--outset">
        <h3 className="ad5-text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          officiis similique enim?
        </h3>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat hic
        autem consequatur libero, impedit fugiat facere ex! Fugit, cumque minus!
      </p>
      <figure className="ad5-text-component__block">
        <img
          src="https://cdn.dribbble.com/users/310943/screenshots/2281993/empty-state-illustrations_still_2x.gif?compress=1&resize=400x300"
          alt="Image description here"
        />
        <figcaption>Image caption</figcaption>
      </figure>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto odit
        incidunt nobis cumque, assumenda quidem ducimus! Architecto, molestias
        reiciendis tempora pariatur nobis nam quibusdam, nemo repellendus rerum
        rem quam soluta.
      </p>
      <figure className="ad5-text-component__block ad5-text-component__block--left">
        <img
          src="https://cdn.dribbble.com/users/310943/screenshots/2281993/empty-state-illustrations_still_2x.gif?compress=1&resize=400x300"
          alt="Image description here"
        />
        <figcaption>Image caption</figcaption>
      </figure>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        incidunt minus vero deserunt illum perspiciatis sed sit. Officia, quia
        at? Nisi dolores quis culpa nulla eveniet? Rem vel numquam ipsa
        voluptatum voluptate illo minima, temporibus atque officia soluta magnam
        laborum neque alias consequuntur enim aliquid consequatur non accusamus
        exercitationem. Perspiciatis dolorem a commodi alias, ad corporis iusto
        magnam in quae deleniti incidunt facilis voluptatibus. Aliquid
        reprehenderit, provident, totam necessitatibus cumque vel veniam
        consequuntur maxime iure accusamus explicabo recusandae neque quas?
      </p>
      <figure className="ad5-text-component__block ad5-text-component__block--outset ad5-text-component__block--right">
        <img
          src="https://cdn.dribbble.com/users/310943/screenshots/2281993/empty-state-illustrations_still_2x.gif?compress=1&resize=400x300"
          alt="Image description here"
        />
        <figcaption>Image caption</figcaption>
      </figure>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod incidunt
        provident aspernatur quibusdam expedita soluta voluptas, sapiente ipsa
        praesentium eum earum, modi necessitatibus a eveniet quidem doloribus,
        sequi sed tenetur nesciunt consectetur totam asperiores assumenda
        inventore porro. Enim beatae iure ullam consequuntur, quibusdam
        similique quae doloribus delectus ipsa, cumque odit voluptatem? Natus,
        dolorem quaerat! Magni fugit enim nam quam beatae facilis, consequuntur
        sunt totam pariatur aperiam sequi laboriosam similique dolores
        aspernatur alias consectetur maxime voluptas, ut tempore. Ipsam vel, id
        repellat maiores non fuga unde modi voluptates nam reiciendis
        blanditiis. At veniam odit illum porro maiores magni quasi deserunt est?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        voluptatem dolore fugiat facilis sint quidem obcaecati voluptas ut quae
        aliquam dolorem omnis, odit nihil! Sint doloremque voluptates laborum
        illo excepturi eligendi asperiores corporis voluptatem iusto? Voluptatem
        repellendus consectetur exercitationem, quisquam corrupti rem reiciendis
        maiores aspernatur quaerat impedit aliquid minus voluptate, incidunt
        eveniet, et numquam non eligendi! Officiis suscipit ad illo.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam corrupti
        quia mollitia minima. Ad deserunt totam unde beatae omnis esse ipsam
        perspiciatis. Eius repellendus, quas necessitatibus fugit delectus
        magnam iusto.
      </p>
    </div>
  </div>
</article>

    </div>
  )
}
