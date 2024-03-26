import style from "./Advertise.module.css";

function Advertise() {
      return <>
            <div className={style.card}>
                  <div className={style.img}>
                        <h5>Ad</h5>
                        <img src="img5.jfif" alt="" />
                  </div>
                  <div className={style.info}>
                        <h5>Advertisemnt title</h5>
                        <div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                  </div>
            </div>
      </>
}
export default Advertise;