<script lang="ts">
  import homeSelfie from '$lib/assets/img/home-img.jpg';
  import ContactInfo from '$lib/components/home/ContactInfo.svelte';
</script>

<div class="home-intro-section">
  <div class="home-intro-section__writeup">
    <h1>Hello there! 👋</h1>
    <p>
      I'm Darren Sim, a Software Engineer from Singapore, specializing in Web Development and UI/UX Design.
      <br />
      <br />
      When I'm not creating amazing digital experiences, I enjoy teaching and exploring new tech! 😺 Feel free to explore my work and passions on this
      site. Enjoy! 🎉
      <br />
      <br />
      You may contact me at <a class="home-intro-section__mail" href="mailto:kalsycofficial@gmail.com">kalsycofficial@gmail.com</a>. I always
      appreciate making new friends :D
    </p>
    <br />
    <ContactInfo />
  </div>
  <div class="home-intro-section__selfie">
    <img alt="" class="selfie__img" src={homeSelfie} />
  </div>
</div>

<style>
  .home-intro-section {
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    gap: 1rem;
  }

  .home-intro-section__mail {
    text-decoration: underline;
  }

  .home-intro-section__writeup {
    text-align: justify;
  }

  .home-intro-section__selfie {
    height: 200px;
    width: 200px;
  }

  .selfie__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media screen and (min-width: 600px) {
    .home-intro-section {
      grid-template-rows: 1fr;
      grid-template-columns: 2fr 1fr;
    }
  }
</style>
