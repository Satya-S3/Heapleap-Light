import Advertise from "./Advertise";
import Card from "./Card";
import style from "./Header.module.css";

function Header(){
      const items=[
            {
                  img:'img1.jfif',
                  title:'Sacramento River Cats',
                  totalEvents:'48',
                  sports:'Baseball',
            },
            {
                  img:'img2.jfif',
                  title:'Las Vegas Aviators',
                  totalEvents:'28',
                  sports:'Baseball',
            },
            {
                  img:'img1.jfif',
                  title:'New Jersey Devils',
                  totalEvents:'15',
                  sports:'Ice Hockey',
            },
            {
                  img:'img2.jfif',
                  title:'Las Vegas Aviators',
                  totalEvents:'28',
                  sports:'Baseball',
            },
      ]
      return <>
            <div className={style.box}>
                  <h5 className="mb-4"><span>Sports</span></h5>
                  <div className={style.innerBox}>
                        {items.map((item,index)=><Card key={index} item={item}/>)}
                        <Advertise/>
                  </div>
                  <button>See More</button>
            </div>
      </>
}
export default Header;