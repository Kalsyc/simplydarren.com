<script lang="ts">
  import aboutSelfie from '$lib/assets/img/about-img.jpg';
  import evieSelfie from '$lib/assets/img/evie-img.jpg';
  import ContactInfo from '$lib/components/home/ContactInfo.svelte';

  const currentDate = new Date();
</script>

<div class="about-intro-section">
  <div class="about-intro-section__writeup">
    <h1>About me</h1>
    <p>
      I'm Darren Sim, a fun-loving and creative Software Engineer based in the vibrant city of Singapore.
      <br />
      <br />
      I specialize in crafting top-notch Web Development and UI/UX Design solutions, ensuring that my projects not only look great but also provide an
      exceptional user experience. 🚀
      <br />
      <br />
      When I'm not busy building awesome digital experiences, you can find me sharing my knowledge through teaching, or diving headfirst into exciting
      new projects and frameworks – I just can't resist tinkering with the latest tech! 😺
    </p>
  </div>
  <div class="about-intro-section__selfie">
    <img alt="" class="selfie__img" src={aboutSelfie} />
  </div>
</div>
<div class="about-evie-section">
  <div class="about-evie-section__writeup">
    <p>
      Meet my adorable sidekick, Evie! 🐶 She's a playful {currentDate.getFullYear() - 2022}-year(s)-old Shetland Sheepdog, always ready to brighten
      my day and inspire me with her boundless energy. Together, we make a great team, conquering the digital world and enjoying life's little
      adventures.
      <br />
      <br />
      So, go ahead and explore my website! Discover my work, my passions, and feel the enthusiasm I pour into every project. I'm thrilled to have you here,
      and I hope you'll enjoy your visit as much as I've enjoyed creating this space for you! 🎉
      <br />
      <br />
      You may contact me at <a class="writeup__mail" href="mailto:kalsycofficial@gmail.com">kalsycofficial@gmail.com</a>. I always appreciate making
      new friends :D
    </p>
    <br />
    <ContactInfo />
  </div>
  <div class="about-evie-section__selfie">
    <img alt="" class="selfie__img" src={evieSelfie} />
  </div>
</div>

<style>
  .writeup__mail {
    text-decoration: underline;
  }

  .about-intro-section {
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    gap: 1rem;
  }

  .about-evie-section {
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    gap: 1rem;
    grid-template-areas: 'a' 'b';
    margin: 1rem 0;
  }

  .about-evie-section__writeup {
    grid-area: a;
  }

  .about-intro-section__selfie {
    height: 200px;
    width: auto;
  }

  .about-evie-section__selfie {
    height: 250px;
    width: auto;
    grid-area: b;
  }

  .selfie__img {
    width: auto;
    height: 100%;
    border-radius: 25%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media screen and (min-width: 600px) {
    .about-intro-section {
      grid-template-rows: 1fr;
      grid-template-columns: 2fr 1fr;
    }

    .about-evie-section {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 2fr;
      grid-template-areas: 'b a';
    }
  }
</style>
