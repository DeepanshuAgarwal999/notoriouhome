import React from "react";
import styles from "./storybehind.module.css";
const StoryBehind = () => {
  return (
    <section className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.Heading}>
          <h1>
            <span>Story Behind </span>&nbsp;Notorious
          </h1>
          <p>
            Notorious' is a dazzling architectural and interior design
            masterpiece that graces the vibrant city of Jalandhar. This Rooftop
            RestoBar and speakeasy is a testament to the fusion of botanical
            aesthetics, pastel elegance, and timeless craftsmanship.
          </p>
        </div>
        <div className={styles.section}>
          <div className={styles.leftSection}>
            <img src="/images/storyImg.png" alt="" />
          </div>
          <div className={styles.rightSection}>
            <p>
              As you ascend to the open rooftop, you'll find yourself in a world
              inspired by botanical greenhouses and luxurious cabanas. The space
              breathes with life, adorned in pastel hues that create an air of
              sophistication. Highlighters accentuate long seating benches,
              while intricate grove details on granite tables add texture and
              depth, providing the perfect backdrop for solid rustic pastel
              cutlery.
            </p>
            <p>
              The heart of 'Notorious' lies in its three distinct cabanas,
              cocooned by lush landscapes, vertical gardens, and water bodies
              that form graceful strips. A small private dining area and an
              outdoor bar, adorned with vaulted arches and brass shelving
              details, break the spatial flow of the cabanas. A brass skylight
              crowns the bar, casting a gentle glow over the atmosphere. A
              central courtyard, cocooned by planters, features built-in
              seating, creating a serene retreat. Walkways with jute fabric
              shading above connect these spaces, ensuring a seamless flow.
            </p>
          </div>
        </div>
        <div className={styles.text}>
          <p>
            Metal members give life to architectural elements, while the
            hut-shaped cabanas boast glass cutouts, inviting natural light to
            dance within. The result is a serene, botanical paradise, where
            every corner is a visual masterpiece.
          </p>
          <p>
            On the opposite bank lies the speakeasy, discreetly concealed behind
            a crafty artwork-framed door. Inside, it's a captivating shift in
            ambience where the dark allure of yesteryear mingles with
            contemporary sophistication. Dark and mysterious, it exudes an air
            of refinement. Brass finishes adorn the main bar niches, pencil
            tiles blend with handmade tiles on the walls, and a stunning library
            beckons. Marble inlay flooring and intricate details grace every
            corner, while vaulted ceilings with linear tube lights create a
            sense of grandeur. Tan leather sofas and green upholstery patterned
            chairs offer a plush seating experience, complemented by
            retro-styled bar stool .
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoryBehind;
