import style from "./Header.module.css";

function Card({item}) {
      return <>
            <div className={style.card}>
                  <div className={style.img}>
                        <img src={item.img} alt="" />
                  </div>
                  <div className={style.info}>
                        <h5>{item.title}</h5>
                        <div className={style.desc}>
                              <div className={style.left}>
                                    <p>Total Events</p>
                                    <h6>{item.totalEvents} Events</h6>
                              </div>
                              <div className={style.right}>
                                    <p>Sports</p>
                                    <h6>{item.sports}</h6>
                              </div>
                        </div>
                  </div>
            </div>
      </>
}
export default Card;