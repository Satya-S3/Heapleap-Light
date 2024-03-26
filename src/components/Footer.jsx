import Card2 from "./Card2";
import style from "./Footer.module.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function Footer() {

      const items=[
            {
                  img:'img3.jfif',
                  title:'Las Vegas Aviators',
                  desc:'Las Vegas Ballpark, Las Vegas, Nevada',
                  btn:'Take Flight Collection',
            },
            {
                  img:'img4.jfif',
                  title:'Sacramento River Cats',
                  desc:'Sutter Health Park, Sacramento, California',
                  btn:'Orange Collection',
            },
            {
                  img:'img3.jfif',
                  title:'Las Vegas Aviators',
                  desc:'Las Vegas Ballpark, Las Vegas, Nevada',
                  btn:'Take Flight Collection',
            },
      ]


      return <>
            <div className={style.box}>
                  <h5 id={style.heading}>Collection Spotlight</h5>
                  <p id={style.title}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                  <div className={style.div}>
                        <div className={style.licon}><FaAngleLeft /></div>
                        <div className={style.cards}>
                              {items.map((item,index)=><Card2 key={index} item={item}/>)}
                        </div>
                        <div className={style.ricon}><FaAngleRight /></div>
                  </div>
            </div>
      </>
}
export default Footer;