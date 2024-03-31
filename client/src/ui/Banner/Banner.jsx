import styles from "./Banner.module.css";

function Banner() {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerImgCon}>
        <img
          src="https://res.cloudinary.com/dq6ad18dk/image/upload/v1711856975/4017008_15377_bal4pq.jpg"
          alt="pizza"
        />
      </div>
      <div className={styles.bannerTextCon}>
        <h2>Fresh Ingredients</h2>
        <p>
          We source the finest, freshest ingredients to ensure every slice is a
          symphony of taste
        </p>
        <h2>Customize Your Cravings</h2>
        <p>
          Make it yours! Our customization options let you build the pizza of
          your dreams, tailored to your unique palate.
        </p>
        <h2>Irresistible Creations</h2>
        <p>
          From classic favorites to daring innovations, our artisanal pizzas are
          crafted with love and served with a side of excitement.
        </p>
      </div>
    </section>
  );
}

export default Banner;
