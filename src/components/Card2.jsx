import style from "./Footer.module.css";

function Card2({item}){
      return <>
            <div className={style.card}>
                  <div className={style.img}>
                        <img src={item.img} alt="" />
                  </div>
                  <div className={style.icon}>
                        <div className={style.left}></div>
                        <p></p>
                        <div className={style.right}></div>
                  </div>
                  <div className={style.info}>
                        <div>
                              <h5>{item.title}</h5>
                              <p>OCT 15 | SUN | 4:30 PM</p>
                              <p id={style.p}>{item.desc}</p>
                        </div>
                        <h4>{item.btn}</h4>
                  </div>
            </div>
      </>
}
export default Card2;