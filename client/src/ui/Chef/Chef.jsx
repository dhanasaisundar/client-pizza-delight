import styles from "./Chef.module.css";

function Chef() {
  return (
    <section className={styles.chefSection}>
      <div className={styles.chef}>
        <div className={styles.chefImgText}>
          <p>
            Explore our chef-inspired creations, each with its own unique flair.
          </p>
          <p>
            As our head pizzaiolo, Chef Giovanni is more than just a cook – he
            is a storyteller, weaving together flavors and textures to create a
            culinary experience that delights the senses and warms the soul.
          </p>
          <p>
            Delight in the flavors of the Mediterranean with our Greek Goddess:
            tangy feta cheese, briny olives, crisp cucumbers, and juicy
            tomatoes, all kissed by the warmth of the sun and baked to
            perfection.
          </p>
        </div>
        <div className={styles.chefImgCon}>
          <img
            src="https://res.cloudinary.com/dq6ad18dk/image/upload/v1711864207/794807_14594-NPQJ9W_zuwpdm.jpg"
            alt="chef"
          />
        </div>
      </div>
      <div className={styles.iconsCons}>
        <img
          src="https://res.cloudinary.com/dq6ad18dk/image/upload/v1711864818/icons8-pizza-dough-64_kd4njy.png"
          alt="dough"
        />
        <img
          src="https://res.cloudinary.com/dq6ad18dk/image/upload/v1711947707/icons8-food-64_thzxpx.png"
          alt="slice"
        />
        <img
          src="https://res.cloudinary.com/dq6ad18dk/image/upload/v1711864878/icons8-pizza-cutter-64_1_jitiwz.png"
          alt="cutter"
        />
        <img
          src="https://res.cloudinary.com/dq6ad18dk/image/upload/v1711864723/icons8-pizza-box-65_pmdn64.png"
          alt="pizza box"
        />
        <img
          src="https://res.cloudinary.com/dq6ad18dk/image/upload/v1711864685/icons8-pizza-delivery-64_ynox9h.png"
          alt="delivery van"
        />
        <img
          src="https://res.cloudinary.com/dq6ad18dk/image/upload/v1711886775/icons8-cutlery-64_mihq5v.png"
          alt="shop"
        />
      </div>
    </section>
  );
}

export default Chef;
