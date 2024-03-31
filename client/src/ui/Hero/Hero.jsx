import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.homeHeroContainer}>
      <div className={styles.heroTextCon}>
        <h1>Hungry for foodventure? Our pizzas are your passport</h1>
        <p>
          Explore our menu bursting with creativity and flavor. Each pizza is a
          masterpiece waiting to be discovered.
        </p>
        <h3>Lets create your perfect pie, together!</h3>
      </div>
      <div className={styles.heroImgCon}>
        <img
          src="https://res.cloudinary.com/dq6ad18dk/image/upload/v1711818511/6478135_26412_yxbxky.jpg"
          alt="pizza"
        />
      </div>
    </section>
  );
}

export default Hero;
